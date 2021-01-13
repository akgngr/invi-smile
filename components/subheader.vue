<i18n>
{
  "tr": {
    "anasayfa": "Anasayfa"
  },
  "en": {
    "anasayfa": "Home"
  },
  "de": {
    "anasayfa": "Home"
  }
}
</i18n>
<template>
  <section id="subheader">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>
            {{ baslik }}
          </h1>
        </div>
        <!-- devider -->
        <div class="col-md-12">
          <div class="devider-page">
            <div class="devider-img-right">
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <ul class="subdetail">
            <li>
              <nuxt-link :to="localeRoute('/')">{{ $t('anasayfa') }}</nuxt-link>
            </li>
            <li class="sep">/</li>
            <li>{{ baslik }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['baslik']
}
</script>

<style scoped>

</style>
