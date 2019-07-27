import colors from 'vuetify/es5/util/colors'
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
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: '#9f00a7' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Vuetifier'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://reireias.github.io/vuetifier'
      },
      { hid: 'og:title', property: 'og:title', content: 'reireias portfolio' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Vuetify.js UI component and color examples.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://reireias.github.io/vuetifier/vuetifier.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@reirei_As'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vuetifier'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Vuetify.js UI component and color examples.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://reireias.github.io/vuetifier/vuetifier.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,400&display=swap&subset=japanese'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: './apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: './favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: './favicon-16x16.png'
      },
      { rel: 'manifest', href: './site.webmanifest' },
      { rel: 'mask-icon', href: './safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  env: {
    vuetifyVersion: process.env.VUETIFY_VERSION || 'unknown'
  },
  loading: { color: '#fff' },
  css: ['~/assets/style/app.styl'],
  plugins: [],
  modules: ['@nuxtjs/pwa'],
  devModules: ['@nuxtjs/vuetify'],
  vuetify: {
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.pink.base,
          secondary: colors.lightGreen.base,
          info: colors.blue.base,
          warning: colors.orange.base,
          error: colors.red.base,
          success: colors.green.base
        },
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
    }
  },
  build: {
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
