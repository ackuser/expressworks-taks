var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.set('view engine', 'jade')
app.set('views', 'templates')
app.use(bodyparser.urlencoded({extended: false}))
app.get('/form', function(req, res) {
  res.render('form')
})
app.post('/form',function(req, res) {
//  console.log(req.body)
//  console.log(req.body.str.split('').reverse().join(''))
  res.render('form', {string: req.body.str.split('').reverse().join(''), port:process.argv[2]})
})
app.listen(process.argv[2] || 9000)
