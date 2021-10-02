import DefaultTheme from 'vitepress/theme';
import HeroLayout from './HeroLayout.vue';

import './style/var.css'
import './style/main.css'

export default {
  ...DefaultTheme,
  logo: 'https://herohero.co/icons/safari-pinned-tab.svg',
  Layout: HeroLayout,
}
