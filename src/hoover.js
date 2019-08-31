const fs = require('fs')

class Hoover {
  constructor (filename) {
    this.input = fs.readFileSync(`${filename}`, 'utf8').split(/\n/)
    this.roomSize = this.coordinates(this.input[0])
    this.currentLocation = this.coordinates(this.input[1])
    this.dirtPatches = this.coordinatesArray(this.input.slice(2, -1))
    this.instructions = this.input[this.input.length - 1].split('')
    this.routeTaken = []
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
      newArray.push(location)
    })
    this.routeTaken = newArray
    return location
  }

  dirtCleaned (route, dirtPatches) {
    let cleaned = 0
    dirtPatches.forEach(function (dirt, index) {
      route.forEach(function (place) {
        if (dirt[0] === place[0] && dirt[1] === place[1]) {
          cleaned += 1
          dirt = 'cleaned'
        }
      })
    })
    return cleaned
  }
}

module.exports = {
  Hoover
}
