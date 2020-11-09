'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, fitlre_str, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (fic) {
      return path.extname(fic) === '.' + fitlre_str
    })

    callback(null, list)
  })
}
