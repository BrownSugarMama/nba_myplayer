const mongoose = require('mongoose')

const MyPlayer = new mongoose.Schema({
    position: String,
    height: String,
    archetype1: String,
    archetype2: String,
    playmaking: String,
    defense: String,
    rebounding: String
})

mongoose.model('MyPlayer', MyPlayer)

module.exports = mongoose
