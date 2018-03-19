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
  methods: {
    ...mapMutations([
      'updatePlayerId',
      'updatePlayerProfile',
      'updatePlayerMatches',
      'updatePlayerHeroes'
    ]),
    search() {
      const playerId = this.input
      // const axios = this.$http
      function getPlayerData() {
        return axios.get(`https://api.opendota.com/api/players/${playerId}`)
      }
      // 获取玩家英雄数据，结果包含游戏局数，胜场，作为队友的局数，胜场，作为对手的局数，胜场
      function getHeroData(param) {
        return axios.get(`https://api.opendota.com/api/players/${playerId}/heroes`, param)
      }
      // 获取所有游戏场次
      function getMatches(param) {
        return axios.get(`https://api.opendota.com/api/players/${playerId}/matches`, param)
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
      this.$http.all([getPlayerData(), getHeroData(), getMatches()])
        .then(axios.spread((player, hero, matches) => {
          if (player.data.profile) {
            this.profile = player.data.profile
            this.profile.rank_tier = player.data.rank_tier
            if (player.data.leaderboard_rank) {
              this.profile.leaderboard_rank = player.data.leaderboard_rank
            }
            this.updatePlayerId(playerId)
            this.updatePlayerProfile(this.profile)
            this.updatePlayerHeroes(hero.data)
            this.updatePlayerMatches(matches.data)
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
