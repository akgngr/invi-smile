<i18n>
{
  "tr": {
    "hakkimizda": "Hakkımızda",
    "baslik": "Invismile Estetik Ağız ve Diş Sağlığı Polikliniği",
    "icerik1": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret  Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Bayraklı’da hizmet vermeye başlamıştır.",
    "iletisim": "İletişim"
  },
  "en": {
    "hakkimizda": "About Us",
    "baslik": "Invismile Aesthetic Oral and Dental Health Polyclinic",
    "iletisim": "Contact",
    "icerik1": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti by Prof. Dr. Tancan UYSAL and Asst. Assoc. Dr. Our Oral and Dental Health Polyclinic, which was opened in 2020 with the joint venture of Banu UYSAL, has started to serve in Bayraklı."
  },
  "de": {
    "hakkimizda": "Über uns",
    "baslik": "Invismile ästhetische Mund- und Zahngesundheitspoliklinik",
    "iletisim": "Kontaktieren",
    "icerik1": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti von Prof. DR. Tancan UYSAL und Asst. Assoc. DR. Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 mit dem Joint Venture von Banu UYSAL eröffnet wurde, hat ihren Dienst in Bayraklı aufgenommen."
  }
}
</i18n>

<template>
  <div>
    <!-- section about -->
    <section class="whitepage" id="about">
      <!-- space home -->
      <div id="spacer">
        <div class="space-single"></div>
      </div>
      <!-- space home end -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="wrap-news onStep">
              <h2>{{ $t('hakkimizda') }}</h2>
              <span><strong>{{ $t('baslik') }}</strong></span>
              <span class="devider-cont"></span>
              <p>{{ $t('icerik1') }}</p>
              <nuxt-link class="link-class" :to="localePath('hakkimizda')">
                {{ $t('devami') }}
                <span class="devider"></span>
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-6">
            <img data-src="/image/digital-dentistry.webp" class="img-responsive lazyload" alt="About Invismile">
          </div>
        </div>
      </div>
    </section>
    <!-- section about end -->
    <section class="yellowpage">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h2>{{ $t('baslik') }}</h2>
          </div>
          <div class="col-md-5">
            <div class="right">
              <div class="btn-content" >
                <nuxt-link class="link-class " :to="localeRoute('iletisim')">{{ $t('iletisim') }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>

</style>
