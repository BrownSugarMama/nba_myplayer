const mongoose = require('mongoose')

// mongoose.Promise = Promise

const Myplayer = new mongoose.Schema({
  name: String,
  position: String
})

mongoose.model('Myplayer', Myplayer)

module.exports = mongoose
