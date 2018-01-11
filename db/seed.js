const mongoose  = require('./connection')
const seedData    = require('./playerData.json')
const myPlayer = mongoose.model('myPlayer');

// Not sure which way or even if this variable should be declared
// const myPlayer = mongoose.model('myPlayer', MyPlayerSchema)

mongoose.Promise = Promise
​
myPlayer.remove({}).then(_ => {
 console.log('Ball up, you bish')
 myPlayer.collection.insert(seedData).then(seededEntries => {
  console.log(seededEntries)
  mongoose.connection.close()
  })
})
