<template>
  <div>
    <SocialHead :title="$t('about')" :description="$t('description')" />
    <Subheader :baslik="$t('about')" />
    <div class="container">
      <h1>Burası Hakkımızda Sayfası</h1>
    </div>
  </div>
</template>

<script>
import SocialHead from '~/components/SocialHead'
import Subheader from '~/components/subheader'

export default {
  layout: "page",
  components: { SocialHead, Subheader },
  nuxtI18n: {
    seo: true,
    paths: {
      en: '/about-us',
      tr: '/hakkimizda',
      de: '/uber-uns'
    }
  },
  data() {
    return {
      baslik: "Hakkımızda"
    }
  }
}
</script>
