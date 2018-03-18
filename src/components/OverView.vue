<template>
  <div class="overview" v-loading="isLoading">
    <div class="player">
      <div class="player-info">
        <img class="player-avatar" :src="playerProfile.avatarmedium" alt="">
        <span class="player-name">{{ playerProfile.personaname}}</span>
      </div>
      <div class="player-rank">
        <img :src="rankTierUrl" alt="rankTier">
        <!-- <div class="pic" :class="'rank' + rank"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
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
      font-size: 0;
      .pic {
        display: block;
        width: 256px;
        height: 256px;
        // @for $i from 1 through 7 {
        //   @for $j from 0 through 5 {
        //     &.rank#{$i}-#{$j} {
        //       background-image: url('../assets/rank_tiers/SeasonalRank#{$i}-#{$j}.png')
        //     }
        //   }
        // }
        // background-image: url('../assets/rank_tiers/SeasonalRankTop1.png')
      }
    }
  }
  span {
    text-align: center;
  }
}
</style>
