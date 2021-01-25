<i18n>
{
  "tr": {
    "bulunamadi": "Sayfa Bulunamadı!",
    "anasayfa": "Lütfen Anasayfaya Geri Dönün",
    "ana": "Anasayfa"
  },
  "en": {
    "bulunamadi": "Page Not Found!",
    "anasayfa": "Please, Return Home Page",
    "ana": "Home Page"
  },
  "de": {
    "bulunamadi": "Page Not Found!",
    "anasayfa": "Please, Return Home Page",
    "ana": "Home Page"
  }
}
</i18n>
<template>
  <div>
    <div v-if="error.statusCode === 404">
      <Subheader :baslik="$t('bulunamadi')" />
      <transition name="home" mode="out-in">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="content-wrapper">
                  <h1>404! {{ $t('bulunamadi') }}</h1>
                  <p>{{ $t('anasayfa') }}</p>
                  <nuxt-link :to="localeRoute('index')" class="btn btn-default">{{ $t('ana') }}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </transition>
    </div>
    <h1 v-else>Sayfa</h1>
  </div>
</template>

<script>
import Subheader from '~/components/subheader'

export default {
  props: ['error'],
  layout: 'error',
  components: { Subheader }
}
</script>
