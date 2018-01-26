const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('welcome')
})

module.exports = router

const myPlayer = require('../db/models/myPlayer')
const Router = require('express').Router()
// const myPlayer  = mongoose.model('myPlayer')
// const mongoose  = require('..models/myPlayer')

Router.get('/', (req, res) => {
  res.render('welcome')
})

Router.get('/myPlayers', (req, res) => {
  myPlayer
    .find({})
    .then(myplayers => {
      res.render('myplayerList', { myPlayers })
    })
})

Router.get('/myPlayers/:position', (req, res) => {
  myPlayer
    .findOne({position: req.params.position})
    .then(myPlayer => {
      res.render('myplayerCatalog', { myPlayer })
    })
})

Router.post('/myPlayers', (req, res) => {
  myPlayer
    .create(req.body.myPlayer)
    .then(myPlayer => {
      res.redirect(`/myPlayers/${myPlayer.position}`)
    })
})

Router.delete('/myPlayers/:position', (req, res) => {
  myPlayer
    .findOneAndRemove({position: req.params.position})
    .then(() => {
      res.redirect('/myPlayers')
    })
})

Router.put('/myPlayers/:position', (req, res) => {
  myPlayer
    .findOneAndUpdate({position: req.params.position}, req.body.myPlayer, {new: true})
    .then(myPlayer => {
      res.redirect(`/myPlayers/${myPlayer.position}`)
    })
})

module.exports = Router
