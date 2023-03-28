import { defineConfig } from 'vitepress'
import { navbar_zh } from './navbar'
import { sidebar_zh } from './sidebar'

export default defineConfig({
  // These are app level configs.
  title: 'Augus Game',
  description: 'Game',
  base: "/",
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['meta', { name: 'theme-color', content: '#ff64b9' }],
  ],
  themeConfig: {
    logo: '/logo/logo.jpg',
    nav: navbar_zh,
    sidebar: sidebar_zh,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DrAugus/draugus.github.io/tree/master/game' },
    ],
    editLink: {
      pattern: 'https://github.com/DrAugus/draugus.github.io/tree/master/game/:path',
      text: 'Suggest changes to this page',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Augus'
    },

  }
})