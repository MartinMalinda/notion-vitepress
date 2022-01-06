module.exports = {
  logo: 'https://herohero.co/icons/safari-pinned-tab.svg',
  title: 'Help & Support',
  description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',
  head: [

    ['link', { rel: 'icon', href: 'https://herohero.co/icons/safari-pinned-tab.svg' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Medium.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: 'https://herohero.co/fonts/Silka-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
  ],

  themeConfig: {
    logo: 'https://herohero.co/icons/safari-pinned-tab.svg',
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
    {
      text: 'Help center', children: [
        { text: 'First time on herohero', link: '/cs/guide/start' },
        { text: 'For creators', link: '/cs/guide/for-creators' },
        { text: 'For fans', link: '/cs/guide/for-fans' },
        { text: 'Functions and settings', link: '/cs/guide/settings' },
      ]
    },
    {
      text: 'Contact ✉️',
      children: [
        { text: 'info@herohero.co' }
      ]
    }
  ];
}

function getCzechSidebar() {
  return [
    {
      text: 'Podpora',
      children: [
        { text: 'Poprvé na herohero', link: '/cs/guide/start' },
        { text: 'Pro tvůrce', link: '/cs/guide/for-creators' },
        { text: 'Pro fanoušky', link: '/cs/guide/for-fans' },
        { text: 'Funkce a nastavení', link: '/cs/guide/settings' },
      ]
    },
    {
      text: 'Kontakt ✉️',
      children: [
        { text: 'info@herohero.co' }
      ]
    }

  ];
}
