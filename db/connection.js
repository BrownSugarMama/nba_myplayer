const mongoose = require('./models/myplayer')

const mongoUri = 'mongodb://localhost/myplayer'

mongoose.Promise = Promise

if (process.env.NODE_ENV == 'production') {
  mongoose
      .connect(process.env.MLAB_URL)
      .then(connection => console.log(`Successful connection to the database'${connection.db.databaseName}'`))
      .catch(connectionError => console.log('Oh no! What could have possibly gone wrong!', connectionError))
} else {
  mongoose
      .connect(mongoUri, { useMongoClient: true })
      .then(connection => console.log(`Successful connection to the database'${connection.db.databaseName}'`))
      .catch(connectionError => console.log('Oh no! What could have possibly gone wrong!', connectionError))
}

module.exports = mongoose
