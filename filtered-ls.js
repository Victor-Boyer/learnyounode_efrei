'use strict'
const fs = require('fs')
const path = require('path')

const dossier = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(dossier, function (err, fic) {
  if (err) return console.error(err)
  fic.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})