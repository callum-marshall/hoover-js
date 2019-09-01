const { Hoover } = require('./src/hoover.js')

const hoover = new Hoover('./input.txt')

hoover.navigateRoute(hoover.currentLocation, hoover.instructions)
hoover.cleanDirt(hoover.routeTaken, hoover.dirtPatches)
hoover.printOutput()
