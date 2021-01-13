<i18n>
{
  "en": {
    "anasayfa": "Home",
    "kurumsal": "Business",
    "doktorlar": "Doctors",
    "tedaviler": "Treatments",
    "anlasmali": "Contracted Institutions",
    "iletisim": "Contact",
    "hakkimizda": "About Us",
    "randevu": "Get Appointment"
  },
  "tr": {
    "anasayfa": "Anasayfa",
    "kurumsal": "Kurumsal",
    "doktorlar": "Doktorlar",
    "tedaviler": "Tedaviler",
    "anlasmali": "Anlaşmalı Kurumlar",
    "iletisim": "İletişim",
    "hakkimizda": "Hakkımızda",
    "randevu": "Randevu AL"
  },
  "de": {
    "anasayfa": "Home",
    "kurumsal": "Geschäft",
    "doktorlar": "Ärzte",
    "tedaviler": "Behandlungen",
    "anlasmali": "Vertragsinstitutionen",
    "iletisim": "Kontakt",
    "hakkimizda": "Über uns",
    "randevu": "Termin machen"
  }
}
</i18n>

<template>
  <div>
    <!-- nav -->
    <div class="navbar navbar-default navbar-fixed-top" :class="{'sticky-nav': !showNavbar}">
      <div class="container">
        <div class="row">
          <!-- menu mobile display -->
          <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse">
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span></button>

          <!-- logo -->
          <a class="navbar-brand" href="index.html"><img alt="logo" src="image/logo.png"></a>

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
                    <li><a href="about-2.html">About Us - 2</a></li>
                    <li><a href="about-3.html">Our History</a></li>
                  </ul>
                </li>
                <li><a href="#">{{ $t('doktorlar') }}</a>
                  <ul>
                    <li><a href="service.html">CONSULTING BUILDING</a></li>
                    <li><a href="service-1.html">ARCHITECTURE BUILDING</a></li>
                    <li><a href="service-2.html">DESIGN & BUILD</a></li>
                    <li><a href="service-3.html">RENOVATION BUILDING</a></li>
                    <li><a href="service-4.html">CONSTRUCTION BUILDING</a></li>
                  </ul>
                </li>
                <li><a  href="#">{{ $t('tedaviler')}}</a> <ul>
                  <li><a href="result.html">PROJECTS FLUID</a></li>
                  <li><a href="#">PROJECTS GRID</a> <ul>
                    <li><a href="projects-grid-2.html">PROJECTS 2 COL</a></li>
                    <li><a href="projects-grid-3.html">PROJECTS 3 COL</a></li>
                    <li><a href="projects-grid-4.html">PROJECTS 4 COL</a></li>
                  </ul>
                  </li>
                  <li><a href="#">{{ $t('anlasmali')}}</a><ul>
                    <li><a href="project-detail.html">PROJECT DETAILS 1</a></li>
                    <li><a href="project-detail-2.html">PROJECT DETAILS 2</a></li>
                  </ul>
                  </li>
                </ul>
                </li>
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
    <!-- nav end -->
  </div>
</template>

<script>
export default {
  name: 'header-field',
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      // this.showNavbar = currentScrollPosition < this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
