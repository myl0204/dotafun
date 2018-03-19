const path = require('path')
const express = require('express')
const apiRouter = express.Router()
const playerData = require('./mockApi/playerdata.json')
const heroesData = require('./mockApi/heroesdata.json')
const matchesData = require('./mockApi/matchesdata.json')
const totalsData = require('./mockApi/totalsdata.json')
function resolve (dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  devServer: {
    before(app) {
      apiRouter.get('/playerData', (req, res) => {
        res.json({
          data: playerData
        })
      })
      apiRouter.get('/heroesData', (req, res) => {
        res.json({
          data: heroesData
        })
      })
      apiRouter.get('/matchesData', (req, res) => {
        res.json({
          data: matchesData
        })
      })
      apiRouter.get('/totalsData', (req, res) => {
        res.json({
          data: totalsData
        })
      })
      app.use('/api', apiRouter)
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@@', resolve('src/components'))
    if (process.env.NODE_ENV === 'production') {
      config.output
        .publicPath('/dotafun/')
    }
  }
}