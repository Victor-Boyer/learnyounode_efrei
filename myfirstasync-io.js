'use strict'
const fs = require('fs')
const fic = process.argv[2]

fs.readfic(fic, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const ligne = contents.toString().split('\n').length - 1
  console.log(ligne)
})