const nonZeroInt = require('./nonZeroInt')
const {validToInvalid} = require('../helpers')

module.exports = validToInvalid('a negative integer', nonZeroInt)
