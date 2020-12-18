const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Hablemos de Vue.js',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel:'apple-touch-icon', sizes:'57x57', href:'icons/apple-icon-57x57.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'60x60', href:'icons/apple-icon-60x60.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'60x60', href:'icons/apple-icon-60x60.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'60x60', href:'icons/apple-icon-60x60.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'72x72', href:'icons/apple-icon-72x72.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'76x76', href:'icons/apple-icon-76x76.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'114x114', href:'icons/apple-icon-114x114.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'120x120', href:'icons/apple-icon-120x120.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'144x144', href:'icons/apple-icon-144x144.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'152x152', href:'icons/apple-icon-152x152.png'}],
    ['link', { rel:'apple-touch-icon', sizes:'180x180', href:'icons/apple-icon-180x180.png'}],
    ['link', { rel:'icon', type:'image/png', sizes:'192x192',  href:'icons/android-icon-192x192.png'}],
    ['link', { rel:'icon', type:'image/png', sizes:'32x32', href:'icons/favicon-32x32.png'}],
    ['link', { rel:'icon', type:'image/png', sizes:'96x96', href:'icons/favicon-96x96.png'}],
    ['link', { rel:'icon', type:'image/png', sizes:'16x16', href:'icons/favicon-16x16.png'}],
    ['link', { rel:'manifest', href:'icons/manifest.json'}],
    ['meta', { name:'msapplication-TileColor', content:'#ffffff'}],
    ['meta', { name:'msapplication-TileImage', content:'/ms-icon-144x144.png'}],
    ['meta', { name:'theme-color', content:'#ffffff'}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo-grupo-vue.png',
    repo: '',
    lastUpdated: 'Last Updated',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/guia/',
      },
      {
        text: 'Grupo',
        link: 'https://t.me/vuejsEs/'
      },
      {
        text: 'Canal',
        link: 'https://t.me/VuejsEspCanal.vuejs.org'
      }
    ],
    sidebar: {
      '/guia/': [
        {
          title: 'Recursos',
          collapsable: false,
          children: [
            '',
            'cursos-de-youtube',
            'cursos-web-plataformas',
            'meetups',
            'migracion-de-vue2-a-vue3'
          ]
        },
        {
          title: 'Librerías',
          collapsable: false,
          children: [
            'librerias-de-componentes',
            'librerias-de-grillas',
            'librerias-de-arquitecturas',
            'librerias-de-desarrollo-multiplataforma',
            'librerias-especiales'
          ]
        },
        {
          title: 'SPA/SSR',
          collapsable: false,
          children: [
           'spa-ssr'
          ]
        },
        {
          title: 'Plataformas mobiles',
          collapsable: false,
          children: [
           'plataformas-mobiles'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
