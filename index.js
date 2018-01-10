const express       = require ('express')
const parser        = require ('body-parser')
const hbs           = require ('express-handlebars')
// const methodOveride = require ('method-override')
const myPlayer      = require ('./controllers/myPlayers')
const app           = express ()

app.set('port', process.env.PORT || 3001)
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
app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// app.listen(app.get('port'), () => {
//   console.log(`✅  WHAT UP DOE! on PORT: ${app.get('port')} Aww...yeah!🌟`);
// });

// app.listen(app.get('port'), console.log(`It's aliiive on PORT`, app.get('port'))
