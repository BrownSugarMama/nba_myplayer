const express  = require('express')
const router   = express.Router()

router.get('/', (req, res) => {
	res.render('layout.hbs')
}

module.exports = router



// const express   = ('express')
// const myPlayer  = require('../db/models/myPlayer')
// const Router    = require('express').Router()
// // const myPlayer  = mongoose.model('myPlayer')
// // const mongoose  = require('..models/myPlayer')

// Router.get('/', (req, res) => {
//     res.render('welcome')
//   })
  
//   Router.get('/myPlayers', (req, res) => {
//     myPlayer
//     .find({})
//     .then(candidates => {
//       res.render('myPlayers-index', { myPlayers })
//     })
//   })
  
//   Router.get('/myPlayers/:name', (req, res) => {
//     myPlayer
//     .findOne({name: req.params.name})
//     .then(myPlayer => {
//       res.render('myPlayers-show', { myPlayer })
//     })
//   })
  
//   Router.post('/myPlayers', (req, res) => {
//     myPlayer
//     .create(req.body.myPlayer)
//     .then(myPlayer => {
//       res.redirect(`/myPlayers/${myPlayer.name}`)
//     })
//   })
  
//   Router.delete('/myPlayers/:name', (req, res) => {
//     myPlayer
//     .findOneAndRemove({name: req.params.name})
//     .then(() => {
//       res.redirect('/myPlayers')
//     })
//   })
  
//   Router.put('/myPlayers/:name', (req, res) => {
//     myPlayer
//     .findOneAndUpdate({name: req.params.name}, req.body.myPlayer, {new: true})
//     .then(myPlayer => {
//       res.redirect(`/myPlayers/${myPlayer.name}`)
//     })
//   })
  
  module.exports = Router
