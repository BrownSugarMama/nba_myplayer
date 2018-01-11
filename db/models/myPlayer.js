const mongoose = require('mongoose')

const MyPlayer = new mongoose.Schema({
    pointGuard: String,
    shootingGuard: String,
    smallForward: String,
    powerForward: String,
    center: String
})

mongoose.model('MyPlayer', MyPlayer)

module.exports = mongoose
