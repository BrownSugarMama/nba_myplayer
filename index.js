const express         = require ('express')
const parser          = require ('body-parser')
const hbs             = require ('express-handlebars')
const methodOverride  = require ('method-override')
const MyPlayers       = require ('./controllers/myplayers')
const app             = express ()
const cors            = require ('cors')

app.set('port', process.env.PORT || 3050)
app.use(cors())

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout'
})
)

app.use('/assets', express.static('public'))

app.use(parser.urlencoded({ extended: true }))

app.use('/myPlayers', MyPlayers)

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('welcome')
})

app.listen(app.get('port'), () => {
  console.log(`WHAT UP DOE ${app.get('port')} AYEEEEEE 🌟`)
})
