module.exports = {
  valid: {
    'an empty array': [],
    'an array containing "bool" values': [false, null, true]
  },
  invalid: {
    'undefined': undefined,
    'a number': 12,
    'false': false,
    'null': null,
    'a string': 'foo',
    'an object': {a: 10, b: 20},
    'an array of numbers': [1, 2, 3],
    'an array of strings': ['foo', 'bar'],
    'an array with undefined': [undefined]
  }
}
