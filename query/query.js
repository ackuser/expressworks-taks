var express = require('express')
var app = express()

/*app.param(['results', 'include_tabs'], function (req, res, next, value) {
  console.log('CALLED ONLY ONCE with', value);
  next();
})*/


app.get('/search', function (req, res, next) {
  //console.log('hello')
  /*var object = {
    results: req.query.results,
    include_tabs: req.query.include_tabs
  }*/
  res.send(req.query)
  //console.log(object)
  //next()
})


app.listen(process.argv[2] || 9000)

//curl -X PUT -d id=1234 http://localhost:9000/message/1234
