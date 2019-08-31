const fs = require('fs')

class Hoover {
  constructor (filename) {
    this.input = fs.readFileSync(`${filename}`, 'utf8').split(/\n/)
    this.roomSize = this.input[0].split(' ').map(Number)
    this.currentLocation = this.input[1].split(' ').map(Number)
    this.dirtPatches = this.dirtArray()
  }

  dirtArray () {
    let array = []
    this.input.slice(2, -1).forEach(function(dirt) {
      array.push(dirt.split(' ').map(Number))
    })
    return array
  }

}

module.exports = {
  Hoover
}
