const { Hoover } = require('../src/hoover')

describe('Hoover', () => {
  let hoover

  test('reads the text file and saves it as an array of strings', () => {
    hoover = new Hoover('./spec/TestFile.txt')
    expect(hoover.input).toEqual(['5 5', '1 1', '2 2', 'NESW'])
  })
})
