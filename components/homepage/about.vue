<i18n>
{
  "tr": {
    "hakkimizda": "Hakkımızda",
    "baslik": "Randevu almak için Bizimle İletişime Geçin.",
    "iletisim": "İletişim"
  },
  "en": {
    "hakkimizda": "About Us",
    "baslik": "Contact us to make an appointment.",
    "iletisim": "Contact"
  },
  "de": {
    "hakkimizda": "Über uns",
    "baslik": "Kontaktieren Sie uns, um einen Termin zu vereinbaren.",
    "iletisim": "Kontaktieren"
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
              <span><strong>Invismile' Estetik Ağız ve Diş Sağlığı Polikliniği</strong></span>
              <span class="devider-cont"></span>
              <p>Pros’ Estetik Dental ve Medikal Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Alsancak’ta hizmet vermeye başlamıştır.</p>
              <p> Tüm diş hekimliği uzmanlık branşlarından oluşan akademisyen kadrosuyla, tam kapsamlı 6 diş ünitesi ile 500 metrekare modern çalışma alanıyla ulusal ve uluslararası alanda hizmet vermektedir.</p>
              <nuxt-link class="link-class" :to="localePath('hakkimizda')">
                {{ $t('devami') }}
                <span class="devider"></span>
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-6">
            <img src="/image/about.png" class="img-responsive" alt="About Invismile">
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
                <a class="link-class " href="#">{{ $t('iletisim') }}</a>
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
