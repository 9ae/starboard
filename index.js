const express = require('express')
const app = express()
const db = require('./output/data.js')

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', {title: 'Style Guide'}))
app.get('/dashboard', (req, res) => res.render('dashboard',
  {
    title: 'Starboard',
    cats: db.categories
  }))
app.get('/fandom/:domname', (req, res) => {
  let fandom = db.fandoms[req.params.domname];
  return res.render('fandom', {
    title: fandom.name,
    cats: fandom.subdoms
  });
})

app.use(express.static('output'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
