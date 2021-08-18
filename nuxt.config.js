export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      src: '~/node_modules/highlight.js/styles/vs2015.css',
      lang: 'css',
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/highlightjs'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', 'nuxt-fontawesome'],

  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    base: process.env.BASE,
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faArrowLeft',
          'faArrowRight',
          'faTimes',
          'faCaretUp',
          'faCaretDown',
          'faUser',
          'faCode',
          'faDatabase',
          'faTable',
          'faServer',
          'faTools',
          'faFileExcel',
          'faFileWord',
          'faFilePowerpoint',
          'faMobile',
        ],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faJs',
          'faVuejs',
          'faHtml5',
          'faCss3',
          'faSass',
          'faBootstrap',
          'faPhp',
          'faLaravel',
          'faJava',
          'faJenkins',
          'faAws',
          'faGit',
          'faGithub',
          'faBitbucket',
          'faDocker',
          'faSlack',
          'faJira',
          'faGoogle',
          'faReact',
        ],
      },
    ],
  },
}
