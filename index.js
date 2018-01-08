const express = require('express')
const app     = express()

app.set('port', process.env.PORT || 3001)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(app.get('port'), console.log(`It's aliiive on PORT`, app.get('port'))
