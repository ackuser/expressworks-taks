hello

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "[{\"title\":\"Express.js Guide\",\"tags\":[\"node.js\",\"express.js\"],\"url\":\"http://expressjsguide.com\"},{\"title\":\"Rapid Prototyping with JS\",\"tags\":[\"backbone.js\",\"node.js\",\"mongodb\"],\"url\":\"http://rpjs.co\"},{\"title\":\"JavaScript: The Good Parts\",\"tags\":[\"javascript\"]}]" ==    "[{\"title\":\"Express.js Guide\",\"tags\":[\"node.js\",\"express.js\"],\"url\":\"http://expressjsguide.com\"},{\"title\":\"Rapid Prototyping with JS\",\"tags\":[\"backbone.js\",\"node.js\",\"mongodb\"],\"url\":\"http://rpjs.co\"},{\"title\":\"JavaScript: The Good Parts\",\"tags\":[\"javascript\"]}]"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to JSON ME passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    var fs = require('fs')

    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })

    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You've finished all the challenges! Hooray!
