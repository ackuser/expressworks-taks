Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED
────────────────────────────────────────────────────────────────────────────────

   "p {"                               ==    "p {"
   "  color: #f00;"                    ==    "  color: #f00;"
   "}"                                 ==    "}"
   ""                                  ==    ""

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to STYLISH CSS passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()

    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));


    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You have 3 challenges left.
Type 'expressworks' to show the menu.
