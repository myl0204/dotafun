<template>
  <div class="heroes">
    <span>常用英雄</span>
    <el-table
      :data="playerData"
      stripe>
      <el-table-column
        label="英雄">
        <template slot-scope="scope">
          <img class="hero-avatar" :src="heroImgUrl + playerData[scope.$index].heroEName + heroImgUrlEnd" alt="">
          <span>{{playerData[scope.$index].heroName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="games"
        label="比赛">
      </el-table-column>
      <el-table-column
        prop="winRate"
        label="胜率">
      </el-table-column>
      <el-table-column
        prop="kda"
        label="KDA">
      </el-table-column>
    </el-table>
    <el-button
    class="button-more"
    type="primary"
    icon="el-icon-more"
    :loading="isLoading"
    @click="getMoreHeroes"></el-button>
  </div>
</template>

<script>
import { precisionRound } from '@/common/util.js'
import heroNameMap from '@/common/mixins/heroNameMap.js'
export default {
  mixins: [heroNameMap],
  data() {
    return {
      isLoading: false,
      rankMap: ['先锋', '卫士', '中军', '统帅', '传奇', '万古流芳', '超凡入圣'],
      heroImgUrl: 'https://cdn.dota2.com/apps/dota2/images/heroes/',
      heroImgUrlEnd: '_hphover.png'
    }
  },
  computed: {
    playerId() {
      return this.$store.state.playerId
    },
    currentHeroCount() {
      return this.$store.state.currentHeroCount
    },
    playerData() {
      return this.$store.getters.topPlayedHeroes(this.currentHeroCount).map(data => {
        let index = data.hero_id - 1
        if (data.hero_id >= 25) { // hero_id没有24
          index--
          if (data.hero_id >= 119) { // 115-118为空
            index -= 4
          }
        }
        const heroName = this.heroNameMap[index].chinese_name
        const heroEName = this.heroNameMap[index].name.substr(14)
        const winRate = data.games === 0 ? 0 : precisionRound((data.win / data.games) * 100, 2) + '%'
        return {
          heroName,
          heroEName,
          games: data.games,
          winRate,
          kda: data.KDA
        }
      })
    }
  },
  methods: {
    getMoreHeroes(ev, count = 15) {
      this.$store.dispatch('getHeroesKDA', count)
    }
  }
}
</script>

<style lang="scss">

</style>
