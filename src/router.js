import Vue from 'vue'
import Router from 'vue-router'
import Introduction from './components/Introduction'
import OverView from './components/OverView'
import Heroes from './components/Heroes'
import Matches from './components/Matches'
import Trend from './components/Trend'
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
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches
    },
    {
      path: '/trend',
      name: 'trend',
      component: Trend
    }
  ]
})
