const fs = require('fs')

class Hoover {
  constructor (filename) {
    this.input = fs.readFileSync(`${filename}`, 'utf8').split(/\n/)
    this.roomSize = this._coordinates(this.input[0])
    this.currentLocation = this._coordinates(this.input[1])
    this.dirtPatches = this.input.slice(2, -1)
    this.instructions = this.input[this.input.length - 1].split('')
    this.routeTaken = []
    this.cleanedUp = 0
  }

  navigateRoute (location, instructions) {
    const newArray = []
    instructions.forEach(function (direction) {
      let x = location[0]
      let y = location[1]

      switch (direction) {
        case 'N': y += 1
          break
        case 'E': x += 1
          break
        case 'S': y -= 1
          break
        case 'W': x -= 1
          break
      }
      location = [x, y]
      newArray.push(`${x} ${y}`)
    })
    this.routeTaken = newArray
    return newArray
  }

  cleanDirt (routeTaken, dirtPatches) {
    let cleaned = 0
    dirtPatches.forEach(function (dirt) {
      if (routeTaken.includes(dirt)) {
        cleaned += 1
      }
    })
    this.cleanedUp = cleaned
    return cleaned
  }

  printOutput () {
    console.log(`${this.routeTaken[this.routeTaken.length - 1]}\n${this.cleanedUp}`)
  }

  _coordinates (string) {
    return string.split(' ').map(Number)
  }
}

module.exports = {
  Hoover
}
