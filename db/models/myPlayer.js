const mongoose = require('mongoose')

mongoose.model()

const MyPlayer = new mongoose.Schema({
    pointGuard: String,
    shootingGuard: String,
    smallForward: String,
    powerForward: String,
    center: String
})

module.exports = mongoose
