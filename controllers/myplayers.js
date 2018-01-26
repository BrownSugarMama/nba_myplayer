const express = require('express')
const Router = express.Router()

// Router.get('/', (req, res) => {
//   res.render('welcome')
// })

const mongoose = require('../db/connection')
const Myplayer = mongoose.model('Myplayer')
// const Router = require('express').Router()
// const myPlayer  = mongoose.model('myPlayer')
// const mongoose = require('..models/myPlayer')

// Router.get('/', (req, res) => {
//   res.render('welcome')
// })

Router.get('/', (req, res) => {
  Myplayer
    .find({})
    .then(myplayers => {
      res.render('myplayerList', { myplayers })
    })
})

Router.get('/:position', (req, res) => {
  Myplayer
    .find({position: req.params.position})
    .then(myplayers => {
      res.render('myplayerCatalog', { myplayers })
    })
})

Router.post('/', (req, res) => {
  Myplayer.create(req.body.myplayer).then(myplayer => {
    res.redirect(`/myplayers/${myplayer.position}`)
  })
  .catch(err => console.log('Something went wrong. Error:', err))
})

Router.delete('/:position', (req, res) => {
  Myplayer.findOneAndRemove({ position: req.params.position }).then((myplayer) => {
    res.redirect('/myplayers')
  })
  .catch(err => console.log('Something went wrong. Error:', err))
})

Router.put('/:position', (req, res) => {
  Myplayer.findOneAndUpdate({ position: req.params.position }, req.body.myplayer, {
    new: true
  }).then(myplayer => {
    res.redirect(`/myplayers/${myplayer.position}`)
  })
  .catch(err => console.log('Something went wrong. Error:', err))
})

module.exports = Router
