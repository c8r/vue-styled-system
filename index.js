const {
  space,
  fontSize,
  width,
  color
} = require('styled-system')
const styleSystemProps = require('./styled-system-props')

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
  const props = Object.keys(el.props || {})
  const newProps = Object.assign({}, props, styledSystemProps)

  return Object.assign({}, el, { props }, { sx })
}

module.exports = hoc
module.exports.withTheme = withTheme

// Export styled-system functions for convenience
module.exports.space = space
module.exports.fontSize = fontSize
module.exports.width = width
module.exports.color = color
