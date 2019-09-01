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
    const routeArray = []
    const room = this.roomSize
    instructions.forEach(function (direction) {
      let x = location[0]
      let y = location[1]

      switch (direction) {
        case 'N': if (y < room[0]) y++
          break
        case 'E': if (x < room[0]) x++
          break
        case 'S': if (y > 0) y--
          break
        case 'W': if (x > 0) x--
          break
      }
      location = [x, y]
      routeArray.push(`${x} ${y}`)
    })
    this.routeTaken = routeArray
    return routeArray
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
