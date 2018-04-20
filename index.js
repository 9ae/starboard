const express = require('express')
const app = express()
const db = require('./data.js')

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', {title: 'Style Guide'}))
app.get('/dashboard', (req, res) => res.render('dashboard',
  {
    title: 'Starboard',
    cats: db.categories,
    fandoms: db.fandoms
  })
)
app.get('/fandom/:domname', (req, res) => {
  let fandom = db.fandoms[req.params.domname];
  return res.render('fandom', {
    title: fandom.name,
    cats: fandom.subdoms,
    threads: fandom.threads,
    isJoined: true
  });
})
app.get('/circle', (req, res) =>
  res.render('peacecircle', {
    title: 'Peace Circle',
    participants: db.peacecircle.participants,
    states: db.peacecircle.states
  })
)
app.get('/profile', (req, res) =>
  res.render('profile', { title: 'My Account'})
)

app.get('/post', (req, res) =>
  res.render('post', { title: 'Contribute'})
)

app.use(express.static('output'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
