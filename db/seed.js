const mongoose = require('./connection')
const seedData = require('./playerData.json')

const Myplayer = mongoose.model('Myplayer')

// const mongoose = require('./connection')
// const seedData = require('./playerData.json')
// const myplayer = mongoose.model('Myplayer')

// Not sure which way or even if this variable should be declared
// const myPlayer = mongoose.model('myPlayer', MyPlayerSchema)

mongoose.Promise = Promise

// Myplayer.remove({}).then(() => {
//   return Myplayer.collection
//   .insert(seedData)
//   .then(() => {
//     process.exit()
//   })
// })

Myplayer.remove({}).then(_ => {
  console.log('DB up in dis bish!')
  Myplayer.collection.insert(seedData).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
