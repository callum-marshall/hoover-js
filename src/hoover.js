const fs = require('fs')

class Hoover {
  constructor (filename) {
    this.input = fs.readFileSync(`${filename}`, 'utf8').split(/\n/)
    this.roomSize = this.coordinates(this.input[0])
    this.currentLocation = this.coordinates(this.input[1])
    this.dirtPatches = this.input.slice(2, -1)
    this.instructions = this.input[this.input.length - 1].split('')
    this.routeTaken = []
    this.cleanedUp = 0
  }

  coordinates (string) {
    return string.split(' ').map(Number)
  }

  navigateRoute (location, instructions) {
    const newArray = []
    instructions.forEach(function (direction) {
      let x = location[0]
      let y = location[1]
      if (direction === 'N') {
        y += 1
      } else if (direction === 'S') {
        y -= 1
      } else if (direction === 'E') {
        x += 1
      } else if (direction === 'W') {
        x -= 1
      }
      location = [x, y]
      newArray.push(`${x} ${y}`)
    })
    this.routeTaken = newArray
    return newArray
  }

  dirtCleaned (route, dirtPatches) {
    let cleaned = 0
    dirtPatches.forEach(function (dirt) {
      if (route.includes(dirt)) {
        cleaned += 1
      }
    })
    this.cleanedUp = cleaned
    return cleaned
  }

  printOutput () {
    console.log(`${this.routeTaken[this.routeTaken.length - 1]}\n${this.cleanedUp}`)
  }
}

module.exports = {
  Hoover
}
