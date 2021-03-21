<template>
  <!-- section team -->
  <section class="whitepage" id="team">
    <!-- team -->
    <div class="container">
      <div class="row">
        <no-ssr>
          <vue-tiny-slider v-bind="tinyCarauselOptions">

            <div class="team-wrapper">
              <img alt="team img 4" class="img-responsive lazyload" data-src="image/tancan-uysal.webp">
              <div class="team-des">
                <nuxt-link class="doktor-link" :to="localePath('tancan-uysal')"><h3>Prof. Dr. Tancan UYSAL</h3></nuxt-link>
                <span>Ortodonti Uzmanı</span>
                <a href="#"><span class="ti-facebook"></span></a>
                <a href="#"><span class="ti-twitter"></span></a>
                <a href="#"><span class="ti-linkedin"></span></a>
              </div>
            </div>

            <div class="team-wrapper">
              <img alt="team img 1" class="img-responsive lazyload" data-src="image/banu-uysal.webp">
              <div class="team-des">
                <nuxt-link class="doktor-link" :to="localePath('banu-uysal')"><h3>Yrd. Doç. Dr. Banu UYSAL</h3></nuxt-link>
                <span>Endodonti Uzmanı</span>
                <a href="#"><span class="ti-facebook"></span></a>
                <a href="#"><span class="ti-twitter"></span></a>
                <a href="#"><span class="ti-linkedin"></span></a>
              </div>
            </div>

            <div class="team-wrapper">
              <img alt="team img 1" class="img-responsive lazyload" data-src="image/doktor/dr_dt_bahar_sayin.webp">
              <div class="team-des">
                <nuxt-link class="doktor-link" :to="localePath('bahar_sayin')"><h3>Yrd. Doç. Dr. Bahar SAYIN</h3></nuxt-link>
                <span>Protez Uzmanı</span>
                <a href="#"><span class="ti-facebook"></span></a>
                <a href="#"><span class="ti-twitter"></span></a>
                <a href="#"><span class="ti-linkedin"></span></a>
              </div>
            </div>

            <div class="team-wrapper">
              <img alt="team img 1" class="img-responsive lazyload" data-src="image/doktor/dr_dt_seyfi_kelebek.webp">
              <div class="team-des">
                <nuxt-link class="doktor-link" :to="localePath('seyfi_kelebek')"><h3>Dr. Dt. Seyfi KELEBEK</h3></nuxt-link>
                <span>Çene Cerrahisi Uzmanı</span>
                <a href="#"><span class="ti-facebook"></span></a>
                <a href="#"><span class="ti-twitter"></span></a>
                <a href="#"><span class="ti-linkedin"></span></a>
              </div>
            </div>

          </vue-tiny-slider>
        </no-ssr>
      </div>
    </div>
    <!-- team end -->
  </section>
  <!-- section team end -->
</template>

<script>
export default {
  name: 'doktorlar',
  data() {
    return {
      tinyCarauselOptions: {
        autoplay: true,
        spead: 800,
        gutter: 10,
        mouseDrag: true,
        items: 4,
        swipeAngle: false,
        nav: false,
        controlsText: ["", ""],
        animateIn: "tns-fadeIn",
        loop: true,
        rewind: true,
        fixedWidth: 293,
        controlsPosition: "bottom",
        slideBy: "page",
        autoplayHoverPause: true,
        lazy: true,
        responsive: {
          576: {
            edgePadding: 0,
            items: 1,
            fixedWidth: 320,
            gutter: 0
          },
          768: {
            items: 2,
            fixedWidth: 420
          },
          992: {
            items: 3,
            fixedWidth: 293
          }
        }
      }
    }
  }
}
</script>

<style>
.team-des a.doktor-link{
  width: 100%;
  height: auto;
  line-height: normal;
}

.whitepage .item{
   padding-right: 1rem !important;
   padding-left: 1rem;
 }
.whitepage .container{
  position: relative;
}
.fullwidthbanner-container{
  height: calc(100vh - 41px);
  overflow: hidden;
  transition: height 1s ease;
}
.slider .tns-controls{
  position: absolute;
  z-index: 1000;
  top: 50%;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.tns-autowidth {
  display: block;
}
.whitepage .tns-outer > button:nth-child(1){
  display: none;
}
.whitepage .tns-controls > button:nth-child(1):after{
  content: "‹";
  color: #FFFFFF;
  font-size: 22px;
}
.whitepage .tns-controls > button:nth-child(2):after{
  content:  "›";
  color: #FFFFFF;
  font-size: 22px;
}
.whitepage .tns-controls > button:nth-child(1){
  z-index:100;
  cursor:pointer;
  position:absolute;
  background-image: none;
  padding: 7px 17px 10px 17px;
  background: rgba(0, 0, 0, 1);
  margin: 5px;
  left: 0;
  top:40%;
  opacity: 0.5;
}
.whitepage .tns-controls > button:nth-child(2){
  z-index:100;
  cursor:pointer;
  position:absolute;
  background-image: none;
  font-size: 14px;
  padding: 7px 17px 10px 17px;
  background: rgba(0, 0, 0, 1);
  margin: 5px;
  right: 0;
  top: 40%;
  opacity: 0.5;
}
.whitepage .tns-controls button:hover{
  opacity: 1;
}
.tns-controls > button:focus{
  outline: none;
}
.slider-content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
