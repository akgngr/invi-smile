<template>
  <div>
    <!-- subnav -->
    <div class="subnav">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="social-icons-subnav">
              <a href="#"><span class="ti-location-pin"></span>129 Park street, New York City, NY 10903</a>
              <a href="#"><span class="ti-mobile"></span>+02151 7778 009</a>
              <a href="#"><span class="ti-time"></span>Monday - Friday 08:00am ~ 05:00pm</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="right">
              <div class="social-icons-subnav">
                <a href="#"><span class="ti-facebook"></span></a>
                <a href="#"><span class="ti-dribbble"></span></a>
                <a href="#"><span class="ti-twitter"></span></a>
                <a href="#"><span class="ti-linkedin"></span></a>
                <ul class="nav navbar-nav navbar-right">
                  <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
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

<style scoped>

</style>
