const mongoose = require('./connection')
const seeds  = require('./seeds.json')
​
const People = mongoose.model('People', PersonSchema)
​
mongoose.Promise = Promise
​
People.remove({}).then(_ => {
 console.log('We in this bish')
 People.collection.insert(seeds).then(seededEntries => {
  console.log(seededEntries)
  mongoose.connection.close()
 })
})
