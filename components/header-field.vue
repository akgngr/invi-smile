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
    "check-up": "Invismile Check-up",
    "kanal": "Root Canal Treatment (Endodontics)",
    "lazer": "Laser Aesthetic Filling",
    "gulus": "Digital Smile Design",
    "seffaf-plak": "Orth. with Trans. Plaques",
    "estetik-lamina": "Aesthetic Lamina Veneers",
    "zikronyum": "Zirconium Porcelain Coating",
    "dis-sikma": "Tooth Tightening Treatment",
    "cocuk": "Children's Dentistry",
    "radyoloji": "Radiology",
    "cene-eklemi": "Jaw Joint (TMJ) Treatment",
    "dis-beyazlatma": "Teeth whitening",
    "diseti": "Gum Treatments",
    "gorunmez-teller": "Orthodontics with Invisible Wires",
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
    "check-up": "Invismile Check-up",
    "kanal": "Kanal Tedavisi (Endodonti)",
    "lazer": "Lazerle Estetik Dolgu",
    "gulus": "Dijital Gülüş Tasarımı ",
    "seffaf-plak": "Şeffaf Plaklarla Ortodonti",
    "estetik-lamina": "Estetik Lamina Veneerler",
    "zikronyum": "Zirkonyum Porselen Kaplama",
    "dis-sikma": "Diş Sıkma Tedavisi",
    "cocuk": "Çocuk Diş Hekimliği",
    "radyoloji": "Radyoloji",
    "cene-eklemi": "Çene Eklemi (TME) Tedavisi",
    "dis-beyazlatma": "Diş Beyazlatma",
    "diseti": "Dişeti Tedavileri",
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
    "check-up": "Invismile Check-up",
    "kanal": "Wurzelkanalbehandlung (Endodontie)",
    "lazer": "Ästhetische Füllung mit Laser",
    "gulus": "Digital Smile Design",
    "seffaf-plak": "Kieferortho. mit trans. Plaques",
    "estetik-lamina": "Ästhetische Lamina-Furniere",
    "zikronyum": "Zirkonium-Porzellanbeschichtung",
    "dis-sikma": "Zahnstraffungsbehandlung",
    "cocuk": "Kinderzahnheilkunde",
    "radyoloji": "Radiologie",
    "cene-eklemi": "Kiefergelenkbehandlung",
    "dis-beyazlatma": "Zahnaufhellung",
    "diseti": "Zahnfleischbehandlungen",
    "gorunmez-teller": "KFO mit unsichtbaren Drähten",
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
      <div class="navbar navbar-default navbar-fixed-top" :class="toggleNavClass()">
      <div class="container">
        <div class="row">
          <!-- menu mobile display -->
          <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse">
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          <!-- logo -->
          <nuxt-link :to="localePath('/')" class="navbar-brand"><img alt="logo" src="image/logo.png"></nuxt-link>

          <!-- mainmenu start -->
          <div class="menu-init" id="main-menu">
            <nav id="menu-center">
              <ul>
                <li>
                  <nuxt-link :to="localePath('/')">{{ $t('anasayfa') }}</nuxt-link>
                </li>
                <li><a href="#">{{ $t('kurumsal') }}</a>
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
                      <nuxt-link :to="localePath('/tedaviler/dental-implant')">Dental İmplant</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/check-up')">Check-Up</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/kanal-tedavisi-endodonti')">Kanal Tedavisi (Endodonti)</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/lazerle-estetik-dolgu')">Lazerle Estetik Dolgu</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/dijital-gulus-tasarimi')">Dijital Gülüş Tasarımı</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/seffaf-plaklarla-ortodonti')">Şeffaf Plaklarla Ortodonti</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/estetik-lamina-veneerler')">Estetik Lamina Veneerler</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/zirkonyum-porselen-kaplama')">Zirkonyum Porselen Kaplama</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/dis-sikma-tedavisi')">Diş Sıkma Tedavisi</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/cocuk-dis-hekimligi')">Çocuk Diş Hekimliği</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/radyoloji')">Radyoloji</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/cene-eklemi-tme-tedavisi')">Çene Eklemi (TME) Tedavisi</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/dis-beyazlatma')">Diş Beyazlatma</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/diseti-tedavileri')">Dişeti Tedavileri</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/tedaviler/gorunmez-tellerle-ortodonti')">Görünmez Tellerle Ortodonti</nuxt-link>
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
                -->
                <li><a  href="#">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog Single</a></li>
                    <li><a href="blog-post.html">Blog Post</a></li>
                  </ul>
                </li>
                <li><a href="#">{{ $t('iletisim')}}</a>
                  <ul>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="contact-1.html">Contact - 1</a></li>
                  </ul>
                </li>
                <li class="btn"><a class="popup-form" href="#subwrap">{{ $t('randevu') }}</a></li>
              </ul>
            </nav>
          </div>
          <!-- mainmenu end -->
        </div>
      </div>
      <!-- container -->
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
      active: false
    }
  },
  methods: {
    toggleNavClass() {
      if (this.active === false) {
        return 'nav'
      } else {
        return 'sticky-nav'
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
