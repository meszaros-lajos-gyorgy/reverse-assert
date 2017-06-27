module.exports = {
  valid: {
    'true': true,
    'false': false,
    'null': null
  },
  invalid: {
    'a number': 10,
    'a string': 'foo bar',
    'undefined': undefined,
    'an array': [1, 2, 3],
    'NaN': NaN,
    'an object': {a: 10, b: 20}
  }
}
