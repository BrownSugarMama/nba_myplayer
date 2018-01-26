const mongoose = require('mongoose')

const Myplayer = new mongoose.Schema({
  position: String,
  height: String,
  archetype1: String,
  archetype2: String,
  playmaking: String,
  defense: String,
  rebounding: String
})

mongoose.model('Myplayer', Myplayer)

module.exports = mongoose
