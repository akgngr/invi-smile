<template>
  <div>
    <Loader />
    <div class="layout">
      <Subnav />
      <HeaderField />
      <Nuxt />
    </div>
    <SteapWork />
    <Gorusler />
    <Doktorlar />
    <FooterField />
    <Subscribe />
  </div>
</template>

<script>
import HeaderField from '~/components/header-field'
import FooterField from '~/components/footer-field'
import Loader from '~/components/loader'
import Subscribe from '~/components/subscribe'
import Subnav from '~/components/homepage/subnav'
import Doktorlar from '~/components/homepage/doktorlar'
import Gorusler from '~/components/homepage/gorusler'
import SteapWork from '~/components/homepage/steap-work'
// import About from '~/components/homepage/about'

export default {
  components: {
    FooterField,
    HeaderField,
    Loader,
    Subscribe,
    Subnav,
    Doktorlar,
    Gorusler,
    SteapWork
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/themify-icons.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/fullscreen.css',
        media: 'screen'
      },
      {
        rel: 'stylesheet',
        href: 'css/rev-settings.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/animated-on3step.css',
        media: 'screen'
      },
      {
        rel: 'stylesheet',
        href: 'css/owl.carousel.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/owl.theme.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/owl.transitions.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/on3step-style.css'
      },
      {
        rel: 'stylesheet',
        href: 'css/queries-on3step.css'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
      },
      {
        src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
      },
      {
        ssr: false,
        src: 'rs-plugin/js/jquery.themepunch.revolution.min.js'
      },
      {
        ssr: false,
        src: 'js/on3step.js'
      }
    ]
  }
}
</script>
