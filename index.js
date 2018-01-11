const express         = require ('express')
const parser          = require ('body-parser')
const hbs             = require ('express-handlebars')
const methodOverride  = require ('method-override')
const myPlayers       = require ('./controllers/myPlayers')
const app             = express ()

app.set('port', process.env.PORT || 3050)

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout'
})
);

app.use('/assets', express.static('public'))

app.use(parser.urlencoded({ extended: true }))

app.use('/myPlayers', myPlayers)

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('welcome')
})

app.listen(app.get('port'), () => {
  console.log(`WHAT UP DOE ${app.get('port')} AYEEEEEE 🌟`)
})
