<template>
  <div class="overview" v-loading="isLoading">
    <div class="player-basic">
      <div class="player-info">
        <img class="player-avatar" :src="playerProfile.avatarmedium" alt="">
        <span class="player-name">{{ playerProfile.personaname}}</span>
      </div>
      <div class="player-rank">
        <img :src="rankTierUrl" alt="rankTier" class="pic">
        <!-- <div class="pic" :class="'rank' + rank"></div> -->
      </div>
    </div>
    <div class="player-detail">
      <ul>历史数据
        <li>场次:{{totalGame}}</li>
        <li>kda:{{kda}}</li>
        <li>gpm:{{gpm}}</li>
        <li>xpm:{{xpm}}</li>
      </ul>
      <div class="win_rate">
        <span>胜率:{{winRate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { precisionRound } from '@/common/util.js'
export default {
  data() {
    return {
      isLoading: false,
      // rankMap: ['先锋', '卫士', '中军', '统帅', '传奇', '万古流芳', '超凡入圣'],
      heroImgUrl: 'http://cdn.dota2.com/apps/dota2/images/heroes/',
      heroImgUrlEnd: '_hphover.png'
    }
  },
  computed: {
    playerId() {
      return this.$store.state.playerId
    },
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
      return require('../assets/rank_tiers/SeasonalRank' + this.rank + '.png')
    },
    totalGame() {
      const {win, lose} = this.playerProfile
      return win + lose
    },
    winRate() {
      const {win, lose} = this.playerProfile
      return precisionRound(win / (win + lose), 4) * 100 + '%'
    },
    kda() {
      const {kills, deaths, assists} = this.playerProfile
      return precisionRound((kills + assists) / (deaths === 0 ? 1 : deaths), 2)
    },
    gpm() {
      return parseInt(this.playerProfile.gold_per_min / this.totalGame)
    },
    xpm() {
      return parseInt(this.playerProfile.xp_per_min / this.totalGame)
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
  .player-basic {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    .player-info {
      width: 80px;
      text-align: center;
      .player-avatar {
        border: 2px solid $--color-primary
      }
      .player-name {
        display: block;
      }
    }
    .player-rank {
      font-size: 0;
      .pic {
        display: block;
        width: 128px;
      }
    }
  }
  .player-detail {
    display: flex;
    justify-content: space-around;
    align-items: center;
    ul {
      width: 80px;
      margin: 0;
      -webkit-padding-start: 0;
      list-style: none;
    }
    .win_rate {
      width: 128px;
      text-align: center;
    }
  }
}
</style>
