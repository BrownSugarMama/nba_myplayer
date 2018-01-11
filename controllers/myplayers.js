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
    .then((myplayers) => {
      res.render('myPlayerList', {
        myplayers: myplayers
      })
    })
})

// Get or find a single of MyPlayers
router.get('/:position', (req, res) => {
  var pos = req.params.position
  MyPlayer.findOne({ position: pos })
  .then(myplayer => {
    res.render('myPlayer', { myplayer: myplayer })
  })
})

// Update and edit a MyPlayer
// router.get('/', (req, res) => {
//   res.render('edit')
//   })

router.get('/myPlayer', (req, res) => {
  res.render('edit')
})

router.put('/:name', (req, res) => {
  MyPlayer.findOneAndUpdate({ name: req.params.name }, req.body.myPlayer, { new: true })
  .then(myPlayer => {
    res.redirect(`/myPlayer/${myPlayer.name}`)
  })
})

// Add a new Myplayer's info
router.post('/', (req, res) => {
  MyPlayer.create(req.body.myplayer)
    .then(myplayer => {
      res.redirect(`/myPlayers`)
    })
})


//Delete a MyPlayer. Not sure if I want this functionality on my app
router.delete('/:name', (req, res) => {
  MyPlayer.findOneAndRemove({ name: req.params.name })
  .then(myPlayer => {
    res.redirect('/myPlayer')
  })
})


module.exports = router

