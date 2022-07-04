const { default: pages } = require("../../scripts/pages.mjs");

module.exports = {
  logo: 'https://herohero.co/public/icons/safari-pinned-tab.svg',
  title: 'Help & Support',
  description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
  head: [

    ['link', { rel: 'icon', href: 'https://herohero.co/public/icons/safari-pinned-tab.svg' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/public/fonts/Silka-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/public/fonts/Silka-Medium.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/public/fonts/Silka-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/public/fonts/Silka-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
  ],

  themeConfig: {
    logo: 'https://herohero.co/public/icons/safari-pinned-tab.svg',
    nav: [
      { text: 'Back to Herohero', link: 'https://herohero.co' }
    ],

    sidebar: {
      '/automaton/': pages.map(page => {
        return page;
      }),
    },

    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
      },
      '/cs/': {
        label: 'Česky',
        selectText: 'Jazyk',
        nav: [
          { text: 'Zpět na Herohero', link: 'https://herohero.co' }
        ],
      },
    },
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Help & Support',
      description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
      selectText: 'English',
    },
    '/cs/': {
      lang: 'cs-CZ',
      title: 'Podpora',
      description: 'Časté otázky o platformě Herohero. Obsah, Platby, Odběry a jiné.',
      selectText: 'Česky',
    }
  }
}
