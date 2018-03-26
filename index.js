const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))
app.get('/dashboard', (req, res) => res.render('dashboard'))

app.use(express.static('output'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
