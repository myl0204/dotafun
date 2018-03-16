<template>
  <div class="overview" v-loading="isLoading">
    <div class="player">
      <div class="player-info">
        <img class="player-avatar" :src="playerProfile.avatarmedium" alt="">
        <span class="player-name">{{ playerProfile.personaname}}</span>
      </div>
      <div class="player-rank">
        <!-- <img class="player-avatar" :src="playerProfile.avatarmedium" alt=""> -->
        <div class="pic" :class="'rank' + rank"></div>
      </div>
    </div>
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
  </div>
</template>

<script>
import { heroNameMap, precisionRound } from '@/common/util.js'
export default {
  data() {
    return {
      isLoading: false,
      rankMap: ['先锋', '卫士', '中军', '统帅', '传奇', '万古流芳', '超凡入圣'],
      heroImgUrl: 'http://cdn.dota2.com/apps/dota2/images/heroes/',
      heroImgUrlEnd: '_hphover.png'
    }
  },
  computed: {
    playerProfile() {
      return this.$store.state.playerProfile
    },
    rank() {
      const leaderboardRank = this.playerProfile.leaderboard_rank
      if (leaderboardRank) {
        if (leaderboardRank === 1) {
          return 'Top1'
        } else if (leaderboardRank <= 10) {
          return 'Top10'
        } else if (leaderboardRank <= 100) {
          return 'Top100'
        } else {
          return 'Top1000'
        }
      } else {
        const rankTier = this.playerProfile.rank_tier
        if (rankTier) {
          return parseInt(rankTier / 10) + '-' + rankTier % 10
        } else {
          return '0-0'
        }
      }
    },
    rankTierUrl() {
      return '../assets/rank_tiers/SeasonalRank' + this.rank + '.png'
    },
    playerData() {
      return this.$store.getters.top8PlayedHeroes.map(data => {
        let index = data.hero_id - 1
        if (data.hero_id >= 25) { // hero_id没有24
          index--
          if (data.hero_id >= 119) { // 115-118为空
            index -= 4
          }
        }
        const heroName = heroNameMap[index].chinese_name
        const heroEName = heroNameMap[index].name.substr(14)
        const winRate = precisionRound((data.win / data.games) * 100, 2) + '%'
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
  }
}
</script>

<style lang="scss">
@import '../common/scss/mixin';
@import '../common/scss/variables';
.overview {
  .player {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .player-info {
      .player-avatar {
        border: 2px solid $--color-primary
      }
      .player-name {
        display: block;
      }
    }
    .player-rank {
      transform: scale(.5);
      .pic {
        display: block;
        width: 256px;
        height: 256px;
        @for $i from 1 through 7 {
          @for $j from 0 through 5 {
            &.rank#{$i}-#{$j} {
              background-image: url('../assets/rank_tiers/SeasonalRank#{$i}-#{$j}.png')
            }
          }
        }
        // background-image: url('../assets/rank_tiers/SeasonalRankTop1.png')
      }
    }
  }
  span {
    text-align: center;
  }
  .el-table__row {
    .cell {
      line-height: 40px;
      vertical-align: top;
    }
    .hero-avatar {
      height: 40px;
      margin-right: 5px;
      vertical-align: top;
      // height: 100%;
    }
  }
  .avatar-container {
    text-align: center;
    .avatar {
      border-radius: 50%
    }
  }
}
</style>
