export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title:
      process.env.NODE_ENV === 'production'
        ? '🏅 Basile V.'
        : '[DEV] 🏅 Basile V.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'noindex' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portrait.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap',
      },
    ],
    bodyAttrs: {
      'vs-theme': 'dark',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuesax/dist/vuesax.css', 'boxicons/css/boxicons.min.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vuesax'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-compress',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-compress',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },
}
