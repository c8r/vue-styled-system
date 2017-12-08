# vue-styled-system [![Build Status](https://secure.travis-ci.org/c8r/vue-styled-system.svg?branch=master)](https://travis-ci.org/c8r/vue-styled-system) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Design system utilities for Vue based on [styled-system](https://github.com/jxnblk/styled-system).

## Installation

```sh
npm i -S vue-styled-system
```

## Usage

##### Passing theme context to components

In order to allow components to access the theme, you can declare a global mixin using `withTheme`.

```js
import Vue from 'vue'
import { withTheme } from 'vue-styled-system'
import theme from './theme.json'

Vue.mixin(withTheme(theme))
```

##### Adding styled-system props

Since Vue requires all props to be defined, you can call the default function to assign all props that are missing defaults:

```js
import { color, space, fontSize, width } from 'styled-system'
import styled from 'vue-styled-components'
import system from 'vue-styled-system'
import theme from '../../theme.json'

const NewButton = styled('button', system({
  px: { default: 4 },
  py: { default: 2 },
  color: { default: 'white' },
  bg: { default: 'blue' },
  theme: { default: theme }
}))`
  display: inline-block;
  font-family: inherit;
  border-width: 0px;
  border-radius: 4px;
  appearance: none;
  ${color}
  ${space}
  ${fontSize}
  ${width}
`

export default NewButton
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Made by [Compositor](https://twitter.com/getcompositor)).
