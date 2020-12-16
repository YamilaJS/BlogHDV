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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Recursos',
        link: '/recursos/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/recursos/': [
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
          title: 'Librerias',
          collapsable: false,
          children: [
            'librerias-de-componentes',
            'librerias-de-grillas',
            'librerias-de-arquitecturas',
            'librerias-de desarrollo-multiplataforma'          
          ]
        },
        {
          title: 'Recursos444444444444444444',
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
          title: 'Recurso55555555',
          collapsable: false,
          children: [
            '',
            'cursos-de-youtube',
            'cursos-web-plataformas',
            'meetups',
            'migracion-de-vue2-a-vue3'
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
