import pkg from './package'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/vuetifier/'
        }
      }
    : {}

export default {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,400&display=swap&subset=japanese'
      }
    ]
  },
  env: {
    vuetifyVersion: process.env.VUETIFY_VERSION || 'unknown'
  },
  loading: { color: '#fff' },
  css: ['~/assets/style/app.styl'],
  plugins: ['@/plugins/vuetify'],
  modules: ['@nuxtjs/pwa'],
  build: {
    transpile: ['vuetify/lib'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...routerBase
}
