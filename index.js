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

const sx = props => {
  const systemProps = {
    ...this._props,
    theme: this.theme
  }

  return [
    space(systemProps),
    fontSize(systemProps),
    width(systemProps),
    color(systemProps)
  ].reduce((acc, curr) => Object.assign({}, acc, curr))
}

module.exports = el => {
  const newProps = Object.assign({}, el.props || {}, { system })

  return Object.assign({}, el, { props: newProps })
}
