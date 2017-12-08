const test = require('ava')
const system = require('./')
const { withTheme } = require('./' )

const FIXTURE = {
  name: 'foo',
  props: {
    bg: {
      default: 'blue'
    }
  }
}

test('system assigns system props', t => t.snapshot(system(FIXTURE)))
test('withTheme adds a theme global mixin', t => t.snapshot(withTheme({})))
