var express = require('express')
var app = express()
var fs = require('fs');


app.get('/books', function (req, res, next) {
  //console.log('hello')
  fs.readFile(process.argv[3], 'utf8', function (err,data) {
  if (err) {
    return console.log(err)
  }
    res.send(object = JSON.parse(data))
  })
})


app.listen(process.argv[2] || 9000)

//curl -X PUT -d id=1234 http://localhost:9000/message/1234
