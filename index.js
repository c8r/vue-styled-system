const withTheme = theme => ({
  data () {
    return {
      get theme () {
        return theme
      }
    }
  }
})

module.exports.withTheme = withTheme
