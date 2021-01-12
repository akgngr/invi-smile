<template>
  <div class="layout">
    <Subnav />
    <HeaderField />
    <Slideshow />
    <About />
    <Doktorlar />
    <Tedaviler />
    <Gorusler />
    <FooterField />
    <Subscribe />
  </div>
</template>

<script>
import HeaderField from '~/components/header-field'
import FooterField from '~/components/footer-field'
import Subscribe from '~/components/subscribe'
import Subnav from '~/components/homepage/subnav'
import Doktorlar from '~/components/homepage/doktorlar'
import Gorusler from '~/components/homepage/gorusler'
import About from '~/components/homepage/about'
import Tedaviler from '~/components/homepage/tedaviler'

export default {
  name: 'homepage',
  layout: 'default',
  components: {
    FooterField,
    HeaderField,
    Subscribe,
    Subnav,
    Doktorlar,
    Gorusler,
    About,
    Tedaviler
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/rev-settings.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/owl.carousel.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/owl.theme.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/owl.transitions.css'
      }
    ]
  }
}
</script>

<style scoped>
.tns-item {
  font-size: 3rem;
  font-family: Arial;
  text-align: center;
  padding: 2em;
  background: #fafafb;
}
.tns-item:nth-child(odd) {
  background: #c8e1ff;
}
</style>
