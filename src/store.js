import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { precisionRound } from './common/util.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerId: 0,
    playerProfile: {},
    playerMatches: [],
    playerHeroes: [],
    currentHeroCount: 0, // 记录当前查询过的英雄数量
    currentMatchCount: 8
  },
  getters: {
    topPlayedHeroes(state) {
      return count => {
        return state.playerHeroes.slice(0, count)
      }
    },
    top8HeroesKDA(state, getters) {
      // ..
    }
  },
  mutations: {
    updatePlayerId(state, playId) {
      state.playerId = playId
    },
    updatePlayerProfile(state, playerProfile) {
      state.playerProfile = playerProfile
    },
    updatePlayerMatches(state, playerMatches) {
      state.playerMatches = playerMatches
    },
    updatePlayerHeroes(state, playerHeroes) {
      state.playerHeroes = playerHeroes
    },
    addKDAToPlayerHeroes(state, payload) {
      const { index, KDA } = payload
      const currentHeroesData = state.playerHeroes[index]
      currentHeroesData.KDA = KDA
      state.playerHeroes.splice(index, 1, currentHeroesData)
    },
    updateCurrentHeroCount(state) {
      state.currentHeroCount++
    },
    updateCurrentMatchCount(state, count) {
      state.currentMatchCount += count
    }
  },
  actions: {
    getHeroesKDA({state, commit}, heroCount) {
      return new Promise((resolve, reject) => {
        if (heroCount > state.playerHeroes.length) return
        const currentHeroCount = state.currentHeroCount
        const totalHeroNumber = state.playerHeroes.length
        // 防止查询数量超过英雄数量
        if (currentHeroCount + heroCount > totalHeroNumber) {
          heroCount = totalHeroNumber - currentHeroCount
        }
        for (let index = currentHeroCount; index < heroCount + currentHeroCount; index++) {
          /* eslint-disable camelcase */
          const { hero_id, KDA } = state.playerHeroes[index]
          const params = { hero_id }
          if (!KDA) {
            axios.get(`https://api.opendota.com/api/players/${state.playerId}/totals`, { params })
              .then((res) => {
                const { data } = res
                // 计算KDA，考虑D===0的情况，结果小数点后保留precision位
                const [totalKill, totalDeath, totalAssists] = [data[0].sum, data[1].sum, data[2].sum]
                const KDA = precisionRound(((totalKill + totalAssists) / (totalDeath === 0 ? 1 : totalDeath)), 2)
                commit('addKDAToPlayerHeroes', {index, KDA})
                commit('updateCurrentHeroCount')
                resolve()
              })
          }
        }
      })
    },
    getMatchDetails() {

    }
  }
})
