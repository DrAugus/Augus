export default defineAppConfig({
  docus: {
    title: 'LIFE',
    description: 'Slice of Life.',
    // image: "/4x4.png",
    socials: {
      github: 'DrAugus/draugus.github.io/tree/master/notes',
    },
    github: {
      owner: 'DrAugus',
      repo: 'draugus.github.io',
      branch: 'master',
      dir: '/notes/',
      edit: true,
      releases: false
    },
    aside: {
      level: 1,
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
