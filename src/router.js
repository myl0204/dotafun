import Vue from 'vue'
import Router from 'vue-router'
import Introduction from './components/Introduction'
import OverView from './components/OverView'
import Heroes from './components/Heroes'
import Matches from './components/Matches'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverView
    },
    {
      path: '/mostHeroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/recentMatches',
      name: 'matches',
      component: Matches
    }
  ]
})
