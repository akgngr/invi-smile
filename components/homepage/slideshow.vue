<template>
  <!-- home -->
  <!-- background slider -->
  <div id="home">
    <!-- tiny slider -->
    <section class="fullwidthbanner-container no-bottom no-top" aria-label="section-slider">
      <div id="slider" class="slider">
        <no-ssr>
          <vue-tiny-slider v-bind="tinySliderOptions">
            <div class="tini-item">
              <div class="slotholder">
                <img src="images-slider/lamina-veneer.png" alt="Slider image" class="defaultimg" />
              </div>
              <div class="tp-caption big-heading sft">
                LAMİNA VENEER
              </div>
              <div class="tp-caption sub-heading sft">
                Hem dişleriniz koruyun hemde gülüşünüzü.
              </div>
              <div class="tp-caption sfb">
                <a class="btn-slider link-class" href="/">Devamını Oku</a>
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img src="images-slider/img-slide-1.jpg" alt="Slider image" class="defaultimg" />
              </div>
              <div class="tp-caption big-heading sft">
                DENEME 1
              </div>
              <div class="tp-caption sub-heading sft">
                We Build Your Dream
              </div>
              <div class="tp-caption sfb">
                <a class="btn-slider link-class" href="/">More Detail</a>
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img src="images-slider/img-slide-1.jpg" alt="Slider image" class="defaultimg" />
              </div>
              <div class="tp-caption big-heading sft">
                DENEME 1
              </div>
              <div class="tp-caption sub-heading sft">
                We Build Your Dream
              </div>
              <div class="tp-caption sfb">
                <a class="btn-slider link-class" href="/">More Detail</a>
              </div>
            </div>
          </vue-tiny-slider>
        </no-ssr>
      </div>
    </section>
    <!-- tiny slider end -->
    <Caraosel />
  </div>
  <!-- background slider end -->
  <!-- home end -->
</template>

<script>
import Caraosel from "./caraosel"

export default {
  comments: { Caraosel },
  name: 'slideshow',
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        },
        {
          rel: "stylesheet",
          href:
            "rs-plugin/css/settings.css"
        },
        {
          rel: "stylesheet",
          href:
            "rs-plugin/css/settings-ie8.css"
        }
      ]
    }
  },
  data() {
    return {
      tinySliderOptions: {
        container: "#autoHeight",
        mouseDrag: true,
        center: true,
        items: 1,
        swipeAngle: false,
        controlsContainer: false,
        nav: false,
        controlsText: ["", ""],
        speed: 400,
        animateIn: "tns-fadeIn",
        loop: true,
        rewind: true
      }
    }
  }
}
</script>

<style>
.slider .tns-slider, .slider .tns-outer{
  height: 100vh;
}
.slider .tns-ovh, .tini-item{
  height: calc(100vh - 41px);
  position: relative;
}
.tini-item .tp-caption{
  position: absolute;
  z-index: 100;
}
.tini-item .big-heading{
  left: 9%;
  top: 25%;
  font-size: 53px;
}
.tini-item .sub-heading{
  left: 9%;
  top: 38%;
  font-size: 40px;
}
.tini-item .sfb{
  left: 9%;
  top: 55%;
  font-size: 14px;
}
.tini-item .sfb a{
  color: #FFFFFF;
}
.tini-item .sfb a:hover {
  color: #111111;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0);
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.tini-item img.defaultimg, .slotholder{
  height: 100%;
  width: 100%;
}
@media(max-width:320px) {
  .tini-item{
    height: 100vh;
  }
  .tini-item .big-heading {
    font-size: 14pt;
    letter-spacing: 1px;
  }
  .tini-item .sub-heading{
    font-size: 11pt;
    letter-spacing: 1px;
  }
}
@media(max-width: 768px) {
  .tini-item{
    height: 100vh;
  }
}
.fullwidthbanner-container{
  height: 100%;
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
.slider .tns-controls button{
  display: none;
}
.slider:hover .tns-controls button{
  display: block;
  transition: opacity 0.2s;
}
.tns-autowidth {
  display: block;
}
.tns-controls > button:nth-child(1){
  z-index:100;
  cursor:pointer;
  position:relative;
  background:url(/rs-plugin/assets/large_left.png)
  no-Repeat 0 0;
  width:40px;
  height:40px;
}
.tns-controls > button:nth-child(2){
  z-index:100;
  cursor:pointer;
  position:relative;
  background:url(/rs-plugin/assets/large_right.png)
  no-Repeat 0 0;
  width:40px;
  height:40px;
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
@media(max-width:320px) {
  #home h1 {
    font-size: 22pt;
    letter-spacing: 1px;
  }
}
</style>
