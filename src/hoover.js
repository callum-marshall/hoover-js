const fs = require('fs')

class Hoover {
  constructor (filename) {
    this.input = fs.readFileSync(`${filename}`, 'utf8').split(/\n/)
    this.roomSize = this.coordinates(this.input[0])
    this.currentLocation = this.coordinates(this.input[1])
    this.dirtPatches = this.coordinatesArray(this.input.slice(2, -1))
    this.instructions = this.input[this.input.length - 1].split('')
  }

  coordinates (string) {
    return string.split(' ').map(Number)
  }

  coordinatesArray (array) {
    const coordinatesArray = []
    array.forEach(function (dirt) {
      coordinatesArray.push(dirt.split(' ').map(Number))
    })
    return coordinatesArray
  }
}

module.exports = {
  Hoover
}
