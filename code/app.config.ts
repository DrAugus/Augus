export default defineAppConfig({
  docus: {
    title: 'CODE',
    description: 'Learning code',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io/tree/master/code',
    },
    github: {
      owner: 'DrAugus',
      repo: 'draugus.github.io',
      branch: 'master',
      dir: 'code/content',
      edit: true,
    },
    aside: {
      level: 1,
      collapsed: true,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        },
        {
          href: 'https://augusmeow.github.io/',
          icon: 'material-symbols:home-work'
        },
      ]
    }
  }
})
