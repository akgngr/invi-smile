<i18n>
{
  "tr": {
    "title": "Anasayfa",
    "description": "Smile İzmir Estetik Dental ve Medikal Sanayi ve Ticaret  Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Bayraklı’da hizmet vermeye başlamıştır."
  },
  "en": {
    "title": "Home",
    "description": "Smile İzmir Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti by Prof. Dr. Tancan UYSAL and Asst. Assoc. Dr. Our Oral and Dental Health Polyclinic, which was opened in 2020 with the joint venture of Banu UYSAL, has started to serve in Bayraklı."
  },
  "de": {
    "title": "Home",
    "description": "Smile İzmir Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti von Prof. DR. Tancan UYSAL und Asst. Assoc. DR. Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 mit dem Joint Venture von Banu UYSAL eröffnet wurde, hat ihren Dienst in Bayraklı aufgenommen."
  }
}
</i18n>
<template>
  <div class="layout">
    <SocialHead :title="$t('title')" :description="$t('description')"/>
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
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
