const { Hoover } = require('../src/hoover')

describe('Feature Tests', () => {
  let hoover

  beforeEach(() => {
    jest.spyOn(console, 'log')
  })

  test('hoovering has no effect on a cleaned patch ', () => {
    hoover = new Hoover('./spec/test_files/test_file2.txt')
    hoover.navigateRoute(hoover.currentLocation, hoover.instructions)
    hoover.cleanDirt(hoover.routeTaken, hoover.dirtPatches)
    hoover.printOutput()
    expect(console.log).toHaveBeenCalledWith('1 3\n1')
  })

  test('driving into walls has no effect', () => {
    hoover = new Hoover('./spec/test_files/test_file3.txt')
    hoover.navigateRoute(hoover.currentLocation, hoover.instructions)
    hoover.cleanDirt(hoover.routeTaken, hoover.dirtPatches)
    hoover.printOutput()
    expect(console.log).toHaveBeenCalledWith('5 5\n0')
  })
})
