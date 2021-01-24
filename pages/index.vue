<i18n>
{
  "tr": {
    "description": "Ağız ve diş sorunlarınıza yenilikçi çözüm yollarıyla tedavi ediyoruz."
  },
  "en": {
    "description": "We treat your oral and dental problems with innovative solutions."
  },
  "de": {
    "description": "Wir behandeln Ihre Mund- und Zahnprobleme mit innovativen Lösungen."
  }
}
</i18n>
<template>
  <div class="layout">
    <SocialHead title="Invi Smile" :description="$t('description')"/>
    <Slideshow />
    <About />
    <Doktorlar />
    <Tedaviler />
    <Gorusler />
  </div>
</template>

<script>
import Doktorlar from '~/components/homepage/doktorlar'
import Gorusler from '~/components/homepage/gorusler'
import About from '~/components/homepage/about'
import Tedaviler from '~/components/homepage/tedaviler'
import SocialHead from '~/components/SocialHead'

export default {
  layout: 'default',
  components: {
    Doktorlar,
    Gorusler,
    About,
    Tedaviler,
    SocialHead
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
