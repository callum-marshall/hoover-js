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
})
