<template>
  <!-- home -->
  <!-- background slider -->
  <div id="home">
    <!-- tiny slider -->
    <section class="fullwidthbanner-container no-bottom no-top" aria-label="section-slider">
      <div id="slider" class="slider">
        <no-ssr>
          <vue-tiny-slider v-bind="tinySliderOptions">
            <div>
              <img src="images-slider/img-slide-1.jpg" alt="" />
              <div class="slider-content">
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
            </div>
            <div>
              <img src="images-slider/img-slide-1.jpg" alt="" />
              <div class="slider-content">
                <div class="tp-caption big-heading sft">
                  DENEME 2
                </div>
                <div class="tp-caption sub-heading sft">
                  We Build Your Dream
                </div>
                <div class="tp-caption btn-slider sfb">
                  <div class="btn-slider"><a class="link-class " href="#">More Detail</a></div>
                </div>
              </div>
            </div>
            <div>
              <img src="images-slider/img-slide-1.jpg" alt="" />
              <div class="slider-content">
                <div class="tp-caption big-heading sft">
                  DENEME 3
                </div>
                <div class="tp-caption sub-heading sft">
                  We Build Your Dream
                </div>
                <div class="tp-caption btn-slider sfb">
                  <div class="btn-slider"><a class="link-class " href="#">More Detail</a></div>
                </div>
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
        speed: 400
      },
      tinyCarauselOptions: {
        autoplay: true,
        autoplayTimeout: 2000,
        spead: 400,
        loop: true,
        gutter: 10,
        mouseDrag: true,
        center: true,
        items: 4,
        swipeAngle: false,
        controlsContainer: false,
        nav: false,
        controlsText: ["", ""],
        speed: 400
      }
    }
  }
}
</script>

<style>
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
</style>
