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
      '/guide/': getGuideSidebar(),
      '/cs/guide/': getCzechSidebar(),
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

function getGuideSidebar() {
  return [
    { text: 'First time on herohero', link: '/guide/start', collapsable: false, children: [] },
    {
      text: 'Creators', link: '/guide/for-creators', collapsable: false, children: [
        { text: 'Starting out', link: '/guide/for-creators' },
        { text: 'Getting subscribers', link: '/guide/get-subscribers' },
      ]
    },
    { text: 'Fans', link: '/guide/for-fans', collapsable: false, children: [] },
    { text: 'Features', link: '/guide/settings', children: [] },
    {
      text: 'Kontakt ✉️',
      children: [
        { text: 'info@herohero.co' }
      ]
    }
  ];
}

function getCzechSidebar() {
  return [
    { text: 'Poprvé na herohero', link: '/cs/guide/start', collapsable: false, children: [] },
    {
      text: 'Tvůrci', link: '/cs/guide/for-creators', collapsable: false, children: [
        { text: 'Jak začít', link: '/cs/guide/for-creators' },
        { text: 'Jak získat odběratele', link: '/cs/guide/get-subscribers' },
      ]
    },
    { text: 'Fanoušci', link: '/cs/guide/for-fans', collapsable: false, children: [] },
    { text: 'Funkce a nastavení', link: '/cs/guide/settings', children: [] },
    {
      text: 'Kontakt ✉️',
      children: [
        { text: 'info@herohero.co' }
      ]
    }
  ];
}
