const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('noon and midnight', () => {
  test('noon', () => {
    const time = timeWord("12:00")
    expect(time).toEqual("noon")
  })
  
  test('midnight', () => {
    const time = timeWord("00:00")
    expect(time).toEqual("midnight")
  })
})

describe('AM hours', () => {
  test("zero minutes", () => {
  const time1 = timeWord("01:00")
  expect(time1).toEqual("one o'clock am")
  })
  test("minutes starting with zero", () => {
  const time2 = timeWord("06:03")
  expect(time2).toEqual("six o'three am")
  })
  test("two non-zero digits in minutes", () => {
  const time3 = timeWord("10:34")
  expect(time3).toEqual("ten thirty four am")
  })
})

describe('PM hours', () => {
  test("any PM time", () => {
  const time1 = timeWord("13:00")
  const time2 = timeWord("18:03")
  const time3 = timeWord("22:34")
  expect(time1).toEqual("one o'clock pm")
  expect(time2).toEqual("six o'three pm")
  expect(time3).toEqual("ten thirty four pm")
  })
})