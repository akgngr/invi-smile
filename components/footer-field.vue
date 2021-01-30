<i18n>
{
  "tr": {
    "hakkimizda-bilgi": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret  Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Bayraklı’da hizmet vermeye başlamıştır.",
    "kurumsal": "Kurumsal",
    "hakkimizda": "Hakkımızda",
    "misyonumuz": "Misyonumuz",
    "vizyonumuz": "Vizyonumuz",
    "kalite-politikamiz": "Kalite Politikamız",
    "degerlerimiz": "Değerlerimiz",
    "iletisim-bilgileri": "İletişim Bilgileri",
    "telefon": "TELEFON",
    "mobil": "CEP",
    "bilgiler": "BİLGİLENDİRME",
    "kvkk": "Kişisel Verilerin Korunması",
    "aydinlatma": "Aydınlatma Metni",
    "gizlilik-ve-guvenlik": "Gizlilik ve Güvenlik",
    "iletisim": "İletişim"
  },
  "en": {
    "hakkimizda": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti by Prof. Dr. Tancan UYSAL and Asst. Assoc. Dr. Our Oral and Dental Health Polyclinic, which was opened in 2020 with the joint venture of Banu UYSAL, has started to serve in Bayraklı.",
    "kurumsal": "Business",
    "hakkimizda": "About Us",
    "misyonumuz": "Our Mission",
    "vizyonumuz": "Our vision",
    "kalite-politikamiz": "Our Quality Policy",
    "degerlerimiz": "Our Values",
    "iletisim-bilgileri": "Contact Info",
    "telefon": "PHONE",
    "mobil": "MOBILE",
    "bilgiler": "INFORMATION",
    "kvkk": "Protection of Personal Data",
    "aydinlatma": "Clarification Text",
    "gizlilik-ve-guvenlik": "Privacy and Security",
    "iletisim": "Contact"
  },
  "de": {
    "hakkimizda": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti von Prof. DR. Tancan UYSAL und Asst. Assoc. DR. Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 mit dem Joint Venture von Banu UYSAL eröffnet wurde, hat ihren Dienst in Bayraklı aufgenommen.",
    "kurumsal": "Geschäft",
    "hakkimizda": "Über uns",
    "misyonumuz": "Unsere Mission",
    "vizyonumuz": "Unsere Vision",
    "kalite-politikamiz": "Unsere Qualitätspolitik",
    "degerlerimiz": "Unsere Werte",
    "iletisim-bilgileri": "Kontakt Info",
    "telefon": "TELEFON",
    "mobil": "MOBİLE",
    "bilgiler": "INFORMATIONEN",
    "kvkk": "Schutz personenbezogener Daten",
    "aydinlatma": "Klarstellungstext",
    "gizlilik-ve-guvenlik": "Privatsphäre und Sicherheit",
    "iletisim": "Kontakt"
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
              {{ $t('iletisim-bilgileri') }}
            </h3>
            <address>
              <span>Adalet Mah. Şehit Polis Fethi Sekin Cad. No 4/B Bayraklı/İzmir</span> <span><strong>{{ $t('telefon') }}: </strong> <a href="tel:+902323454141">(+90) 232 345 4141</a> </span> <span><strong>EMAIL:</strong> <a href="mailto:info@invismile.com">info@invismile.com</a></span> <span><strong>{{ $t('mobil') }}:</strong> <a href="tel:+905539355141">+90 553 9355141</a></span>
            </address>
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
            <h3>
              {{ $t('bilgiler') }}
            </h3>
            <ul class="footer-menu">
              <li><nuxt-link :to="localePath('kvkk')">{{ $t('kvkk') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('aydinlatma-metni')">{{ $t('aydinlatma') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('gizlilik-ve-guvenlik')">{{ $t('gizlilik-ve-guvenlik') }}</nuxt-link></li>
              <li><nuxt-link :to="localePath('iletisim')">{{ $t('iletisim') }}</nuxt-link></li>
            </ul>
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
                <a target="_blank" href="https://www.instagram.com/invismileizmir/"><span class="ti-instagram"></span></a>
                <a href="#"><span class="ti-facebook"></span></a>
                <a href="#"><span class="ti-linkedin"></span></a>
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
