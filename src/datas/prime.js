module.export = {
  valid: {
    '2': 2,
    '3': 3,
    '13': 13,
    '71': 71,
    '263': 263,
    '977': 977,
    '1871': 1871
  },
  invalid: {
    '1': 1,
    'a floating point number': 13.8,
    'a string': 'F',
    'boolean': true,
    'an infinite fraction': Math.PI,
    '9': 9,
    'a negative number': -7
  }
}
