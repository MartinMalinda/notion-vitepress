module.exports = {
  logo: 'https://herohero.co/icons/safari-pinned-tab.svg',
  title: 'Help & Support',
  description: 'Frequently asked questions about the Herohero platform - Content, Payments, Subscriptions and so on.',

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
      text: 'General',
      children: [
        { text: 'About', link: '/guide/getting-started' },
        { text: 'Content', link: '/guide/getting-started' },
        { text: 'Payments', link: '/guide/getting-started' },
        { text: 'Subscriptions', link: '/guide/getting-started' },
      ],
    }, {
      text: 'Creators',
      children: [
        { text: 'Connecting to Stripe', link: '/guide/getting-started' },
        { text: 'Payouts', link: '/guide/getting-started' },
        { text: 'Taxes', link: '/guide/getting-started' },
      ]
    },
  ]
}

function getCzechSidebar() {
  return [
    {
      text: 'Obecné',
      children: [
        { text: 'O platformě', link: '/guide/getting-started' },
        { text: 'Obsah', link: '/guide/getting-started' },
        { text: 'Platby', link: '/guide/getting-started' },
        { text: 'Odběry', link: '/guide/getting-started' },
      ],
    }, {
      text: 'Tvůrci',
      children: [
        { text: 'Připojení Stripe', link: '/guide/getting-started' },
        { text: 'Výplaty', link: '/guide/getting-started' },
        { text: 'Daně', link: '/guide/getting-started' },
      ]
    },
  ]
}
