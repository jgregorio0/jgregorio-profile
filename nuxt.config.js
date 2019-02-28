const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'Jesús Gregorio (  jgregorio)' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
        rel: 'stylesheet',
        type: 'text/css'
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
        rel: 'stylesheet',
        type: 'text/css'
      }
    ],
    script: [
      {
        src: '/plugins/jquery-3.3.1.min.js',
        body: true
      },
      {
        src: '/plugins/popper.min.js',
        body: true
      },
      {
        src: '/plugins/bootstrap/js/bootstrap.min.js',
        body: true
      },
      {
        src: '/plugins/jquery-rss/dist/jquery.rss.min.js',
        body: true
      },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js',
        body: true
      },
      {
        src: '/plugins/theme/main.js',
        body: true
      }
    ]
  },

  /**
   * Body scripts (without jquery)
   * NOT INCLUDED "assets/plugins/jquery-3.3.1.min.js"></script>
   * NOT INCLUDED "assets/plugins/jquery-rss/dist/jquery.rss.min.js"></script>
   */

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // '/plugins/bootstrap/css/bootstrap.min.css',
    // '/plugins/github-calendar/dist/github-calendar.css',
    '~/assets/css/styles.css'
  ],
  /*
    TODO github acitivity css
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">
    <link rel="stylesheet" href="assets/plugins/github-activity/github-activity-0.1.5.min.css"> */

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/i18n.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'nuxt-fontawesome'
  ],

  /*
  ** fontawesome
  */
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faCode',
          'faDatabase',
          'faToolbox',
          'faBrain',
          'faPhone',
          'faEnvelope',
          'faMapMarkerAlt'
        ]
      }
    ]
  },

  /**
   * Router
   */
  router: {
    middleware: 'i18n'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
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

  /**
   * Generate
   */
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  }
}
