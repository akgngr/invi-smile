<template>
  <transition name="home" mode="out-in">
    <div class="content-wrapper">
      <Subnav />
      <HeaderField />
      <Nuxt />
      <FooterField />
      <Subscribe />
    </div>
  </transition>
</template>

<script>
import Subscribe from '~/components/subscribe'
import Subnav from '~/components/homepage/subnav'
import HeaderField from '~/components/header-field'
import FooterField from '~/components/footer-field'
export default {
  components: {
    Subscribe,
    Subnav,
    FooterField,
    HeaderField
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
