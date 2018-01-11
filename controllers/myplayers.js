const express  = require('express')
const router   = express.Router()
const mongoose = require('../db/connection')
const MyPlayer = mongoose.model('MyPlayer')

// router.get('/', (req, res) => {
//   res.render('welcome')
// })

// Should be able to Create, find and update a MyPlayer. Delete maybe?

// Get the list/info of MyPlayers
router.get('/', (req, res) => {
  MyPlayer.find({})
    .then((myplayer) => {
      res.render('myPlayerList', {
        myplayer: myplayer
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

