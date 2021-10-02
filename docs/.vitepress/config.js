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
        { text: 'Content', link: '/foo/' },
        { text: 'Payments', link: '/foo/' },
        { text: 'Subscriptions', link: '/foo/' },
      ],
    }, {
      text: 'Creators',
      children: [
        { text: 'Connecting to Stripe', link: '/foo/' },
        { text: 'Payouts', link: '/foo/' },
        { text: 'Taxes', link: '/foo/' },
      ]
    },
  ]
}

function getCzechSidebar() {
  return [
    {
      text: 'Obecné',
      children: [
        { text: 'O platformě', link: '/cs/guide/getting-started' },
        { text: 'Obsah', link: '/cs/foo' },
        { text: 'Platby', link: '/cs/foo' },
        { text: 'Odběry', link: '/cs/foo' },
      ],
    }, {
      text: 'Tvůrci',
      children: [
        { text: 'Připojení Stripe', link: '/cs/foo' },
        { text: 'Výplaty', link: '/cs/foo' },
        { text: 'Daně', link: '/cs/foo' },
      ]
    },
  ]
}
