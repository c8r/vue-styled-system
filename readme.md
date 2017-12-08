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


```js
<template>
  <button :style='sx'>
    <slot></slot>
  </button>
<template>

<script>
import styled, {
  space,
  fontSize,
  width,
  color
} from 'vue-styled-components'

export default styled({
  name: 'MyButton'
})

</script>

<style scoped></style>
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
