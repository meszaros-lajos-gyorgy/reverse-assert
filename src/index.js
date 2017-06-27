const plainObject = require('./datas/plainObject')
const boolWithNull = require('./datas/boolWithNull')
const int = require('./datas/int')
const nonZeroInt = require('./datas/nonZeroInt')
const nonZeroPositiveInt = require('./datas/nonZeroPositiveInt')
const boolWithNullArray = require('./datas/boolWithNullArray')
const prime = require('./datas/prime')

const assert = require('assert')

const {
  compose,
  forEach,
  toPairs,
  curry,
  join,
  addIndex,
  map,
  when,
  always,
  prepend
} = require('ramda')

var getMethodName = (deep = true, strict = false) => {
  return compose(
    join(''),
    addIndex(map)((el, index) => {
      if (index > 0) {
        const [cap, ...rest] = el
        return cap.toUpperCase() + rest.join('')
      } else {
        return el
      }
    }),
    when(always(deep), prepend('deep')),
    when(always(strict), prepend('strict'))
  )(['equal'])
}

const testWithType = curry((it, f, type, expected, deep = false, strict = true) => compose(
  forEach(([name, value]) => {
    it(`returns ${expected}, when given parameter is ${name}`, () => {
      if (isNaN(expected)) {
        assert.equal(isNaN(f(value)), true)
      } else {
        assert[getMethodName(deep, strict)](f(value), expected)
      }
    })
  }),
  toPairs
)(type))

module.exports = {
  testWithType,
  plainObject,
  boolWithNull,
  int,
  nonZeroInt,
  nonZeroPositiveInt,
  boolWithNullArray,
  prime
}
