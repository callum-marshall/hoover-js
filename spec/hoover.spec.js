const { Hoover } = require('../src/hoover')

describe('Hoover', () => {
  let hoover

  beforeEach(() => {
    hoover = new Hoover('./spec/TestFile.txt')
  })

  test('reads the text file and saves it as an array of strings', () => {
    expect(hoover.input).toEqual(['5 5', '1 1', '2 2', 'NESW'])
  })

  test('stores room size as coordinates', () => {
    expect(hoover.roomSize).toEqual([5, 5])
  })

  test('stores current location as coordinates', () => {
    expect(hoover.currentLocation).toEqual([1, 1])
  })

  test('stores dirt locations as an array of coordinates', () => {
    expect(hoover.dirtPatches).toEqual([[2, 2]])
  })
})
