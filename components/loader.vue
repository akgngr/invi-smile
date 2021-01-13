<template>
  <div v-if="loading" class="loading-page">
    <!-- preloader -->
    <div class="bg-preloader">
    </div>
    <div class="preloader">
      <div class="mainpreloader">
      <span>
      </span>
      </div>
    </div>
    <!-- preloader end -->
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
