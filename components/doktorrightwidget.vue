<template>
  <div class="widget">
    <ul id="services-list">
      <li>
        <nuxt-link :to="localePath('tancan-uysal')">Prf. Dr. Tancan UYSAL</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('banu-uysal')">Yrd. Doç. Dr. Banu UYSAL</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'doktorrightwidget'
}
</script>

<style scoped>

</style>
