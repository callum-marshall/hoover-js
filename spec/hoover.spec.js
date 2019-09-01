const { Hoover } = require('../src/hoover')

describe('Hoover', () => {
  let hoover

  beforeEach(() => {
    hoover = new Hoover('./spec/test_files/test_file1.txt')
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
    expect(hoover.dirtPatches).toEqual(['2 2', '3 4'])
  })

  test('stores intructions as an array of directions', () => {
    expect(hoover.instructions).toEqual(['N', 'E', 'S', 'W'])
  })

  describe('#coordinates', () => {
    test('converts strings to coordinates', () => {
      expect(hoover._coordinates('1 2')).toEqual([1, 2])
    })
  })

  describe('#navigateRoute', () => {
    test('navigates route and returns final location', () => {
      expect(hoover.navigateRoute([1, 1], ['W', 'S', 'E', 'N', 'N'])).toEqual(['0 1', '0 0', '1 0', '1 1', '1 2'])
    })
  })

  describe('#dirtCleaned', () => {
    test('returns the number of dirt patches cleaned', () => {
      expect(hoover.dirtCleaned(['0 1', '0 0', '1 0', '1 1', '1 2'], ['1 1', '2 2'])).toEqual(1)
    })
  })
})
