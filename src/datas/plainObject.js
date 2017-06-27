class Test {}

module.exports = {
  valid: {
    'plain object': {a: 10, b: 20}
  },
  invalid: {
    'an array': [1, 2, 3],
    'an instance of a class': new Test(),
    'null': null,
    'a builtin object': Math,
    'boolean': false,
    'a number': 12,
    'a string': 'foo'
  }
}
