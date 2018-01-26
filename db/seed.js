const mongoose = require('./connection')
const seedData = require('./playerData.json')
const myplayer = mongoose.model('Myplayer')

// Not sure which way or even if this variable should be declared
// const myPlayer = mongoose.model('myPlayer', MyPlayerSchema)

mongoose.Promise = Promise

myplayer.remove({}).then(_ => {
  console.log('Ball up, you bish')
  myplayer.collection.insert(seedData).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
