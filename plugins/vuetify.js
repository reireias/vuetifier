import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    accent: colors.pink.base,
    secondary: colors.lightGreen.base,
    info: colors.blue.base,
    warning: colors.orange.base,
    error: colors.red.base,
    success: colors.green.base
  }
})
