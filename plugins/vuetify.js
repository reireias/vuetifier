import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.pink.base,
          secondary: colors.lightGreen.base,
          info: colors.blue.base,
          warning: colors.orange.base,
          error: colors.red.base,
          success: colors.green.base
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
