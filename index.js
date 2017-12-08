const system = require('./system')

module.exports.withTheme = theme => ({
  data () {
    return {
      get theme () {
        return theme
      }
    }
  }
})

module.exports = el => {
  const newProps = Object.assign({}, el.props || {}, { system })

  return Object.assign({}, el, { props: newProps })
}
