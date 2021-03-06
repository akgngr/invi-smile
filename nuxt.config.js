import webpack from 'webpack'

export default {
  loading: '~/components/loader.vue',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Smile İzmir",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "alternate", hreflang: "tr-en", href: "https://smileizmir.com/en" },
      { rel: "alternate", hreflang: "tr-TR", href: "https://smileizmir.com" },
      { rel: "alternate", hreflang: "en-GB", href: "https://smileizmir.com/en" },
      { rel: "alternate", hreflang: "tr-en", href: "https://smileizmir.com/en" },
      { rel: "alternate", hreflang: "tr-US", href: "https://smileizmir.com" },
      { rel: "alternate", hreflang: "en-US", href: "https://smileizmir.com/en" },
      { rel: "alternate", hreflang: "de-DE", href: "https://smileizmir.com/de" },
      { rel: "alternate", hreflang: "tr-de", href: "https://smileizmir.com/de" },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: process.env.HOST || '/css/on3step-style.css' },
      { rel: 'stylesheet', href: process.env.HOST || '/css/queries-on3step.css' },
      { rel: 'stylesheet', href: process.env.HOST || '/css/themify-icons.css', async:true },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", type: "image/x-icon", href: "/apple-touch-icon.png" },
      { rel: "apple-touch-icon", sizes: "72x72", type: "image/x-icon", href: "/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "114x114", type: "image/x-icon", href: "/apple-touch-icon-114x114.png" }
    ],
    script: [
      { ssr: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
      { ssr: true, src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' }
    ]
  },
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,500']
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    ['nuxt-lazysizes']
  ],

  lazySizes: {
    plugins: {
      blurUp: true,
      nativeLoading: true,
      unveilhooks: true,
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-webfontloader',
    ['@nuxtjs/axios'],
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        locales: [
          {
            code: 'tr',
            file: 'tr.js',
            name: 'tr'
          },
          {
            code: 'en',
            file: 'en.js',
            name: 'en'
          },
          {
            code: 'de',
            file: 'de.js',
            name: 'de'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true
        }
      }
    ],
    ['@nuxtjs/sitemap']
  ],
  i18n: {
    defaultLocale: "tr",
    vueI18n: {
      fallbackLocale: "tr",
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    plugins: [],
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  },
  dependencies: {
    // Replace <jquery.version> with the jquery version you want.
    "jquery": "<jquery.version>"
  },
  router: {
    base: '/',
    linkActiveClass: 'active-link'
  },
  sitemap: {
    hostname: 'https://smileizmir.com',
    i18n: true
  }
};
