const mongoose = require('./models/myplayer')

const mongoUri = 'mongodb://localhost/myplayer'

mongoose.Promise = Promise

if (process.env.NODE_ENV == 'production') {
  mongoose
      .connect(process.env.MLAB_URL)
      .then(connection => console.log(`Successful connection to the database'${connection.db.databaseName}'`))
      .catch(connectionError => console.log('Oh no! Connection to prod database failed!', connectionError))
} else {
  mongoose
      .connect(mongoUri, { useMongoClient: true })
      .then(connection => console.log(`Successful connection to the database'${connection.db.databaseName}'`))
      .catch(connectionError => console.log('Oh no! Connection to prod database failed!', connectionError))
}

// ORIGINAL DB CODE TO ESTABLISH CONNECTION W/ HEROKU
// if (process.env.NODE_ENV == "production") {
//     mongoose.connect(process.env.MLAB_URL)
//   } else {
//     mongoose.connect("mongodb://localhost/myplayer");
//   }

module.exports = mongoose
