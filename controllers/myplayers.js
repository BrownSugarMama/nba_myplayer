const express  = require('express')
const router   = express.Router()
const mongoose = require('../db/connection')
const myPlayer = mongoose.model('MyPlayer')

router.get('/', (req, res) => {
  res.render('welcome')
})

// Should be able to Create, find and update a MyPlayer. Delete maybe?

// Get the list/info of MyPlayers
router.get('/', (req, res) => {
  myPlayer.find({})
    .then((myPlayer) => {
      res.render('myPlayer-list', {
        myplayer: myPlayer
      })
    })
})

// Get or find a single of MyPlayers
router.get('/:name', (req, res) => {
  var name = req.params.name
  myPlayer.findOne({ name: name })
  .then(myPlayer => {
    res.render('myPlayer', { myPlayer: myPlayer })
  })
})

// Update and edit a MyPlayer
router.put('/:name', (req, res) => {
  myPlayer.findOneAndUpdate({ name: req.params.name }, req.body.myPlayer, { new: true })
  .then(myPlayer => {
    res.redirect(`/myPlayer/${myPlayer.name}`)
  })
})

// Add a new Myplayer's info
router.post('/', (req, res) => {
  myPlayer.create(req.body.myPlayer)
    .then(myPlayer => {
      res.redirect(`/myPlayer/${myPlayer.name}`)
    })
})


//Delete a MyPlayer. Not sure if I want this functionality on my app
router.delete('/:name', (req, res) => {
  myPlayer.findOneAndRemove({ name: req.params.name })
  .then(myPlayer => {
    res.redirect('/myPlayer')
  })
})


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
//     .then(myplayers => {
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
//    })
  
