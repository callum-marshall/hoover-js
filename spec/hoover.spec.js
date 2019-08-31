const { Hoover } = require('../src/hoover')

describe('Hoover', () => {
  let hoover

  beforeEach(() => {
    hoover = new Hoover('./spec/TestFile.txt')
  })

  test('reads the text file and saves it as an array of strings', () => {
    expect(hoover.input).toEqual(['5 5', '1 1', '2 2', '3 4', 'NESW'])
  })

  test('stores room size as coordinates', () => {
    expect(hoover.roomSize).toEqual([5, 5])
  })

  test('stores current location as coordinates', () => {
    expect(hoover.currentLocation).toEqual([1, 1])
  })

  test('stores dirt locations as an array of coordinates', () => {
    expect(hoover.dirtPatches).toEqual([[2, 2], [3, 4]])
  })

  test('stores intructions as an array of directions', () => {
    expect(hoover.instructions).toEqual(['N', 'E', 'S', 'W'])
  })

  describe('#coordinates', () => {
    test('converts strings to coordinates', () => {
      expect(hoover.coordinates('1 2')).toEqual([1, 2])
    })
  })

  describe('#coordinatesArray', () => {
    test('converts an array of strings to an array of coordinates', () => {
      expect(hoover.coordinatesArray(['1 2', '3 4'])).toEqual([[1, 2], [3, 4]])
    })
  })

  describe('#navigateRoute', () => {
    test('navigates route and returns final location', () => {
      expect(hoover.navigateRoute([1, 1], ['W', 'S', 'E', 'N', 'N'])).toEqual([1, 2])
    })
  })

  describe('#navigateRoute', () => {
    test('navigates route and returns final location', () => {
      expect(hoover.navigateRoute([1, 1], ['W', 'S', 'E', 'N', 'N'])).toEqual([1, 2])
    })
  })

  describe('#dirtCleaned', () => {
    test('returns the number of dirt patches cleaned', () => {
      expect(hoover.dirtCleaned([[1, 3], [1, 4], [2, 4], [2, 3], [3, 3], [4, 3], [4, 2], [3, 2], [3, 3], [2, 3], [1, 3]], [[1, 0], [2, 2], [2, 3]])).toEqual(1)
    })
  })
})
