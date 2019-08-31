const fs = require('fs')

class Hoover {
  constructor (filename) {
    this.input = fs.readFileSync(`${filename}`, 'utf8').split(/\n/)
    this.roomSize = this.input[0].split(' ').map(Number)
  }
}

module.exports = {
  Hoover
}
