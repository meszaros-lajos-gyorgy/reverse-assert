const {
  path,
  dissocPath,
  assocPath,
  converge,
  compose,
  curry,
  identity
} = require('ramda')

const moveKey = curry((from, to, key, object) => compose(
  dissocPath([from, key]),
  converge(assocPath([to, key]), [
    path([from, key]),
    identity
  ])
)(object))

const validToInvalid = moveKey('valid', 'invalid')
const invalidToValid = moveKey('invalid', 'valid')

module.exports = {
  validToInvalid,
  invalidToValid
}
