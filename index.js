const {
  space,
  fontSize,
  width,
  color
} = require('styled-system')

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

const hoc = el => {
  const newProps = Object.assign({}, el.props || {}, { system })

  return Object.assign({}, el, { props: newProps })
}

module.exports = hoc
module.exports.withTheme = withTheme

// Export styled-system functions for convenience
module.exports.space = space
module.exports.fontSize = fontSize
module.exports.width = width
module.exports.color = color
