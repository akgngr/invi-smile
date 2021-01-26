<i18n>
{
  "tr": {
    "randevu": "Randevu Alın"
  },
  "en": {
    "randevu": "Get Appointment"
  },
  "de": {
    "randevu": "Termin machen"
  }
}
</i18n>

<template>
  <div>
    <div class="widget">
      <ul id="services-list">
        <li>
          <nuxt-link :to="localePath('tancan-uysal')">Prf. Dr. Tancan UYSAL</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('banu-uysal')">Yrd. Doç. Dr. Banu UYSAL</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="widget">
      <div class="download-brochure">
        <h3>
          {{ $t('randevu') }}
        </h3>

        <div class="btn-download onStep" data-animation="fadeInRight" data-time="600">
          <a class="link-class" href="#subwrap">{{ $t('randevu') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doktorrightwidget'
}
</script>

<style scoped>

</style>
