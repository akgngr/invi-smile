<template>
  <div>
    <!-- Subscribe start -->
    <div id="subwrap" class="white-popup-block mfp-hide animbounceInDown">
      <h5>PLEASE FILL YOUR EMAIL BELOW</h5>

      <div class="space-half"></div>

      <form id="subscribe" method="post" name="subscribe">
        <input class="subscribfield subscribeemail" id="subscribeemail" name="subscribeemail" type="text">
        <button id="submit-2" class="btn-form" type="submit">Subscribe</button>
      </form>

      <div class="subscribesuccess">
        Thank you for fill your email
      </div>
    </div>
    <!-- Subscribe end -->
  </div>
</template>

<script>
export default {
  name: 'subscribe'
}
</script>

<style scoped>

</style>
