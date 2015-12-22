Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "{\"results\":\"recent\",\"type\":\"quote\",\"page\":\"5\"}" ==    "{\"results\":\"recent\",\"type\":\"quote\",\"page\":\"5\"}"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to WHAT'S IN QUERY passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()

    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })

    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You have one challenge left
Type 'expressworks' to show the menu.
