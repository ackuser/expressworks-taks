var express = require('express')
var app = express()
//console.log(__dirname)
//console.log(__dirname + '/public/css/')
app.use(require('stylus').middleware(process.argv[3] || __dirname + '/public'))
app.use(process.argv[3] || express.static(__dirname + '/public'));
app.listen(process.argv[2] || 9000)
