<i18n>
{
  "tr": {
    "hakkimizda-bilgi": "Invi Smile' Estetik Dental ve Medikal Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Alsancak'ta hizmet vermeye başlamıştır.",
    "kurumsal": "Kurumsal",
    "hakkimizda": "Hakkımızda",
    "misyonumuz": "Misyonumuz",
    "vizyonumuz": "Vizyonumuz",
    "kalite-politikamiz": "Kalite Politikamız",
    "degerlerimiz": "Değerlerimiz",
    "iletisim-bilgileri": "İletişim Bilgileri"
  },
  "en": {
    "hakkimizda": "Estetik Dental ve Medikal Ltd. Şti by Prof. Dr. Tancan UYSAL and Asst. Assoc. Dr. Our Oral and Dental Health Polyclinic, which was opened in 2020 with the joint venture of Banu UYSAL, started to serve in Alsancak.",
    "kurumsal": "Business",
    "hakkimizda": "About Us",
    "misyonumuz": "Our Mission",
    "vizyonumuz": "Our vision",
    "kalite-politikamiz": "Our Quality Policy",
    "degerlerimiz": "Our Values",
    "iletisim-bilgileri": "Contact Info"
  },
  "de": {
    "hakkimizda": "Estetik Dental ve Medikal Ltd. Şti von Prof. DR. Tancan UYSAL und Asst. Assoc. DR. Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 mit dem Joint Venture von Banu UYSAL eröffnet wurde, wurde in Alsancak in Betrieb genommen.",
    "kurumsal": "Geschäft",
    "hakkimizda": "Über uns",
    "misyonumuz": "Unsere Mission",
    "vizyonumuz": "Unsere Vision",
    "kalite-politikamiz": "Unsere Qualitätspolitik",
    "degerlerimiz": "Unsere Werte",
    "iletisim-bilgileri": "Kontakt Info"
  }
}
</i18n>
<template>
  <div>
    <!-- subfooter -->
    <section aria-label="footer" class="subfooter">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="logo">
              <img alt="logo" src="image/logo.png">
            </div>
            <p>{{ $t('hakkimizda-bilgi') }}</p>
          </div>
          <div class="col-md-3 col-xs-12">
            <h3 class="text-uppercase">
              {{ $t('kurumsal') }}
            </h3>
            <ul class="footer-menu">
              <li><nuxt-link :to="localePath('hakkimizda')">{{ $t('hakkimizda') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('misyonumuz')">{{ $t('misyonumuz') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('vizyonumuz')">{{ $t('vizyonumuz') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('kalite-politikamiz')">{{ $t('kalite-politikamiz') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('degerlerimiz')">{{ $t('degerlerimiz') }}</nuxt-link></li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-12">
            <h3 class="text-uppercase">
              {{ $t('iletisim-bilgileri') }}
            </h3>
            <address>
              <span>129 Park street, New York City, NY 10903</span> <span><strong>PHONE:</strong> (+6221) 000 888 999</span> <span><strong>EMAIL:</strong> <a href="mailto:companyname@gmail.com">companyname@gmail.com</a></span> <span><strong>SITE:</strong> <a href="#">www.companyname.com</a></span>
            </address>
          </div>
          <div class="col-md-3 col-xs-12">
            <h3>
              PHOTO STREAM
            </h3>
            <!--
            <div id="flickr-photo-stream">
              <script src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=52617155@N08" type="text/javascript">
              </script>
              <div class="clearfix">
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
    </section>
    <!-- subfooter end -->
    <!-- footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            Invismile &copy; Copyright 2021 by <a target="_blank" href="https://akgngr.github.com/">akgngr</a>
          </div>
          <div class="col-md-6">
            <div class="right">
              <div class="social-icons">
                <a href="#"><span class="ti-facebook"></span></a> <a href="#"><span class="ti-dribbble"></span></a> <a href="#"><span class="ti-twitter"></span></a> <a href="#"><span class="ti-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer end -->
  </div>
</template>

<script>
export default {
  name: 'footer-field'
}
</script>

<style>
.footer-menu{
  padding-left: 0;
}
.footer-menu li{
  list-style: none;
}
</style>
