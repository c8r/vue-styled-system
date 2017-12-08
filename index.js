const system = require('./system')

const props = defaultProps => Object.assign({}, system, defaultProps)

const withTheme = theme => ({
  data () {
    return {
      get theme () {
        return theme
      }
    }
  }
})

module.exports = props
module.exports.withTheme = withTheme
