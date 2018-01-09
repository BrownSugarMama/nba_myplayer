const express       = require ('express')
const parser        = require ('body-parser')
const hbs           = require ('express-handlebars')
const methodoveride = require ('method-override')
const myPlayer      = require ('./controllers/myPlayers.js')
const app           = express ()

app.set('port', process.env.PORT || 3001)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(app.get('port'), console.log(`It's aliiive on PORT`, app.get('port'))
