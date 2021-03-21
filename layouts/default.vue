<template>
  <transition name="home" mode="out-in">
    <div class="content-wrapper">
      <Subnav />
      <HeaderField />
      <Subscribe />
      <Nuxt />
      <FooterField />
      <Whatsapp />
    </div>
  </transition>
</template>

<script>
import Subscribe from '~/components/subscribe'
import Subnav from '~/components/homepage/subnav'
import HeaderField from '~/components/header-field'
import FooterField from '~/components/footer-field'
import Whatsapp from '~/components/whatsapp'

export default {
  components: {
    Subscribe,
    Subnav,
    FooterField,
    HeaderField,
    Whatsapp
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}

</script>
