<template>
  <div class="matches">
    <span>最近比赛</span>
    <el-table
      :data="matchData"
      :cell-class-name="setClass">
      <el-table-column
        label="英雄">
        <template slot-scope="scope">
          <img class="hero-avatar" :src="heroImgUrl + matchData[scope.$index].heroEName + heroImgUrlEnd" alt="">
          <span>{{matchData[scope.$index].heroName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="match_id"
        label="比赛ID">
      </el-table-column>
      <el-table-column
        prop="end_time"
        label="结束时间">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
      <el-table-column
        prop="kda"
        label="KDA">
      </el-table-column>
      <el-table-column
        prop="level"
        label="水平">
      </el-table-column>
    </el-table>
    <el-button
    class="button-more"
    type="primary"
    icon="el-icon-more"></el-button>
  </div>
</template>

<script>
import heroNameMap from '@/common/mixins/heroNameMap.js'
import { precisionRound } from '@/common/util.js'
export default {
  mixins: [heroNameMap],
  // created() {
  //   // console.log(this.$store.state.playerMatches)
  //   this._initMatchData()
  // },
  // // updated() {
  // //   console.log('up')
  // //   this._initMatchData()
  // // },
  // beforeRouteEnter(to, from, next) {
  //   console.log('enter')
  //   next(vm => {
  //     console.log(vm.$store.state.playerMatches)
  //   })
  // },
  data() {
    return {
      timeStamp: 0,
      map: ['', 'Normal', 'High', 'Very High'],
      heroImgUrl: 'https://cdn.dota2.com/apps/dota2/images/heroes/',
      heroImgUrlEnd: '_hphover.png'
    }
  },
  computed: {
    currentMatchCount() {
      return this.$store.state.currentMatchCount
    },
    matchData() {
      return this.$store.state.playerMatches.slice(0, this.currentMatchCount).map(data => {
        let index = data.hero_id - 1
        if (data.hero_id >= 25) { // hero_id没有24
          index--
          if (data.hero_id >= 119) { // 115-118为空
            index -= 4
          }
        }
        const heroName = this.heroNameMap[index].chinese_name
        const heroEName = this.heroNameMap[index].name.substr(14)
        /* eslint-disable camelcase */
        const _end_time = (data.start_time + data.duration) * 1000 // 结束时间，单位是毫秒
        const end_time = this.getTime(_end_time)
        const isRadiant = data.player_slot <= 127
        const level = this.map[data.skill]
        const {kills, deaths, assists, match_id} = data
        const kda = precisionRound((kills + assists) / (deaths === 0 ? 1 : deaths), 1)
        let result
        if (isRadiant) {
          result = data.radiant_win ? '胜利' : '失败'
        } else {
          result = data.radiant_win ? '失败' : '胜利'
        }
        return {
          heroName,
          heroEName,
          match_id,
          _end_time,
          end_time,
          result,
          kda,
          level
        }
      })
    }
  },
  methods: {
    getTime(endTime) { // 获取结束时间。相对现在来说。
      this.timeStamp = Date.now()
      let diff = (this.timeStamp - endTime) / 60000 // 分钟数
      if (diff < 60) {
        return `${parseInt(diff)}分钟前`
      }
      diff /= 60
      if (diff < 24) {
        return `${parseInt(diff)}小时前`
      }
      diff /= 24
      if (diff < 30) {
        return `${parseInt(diff)}天前`
      }
      if (diff < 365) {
        return `${parseInt(diff / 30)}月前`
      } else {
        return `${parseInt(diff / 365)}年前`
      }
    },
    updateTime() {
      this.matchData.forEach(matchData => {
        matchData.end_time = this.getTime(matchData._end_time)
      })
    },
    setClass(obj) {
      if (obj.columnIndex === 3) {
        const className = obj.row.result === '胜利' ? 'result-win' : 'result-lose'
        return className
      }
    }
  }
}
</script>

<style lang="scss">
.el-table {
  .el-table__row {
    .result-win {
      color: #499249
    }
    .result-lose {
      color: #c23c2a
    }
  }
}
</style>
