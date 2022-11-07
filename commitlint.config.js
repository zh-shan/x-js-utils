const { types } = require('./.cz-config.js')
const typeList = types.map(item => item.value)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeList]
  }
}
