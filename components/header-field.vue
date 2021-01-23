<i18n>
{
  "en": {
    "anasayfa": "Home",
    "kurumsal": "Business",
    "hakkimizda": "About Us",
    "misyonumuz": "Our Mission",
    "vizyonumuz": "Our vision",
    "kalite-politikamiz": "Our Quality Policy",
    "degerlerimiz": "Our Values",
    "doktorlar": "Doctors",
    "banu-uysal": "Assist Prf Dr Banu UYSAL",
    "tedaviler": "Treatments",
    "dental-implant": "Dental Implant",
    "check-up": "Check-Up",
    "kanal-tedavisi": "Root Canal Treatment (Endodontics)",
    "lazer-estetik": "Laser Aesthetic Filling",
    "gulus-tasarimi": "Digital Smile Design",
    "seffaf-plak": "Orth. with Trans. Plaques",
    "estetik-lamina": "Aesthetic Lamina Veneers",
    "zikronyum": "Zirconium Porcelain Coating",
    "dis-sikma": "Tooth Tightening Treatment",
    "cocuk-dis": "Children's Dentistry",
    "radyoloji": "Radiology",
    "cene-eklemi":  "Jaw Joint (TMJ) Treatment",
    "dis-beyazlatma": "Teeth whitening",
    "diseti":  "Gum Treatments",
    "gorunmez-teller": "Orth. with Invisible Wires",
    "anlasmali": "Contracted Institutions",
    "iletisim": "Contact",
    "randevu": "Get Appointment"
  },
  "tr": {
    "anasayfa": "Anasayfa",
    "kurumsal": "Kurumsal",
    "hakkimizda": "Hakkımızda",
    "misyonumuz": "Misyonumuz",
    "vizyonumuz": "Vizyonumuz",
    "kalite-politikamiz": "Kalite Politikamız",
    "degerlerimiz": "Değerlerimiz",
    "doktorlar": "Doktorlar",
    "banu-uysal": "Prf. Dr. Banu UYSAL",
    "tedaviler": "Tedaviler",
    "dental-implant": "Dental İmplant",
    "check-up": "Check-Up",
    "kanal-tedavisi": "Kanal Tedavisi (Endodonti)",
    "lazer-estetik": "Lazerle Estetik Dolgu",
    "gulus-tasarimi": "Dijital Gülüş Tasarımı",
    "seffaf-plak": "Şeffaf Plaklarla Ortodonti",
    "estetik-lamina": "Estetik Lamina Veneerler",
    "zikronyum": "Zirkonyum Porselen Kaplama",
    "dis-sikma": "Diş Sıkma Tedavisi",
    "cocuk-dis": "Çocuk Diş Hekimliği",
    "radyoloji": "Radyoloji",
    "cene-eklemi":  "Çene Eklemi (TME) Tedavisi",
    "dis-beyazlatma": "Diş Beyazlatma",
    "diseti":  "Dişeti Tedavileri",
    "gorunmez-teller": "Görünmez Tellerle Ortodonti",
    "anlasmali": "Anlaşmalı Kurumlar",
    "iletisim": "İletişim",
    "randevu": "Randevu AL"
  },
  "de": {
    "anasayfa": "Home",
    "kurumsal": "Geschäft",
    "hakkimizda": "Über uns",
    "misyonumuz": "Unsere Mission",
    "vizyonumuz": "Unsere Vision",
    "kalite-politikamiz": "Unsere Qualitätspolitik",
    "degerlerimiz": "Unsere Werte",
    "doktorlar": "Ärzte",
    "banu-uysal": "Helfen Prf Dr Banu UYSAL",
    "tedaviler": "Behandlungen",
    "dental-implant": "Zahnimplantat",
    "check-up": "Check-Up",
    "kanal-tedavisi": "Wurzelkanalbehandlung (Endodontie)",
    "lazer-estetik": "Laserästhetische Füllung",
    "gulus-tasarimi": "Digital Smile Design",
    "seffaf-plak": "KFO mit Transparent-Plaketten",
    "estetik-lamina": "Ästhetische Lamina-Furniere",
    "zikronyum": "Zirkonium-Porzellanbeschichtung",
    "dis-sikma": "Zahnstraffungsbehandlung",
    "cocuk-dis": "Kinderzahnheilkunde",
    "radyoloji": "Radiologie",
    "cene-eklemi":  "Kiefergelenkbehandlung",
    "dis-beyazlatma": "Zahnaufhellung",
    "diseti":  "Zahnfleischbehandlungen",
    "gorunmez-teller": "Kiefer. mit unsich. Drähten",
    "anlasmali": "Vertragsinstitutionen",
    "iletisim": "Kontakt",
    "randevu": "Termin machen"
  }
}
</i18n>

