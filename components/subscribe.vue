<template>
  <div>
    <!-- Subscribe start -->
    <div class="white-popup-block mfp-hide animbounceInDown" data-time="0" id="subwrap">
      <h5>
        PLEASE FILL YOUR EMAIL BELOW
      </h5>

      <div class="space-half">
      </div>

      <form action="subscribe.php" id="subscribe" method="post" name="subscribe">
        <input class="subscribfield subscribeemail" id="subscribeemail" name="subscribeemail" type="text"> <button class="btn-form" id="submit-2" type="submit">Subscribe</button>
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
