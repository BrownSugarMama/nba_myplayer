const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('welcome')
})

const Myplayer = require('../db/models/myPlayer')
const Router = require('express').Router()
// const myPlayer  = mongoose.model('myPlayer')
// const mongoose = require('..models/myPlayer')

Router.get('/', (req, res) => {
  res.render('welcome')
})

Router.get('/myplayers', (req, res) => {
  myPlayer
    .find({})
    .then(myplayers => {
      res.render('myplayerList', { myplayers })
    })
})

router.get('/:title', (req, res) => {
  Recipe.findOne({ title: req.params.title }).then(recipe => {
    res.render('recipe-detail', { recipe })
  })
})

Router.get('/myPlayers/:position', (req, res) => {
  myPlayer
    .findOne({position: req.params.position})
    .then(myPlayer => {
      res.render('myplayerCatalog', { myPlayer })
    })
})

router.get('/:title', (req, res) => {
  Recipe.findOne({ title: req.params.title }).then(recipe => {
    res.render('recipe-detail', { recipe })
  })
})

router.post('/', (req, res) => {
  Myplayer.create(req.body.myplayer).then(myplayer => {
    res.redirect(`/myplayers/${myplayer.position}`)
  })
})

router.delete('/:position', (req, res) => {
  Myplayer.findOneAndRemove({ position: req.params.position }).then(() => {
    res.redirect('/myplayers')
  })
})

router.put('/:position', (req, res) => {
  Myplayer.findOneAndUpdate({ position: req.params.title }, req.body.myplayer, {
    new: true
  }).then(myplayer => {
    res.redirect(`/myplayers/${myplayer.title}`)
  })
})

module.exports = Router
