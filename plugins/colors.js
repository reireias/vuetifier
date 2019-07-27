import colors from 'vuetify/es5/util/colors'

const allColors = []
Object.keys(colors).forEach(color => {
  Object.keys(colors[color]).forEach(value => {
    allColors.push(colors[color][value])
  })
})

export default allColors
