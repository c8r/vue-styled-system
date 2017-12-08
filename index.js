const system = require('./system')

const withTheme = theme => ({
  data () {
    return {
      get theme () {
        return theme
      }
    }
  }
})

const hoc = el => {
  const newProps = Object.assign({}, system, el.props || {})

  return Object.assign({}, el, { props: newProps })
}

module.exports = hoc
module.exports.withTheme = withTheme
