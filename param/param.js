var express = require('express')
var app = express()
var crypto = require('crypto')
//console.log(__dirname)
//console.log(__dirname + '/public/css/')
app.put('/message/:id', function(req, res){

  var id = req.params.id
  //console.log('hello world')
  //console.log(req.params.id)

var crypt = crypto
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
  res.send(crypt)
  //console.log(crypt)
});

app.param('id', function (req, res, next, id) {
  req.id = id
  next()
})

app.get('/message/:id', function (req, res, next) {
  console.log(req.id)
  next()
})


app.listen(process.argv[2] || 9000)

//curl -X PUT -d id=1234 http://localhost:9000/message/1234
