<i18n>
{
  "tr": {
    "randevu": "Randevu Alın",
    "bahar-sayin": "Dr. Dt. Bahar SAYIN",
    "seyfi-kelebek": "Dr. Dt. Seyfi KELEBEK"
  },
  "en": {
    "randevu": "Get Appointment",
    "bahar-sayin": "Assist. Prf. Dr. Bahar SAYIN",
    "seyfi-kelebek": "Dr. Dt. Seyfi KELEBEK"
  },
  "de": {
    "randevu": "Termin machen",
    "bahar-sayin": "Helfen Prf Dr Bahar SAYIN",
    "seyfi-kelebek": "Dr. Dt. Seyfi KELEBEK"
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
        <li>
          <nuxt-link :to="localePath('bahar_sayin')">{{ $t('bahar-sayin') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('seyfi_kelebek')">{{ $t('seyfi-kelebek') }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="widget">
      <div class="download-brochure">
        <h3>
          {{ $t('randevu') }}
        </h3>

        <div class="btn-download onStep" data-animation="fadeInRight" data-time="600">
          <a data-toggle="modal" class="popup-form" data-target="#subwrap">{{ $t('randevu') }}</a>
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
