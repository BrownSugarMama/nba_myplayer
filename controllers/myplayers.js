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

Router.get('/:name', (req, res) => {
  Myplayer
    .find({name: req.params.name})
    .then(myplayer => {
      res.render('myplayerCatalog', { myplayer })
    })
})

Router.post('/', (req, res) => {
  Myplayer.create(req.body.myplayer).then(myplayer => {
    res.redirect(`/myplayers/${myplayer.name}`)
  })
  .catch(err => console.log('Something went wrong. Error:', err))
})

Router.put('myplayers/:name', (req, res) => {
  Myplayer.findOneAndUpdate({ name: req.params.name }, req.body.myplayer, { new: true })
  .then(myplayer => {
    res.redirect(`/myplayers/${myplayer.name}`)
  })
})

Router.delete('/myplayers/:name', (req, res) => {
  Myplayer.findOneAndRemove({ name: req.params.name })
  .then(() => {
    res.redirect('/myplayers')
  })
})

// Router.delete('/:name', (req, res) => {
//   Myplayer.findOneAndRemove({ name: req.params.name })
//   .then(() => {
//     res.redirect('/myplayers')
//   })
// })

module.exports = Router
