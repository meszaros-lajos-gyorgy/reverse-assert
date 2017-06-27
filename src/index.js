const plainObject = require('./datas/plainObject')
const boolWithNull = require('./datas/boolWithNull')
const int = require('./datas/int')
const nonZeroInt = require('./datas/nonZeroInt')
const nonZeroPositiveInt = require('./datas/nonZeroPositiveInt')
const boolWithNullArray = require('./datas/boolWithNullArray')

const assert = require('assert')

const {
  compose,
  forEach,
  toPairs
} = require('ramda')

const testWithType = it => (f, type, expected) => compose(
  forEach(([name, value]) => {
    it(`returns ${expected}, when given parameter is ${name}`, () => {
      assert.equal(f(value), expected)
    })
  }),
  toPairs
)(type)

module.exports = {
  testWithType,
  plainObject,
  boolWithNull,
  int,
  nonZeroInt,
  nonZeroPositiveInt,
  boolWithNullArray
}
