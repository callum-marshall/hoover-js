const { Hoover } = require('../src/hoover')

describe('Feature Tests', () => {
  let hoover

  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  test('runs evaluation correctly', () => {
    hoover = new Hoover('./spec/test_files/test_file2.txt')
    hoover.navigateRoute(hoover.currentLocation, hoover.instructions)
    hoover.dirtCleaned(hoover.routeTaken, hoover.dirtPatches)
    hoover.printOutput()
    expect(console.log).toHaveBeenCalledWith('1 3\n1')
  })
})
