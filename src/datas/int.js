module.exports = {
  valid: {
    'zero': 0,
    'a negative integer': -72000,
    'a positive integer': 57
  },
  invalid: {
    'Infinity': Infinity,
    'PI': Math.PI,
    'a negative float': -54.62,
    'a positive float': 27.1954,
    'an infinite fraction': 10 / 3
  }
}
