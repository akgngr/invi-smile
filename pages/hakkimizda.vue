<template>
  <div>
    <SocialHead :title="$t('about')" :description="$t('description')" />
    <div class="container">
      <h1>Burası Hakkımızda Sayfası</h1>
    </div>
  </div>
</template>

<script>
import SocialHead from '~/components/SocialHead'
export default {
  components: { SocialHead },
  nuxtI18n: {
    seo: true,
    paths: {
      en: '/about-us',
      tr: '/hakkimizda',
      de: '/uber-uns'
    }
  }
}
</script>
