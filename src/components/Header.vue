<template>
  <div class="header-container">
    <span>logo</span>
    <el-input placeholder="请输入dota2 ID" v-model="input" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    ...mapMutations([
      'updatePlayerId',
      'updatePlayerProfile',
      'updatePlayerMatches',
      'updatePlayerHeroes'
    ]),
    search() {
      // const playerId = this.input
      // 获取玩家基本信息
      function getPlayerData() {
        return axios.get(`/api/playerData`)
      }
      // 获取玩家英雄数据，结果包含游戏局数，胜场，作为队友的局数，胜场，作为对手的局数，胜场
      function getHeroData(param) {
        return axios.get(`/api/heroesData`, param)
      }
      // 获取所有游戏场次
      function getMatches(param) {
        return axios.get(`/api/matchesData`, param)
      }
      // 获取玩家生涯所有击杀/死亡等信息
      function getTotals(param) {
        return axios.get(`/api/totalsData`)
      }
      // 获取玩家胜负局数
      function getWL() {
        return axios.get('https://api.opendota.com/api/players/121135691/wl')
      }
      // 综合数据
      // function getTatols(param) {
      //   return axios.get(`https://api.opendota.com/api/players/${playerId}/totals`, param)
      // }
      // getPlayerData()
      //   .then((res) => {
      //     if (res.data.profile) {
      //       this.profile = res.data.profile
      //       this.profile.rank_tier = res.data.rank_tier
      //       this.updatePlayerId(playerId)
      //     } else {
      //       // 查无此人
      //     }
      //   })
      this.$http.all([getPlayerData(), getHeroData(), getMatches(), getTotals(), getWL()])
        .then(axios.spread((player, hero, matches, totals, wl) => {
          if (player.data.data.profile) {
            this.profile = player.data.data.profile
            this.profile.rank_tier = player.data.data.rank_tier
            this.profile.win = wl.data.win
            this.profile.lose = wl.data.lose
            this.profile.kills = totals.data.data[0].sum
            this.profile.deaths = totals.data.data[1].sum
            this.profile.assists = totals.data.data[2].sum
            this.profile.gold_per_min = totals.data.data[4].sum
            this.profile.xp_per_min = totals.data.data[5].sum
            if (player.data.data.leaderboard_rank) {
              this.profile.leaderboard_rank = player.data.data.leaderboard_rank
            }
            this.updatePlayerId(121135691)
            this.updatePlayerProfile(this.profile)
            this.updatePlayerHeroes(hero.data.data)
            this.updatePlayerMatches(matches.data.data)
            this.$store.dispatch('getHeroesKDA', 8)
            // this.updatePlayerMatches(matches.data)
          }
        }))
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.header-container {
  width: 100%;
  display: flex
}
</style>
