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
    playerHeroes: []
  },
  getters: {
    top8PlayedHeroes(state) {
      return state.playerHeroes.slice(0, 8)
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
    }
  },
  actions: {
    getHeroesKDA({state, commit}, heroCount) {
      // getters.top8PlayedHeroes.forEach((heroData) => {
      if (heroCount > state.playerHeroes.length) return
      for (let index = 0; index < heroCount; index++) {
        /* eslint-disable camelcase */
        const { hero_id, KDA } = state.playerHeroes[index]
        const params = { hero_id }
        if (!KDA) {
          axios.get(`https://api.opendota.com/api/players/${state.playerId}/totals`, { params })
            .then((res) => {
              const { data } = res
              // 小数点后保留precision位
              const KDA = precisionRound(((data[0].sum + data[2].sum) / data[1].sum), 2)
              commit('addKDAToPlayerHeroes', {index, KDA})
            })
        }
      }
    }
  }
})
