const express = require('express')
const Router = express.Router()

const mongoose = require('../db/connection')
const Myplayer = mongoose.model('Myplayer')

Router.get('/', (req, res) => {
  Myplayer.find({})
    .then((myplayers) => {
      res.render('myplayers-list', { myplayers: myplayers })
    })
})

Router.get('/:name', (req, res) => {
  var name = req.params.name
  Myplayer.findOne({ name: name })
    .then(myplayer => {
      res.render('myplayers-show', { myplayer: myplayer })
    })
})

Router.post('/', (req, res) => {
  Myplayer.create(req.body.myplayer).then(myplayer => {
    res.redirect(`/myplayers/${myplayer.name}`)
  })
})

Router.put('/:name', (req, res) => {
  Myplayer.findOneAndUpdate({ name: req.params.name }, req.body.myplayer, { new: true })
  .then(myplayer => {
    res.redirect(`/myplayers`)
  })
})

Router.delete('/:name', (req, res) => {
  Myplayer.findOneAndRemove({ name: req.params.name })
  .then(() => {
    res.redirect('/myplayers')
  })
})

module.exports = Router
