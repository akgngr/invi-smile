<template>
  <div>
    <!-- subnav -->
    <div class="subnav">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="social-icons-subnav">
              <a target="_blank" href="https://goo.gl/maps/KrSZWwHNMmWMqpNk8"><span class="ti-location-pin"></span>Adalet Mah. Şehit Polis Fethi Sekin Cad. No 4/B Bayraklı/İzmir</a>
              <a href="tel:+902323454141"><span class="ti-mobile"></span>+902323454141</a>
              <a href="#"><span class="ti-time disabled"></span>Pazartesi - Cumartesi 09:30 ~ 18:30</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="right">
              <div class="social-icons-subnav">
                <a target="_blank" href="https://www.instagram.com/invismileizmir/"><span class="ti-instagram"></span></a>
                <a target="_blank" href="#"><span class="ti-facebook"></span></a>
                <a target="_blank" href="#"><span class="ti-linkedin"></span></a>
                /
                <ul class="nav navbar-nav navbar-right dil-degistirme">
                  <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                    :class="locale.name">
                    {{ locale.code }}
                  </nuxt-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- subnav end -->
  </div>
</template>

<script>
export default {
  name: 'subnav',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style>
.dil-degistirme a{
  padding-left: 10px;
}
</style>