<template>
  <div>
    <!-- nav -->
    <div id="nav" :class="{ sticky:active }">
      <div class="navbar navbar-default navbar-fixed-top" :class="[toggleNavClass(), fullHeightClass()]">
        <div class="container">
            <div class="row">
              <!-- menu mobile display -->
              <button class="navbar-toggle" v-on:click="[menuShow = !menuShow, fullHeight = !fullHeight]">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
              </button>

              <!-- logo -->
              <nuxt-link :to="localePath('/')" class="navbar-brand"><img alt="logo" src="image/logo.png"></nuxt-link>

              <!-- mainmenu start -->
              <div class="menu-init" id="main-menu" :class="mobilMenuClasses()">
                <nav id="menu-center">
                  <ul>
                    <li>
                      <nuxt-link :to="localePath('/')">{{ $t('anasayfa') }}</nuxt-link>
                    </li>
                    <li><a class="disabled" href="#">{{ $t('kurumsal') }}</a>
                      <ul>
                        <li><nuxt-link :to="localePath('hakkimizda')">{{ $t('hakkimizda') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('misyonumuz')">{{ $t('misyonumuz') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('vizyonumuz')">{{ $t('vizyonumuz') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('kalite-politikamiz')">{{ $t('kalite-politikamiz') }}</nuxt-link></li>
                        <li><nuxt-link :to="localePath('degerlerimiz')">{{ $t('degerlerimiz') }}</nuxt-link></li>
                      </ul>
                    </li>
                    <li><a href="#">{{ $t('doktorlar') }}</a>
                      <ul>
                        <li>
                          <nuxt-link :to="localePath('tancan-uysal')">Prf. Dr. Tancan UYSAL</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('banu-uysal')">{{ $t('banu-uysal') }}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a  href="#">{{ $t('tedaviler')}}</a>
                      <ul style="z-index: 1000">
                        <li>
                          <nuxt-link :to="localePath('dental-implant' )">{{ $t('dental-implant')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath( '/tedaviler/check-up' )">{{ $t('check-up')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('kanal-tedavisi-endodonti')">{{ $t('kanal-tedavisi')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('lazerle-estetik-dolgu')">{{ $t('lazer-estetik')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('dijital-gulus-tasarimi')">{{ $t('gulus-tasarimi')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('seffaf-plaklarla-ortodonti')">{{ $t('seffaf-plak')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('estetik-lamina-veneerler')">{{ $t('estetik-lamina')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('zirkonyum-porselen-kaplama')">{{ $t('zikronyum')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('dis-sikma-tedavisi')">{{ $t('dis-sikma')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('cocuk-dis-hekimligi')">{{ $t('cocuk-dis')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('radyoloji')">{{ $t('radyoloji')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('cene-eklemi-tme-tedavisi')">{{ $t('cene-eklemi')}}i</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('dis-beyazlatma')">{{ $t('dis-beyazlatma')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('diseti-tedavileri')">{{ $t('diseti')}}</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link :to="localePath('gorunmez-tellerle-ortodonti')">{{ $t('gorunmez-teller')}}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <!--
                    <li>
                      <a href="#">{{ $t('anlasmali')}}</a>
                      <ul>
                        <li><a href="project-detail.html">PROJECT DETAILS 1</a></li>
                        <li><a href="project-detail-2.html">PROJECT DETAILS 2</a></li>
                      </ul>
                    </li>
                    <li><a  href="#">Blog</a>
                      <ul>
                        <li><a href="blog.html">Blog Single</a></li>
                        <li><a href="blog-post.html">Blog Post</a></li>
                      </ul>
                    </li>
                    -->
                    <li>
                      <nuxt-link :to="localePath('iletisim')">{{ $t('iletisim')}}</nuxt-link>
                    </li>
                    <li class="btn"><a class="popup-form" href="#subwrap">{{ $t('randevu') }}</a></li>
                  </ul>
                </nav>
              </div>
              <!-- mainmenu end -->
            </div>
        </div>
      </div>
    </div>
    <!-- nav end -->
  </div>
</template>

<script>

export default {
  name: 'header-field',
  data() {
    return {
      active: false,
      menuShow: false,
      fullHeight: false
    }
  },
  methods: {
    toggleNavClass() {
      if (this.active === false) {
        return 'nav'
      } else {
        return 'sticky-nav'
      }
    },
    mobilMenuClasses() {
      if (this.menuShow === false) {
        return ''
      } else {
        return 'menu-show'
      }
    },
    fullHeightClass() {
      if (this.fullHeight === false) {
        return ''
      } else {
        return 'fullHeight'
      }
    }
  },
  mounted() {
    window.document.onscroll = () => {
      const navBar = document.getElementById('nav');
      if (window.scrollY > navBar.offsetTop) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
}
</script>
