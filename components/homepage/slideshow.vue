<i18n>
{
  "tr": {
    "slider": "images-slider/desktop/invisalign.webp",
    "slider2": "images-slider/desktop/dental-implant-uygulamlari.webp",
    "slider3": "images-slider/desktop/gijital-gulus-tasarimi.webp",
    "slider4": "images-slider/desktop/slider4.webp",
    "slider5": "images-slider/desktop/kanal-tedavisi.webp",
    "slider6": "images-slider/desktop/slider6.webp",
    "slider7": "images-slider/desktop/dis-beyazlatma.webp",
    "slider8": "images-slider/desktop/itero-agiz-ici-tarama-sistemi.webp",
    "mobileSlider": "images-slider/mobile/invisalign.webp",
    "mobileSlider2": "images-slider/mobile/dental-implant-uygulamlari.webp",
    "mobileSlider3": "images-slider/mobile/digital-gulus-tasarimi.webp",
    "mobileSlider4": "images-slider/mobile/slider4-mobile.webp",
    "mobileSlider5": "images-slider/mobile/kanal-tedavisi.webp",
    "mobileSlider6": "images-slider/mobile/slider6-mobile.webp",
    "mobileSlider7": "images-slider/mobile/dis-beyazlatma.webp",
    "mobileSlider8": "images-slider/mobile/itero-agiz-ici-tarama.webp"
  },
  "en": {
    "slider": "images-slider/desktop/en/invisalign.webp",
    "slider2": "images-slider/desktop/en/dental-implant-application.webp",
    "slider3": "images-slider/desktop/en/digital-smile-design.webp",
    "slider4": "images-slider/desktop/en/slider-4.webp",
    "slider5": "images-slider/desktop/en/root-treatment.webp",
    "slider6": "images-slider/desktop/en/slider-6.webp",
    "slider7": "images-slider/desktop/en/teeth-whiting.webp",
    "slider8": "images-slider/desktop/en/itero-intraoral-scanning-system.webp",
    "mobileSlider": "images-slider/mobile/en/invisalign.webp",
    "mobileSlider2": "images-slider/mobile/en/dental-implant-applications.webp",
    "mobileSlider3": "images-slider/mobile/en/digital-smile-design.webp",
    "mobileSlider4": "images-slider/mobile/en/mobil-slider-4.webp",
    "mobileSlider5": "images-slider/mobile/en/root-treatment.webp",
    "mobileSlider6": "images-slider/mobile/en/mobil-slider-6.webp",
    "mobileSlider7": "images-slider/mobile/en/teeht-whitining.webp",
    "mobileSlider8": "images-slider/mobile/en/ittero-intraoral-scanning-system.webp"
  },
  "de": {
    "slider": "images-slider/desktop/de/invisalign.webp",
    "slider2": "images-slider/desktop/de/zahnimplantat-anwendungen.webp",
    "slider3": "images-slider/desktop/de/digitales-lacheln-design.webp",
    "slider4": "images-slider/desktop/en/slider-4.webp",
    "slider5": "images-slider/desktop/de/kanalbehandlung.webp",
    "slider6": "images-slider/desktop/en/slider-6.webp",
    "slider7": "images-slider/desktop/de/zahnaufhellung.webp",
    "slider8": "images-slider/desktop/de/itero-intraorales-scansystem.webp",
    "mobileSlider": "images-slider/mobile/de/invisalign.webp",
    "mobileSlider2": "images-slider/mobile/de/zahnimplantat-anwendungen.webp",
    "mobileSlider3": "images-slider/mobile/de/digitales-lacheln-design.webp",
    "mobileSlider4": "images-slider/mobile/en/mobil-slider-4.webp",
    "mobileSlider5": "images-slider/mobile/de/wurzelbehandlung.webp",
    "mobileSlider6": "images-slider/mobile/en/mobil-slider-6.webp",
    "mobileSlider7": "images-slider/mobile/de/zahnaufhellung.webp",
    "mobileSlider8": "images-slider/mobile/de/itero-intraorales-scansystem.webp"
  }
}
</i18n>
<template>
  <!-- home -->
  <!-- background slider -->
  <div id="home">
    <!-- tiny slider -->
    <section
      class="fullwidthbanner-container no-bottom no-top"
      aria-label="section-slider"
    >
      <div id="slider" class="slider">
        <no-ssr>
          <vue-tiny-slider v-bind="tinySliderOptions">
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider2')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider2')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider3')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider3')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider4')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider4')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider5')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider5')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider6')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider6')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider7')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider7')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
              </div>
            </div>
            <div class="tini-item">
              <div class="slotholder">
                <img
                  :src="$t('slider8')"
                  alt="Slider image"
                  class="defaultimg desktop"
                />
                <img
                  :src="$t('mobileSlider8')"
                  alt="Slider image"
                  class="defaultimg mobil"
                />
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
import Caraosel from "./caraosel";

export default {
  comments: { Caraosel },
  name: "slideshow",
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        }
      ]
    };
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
        rewind: true,
        lazy: true
      }
    };
  }
};
</script>

<style>
.slider .tns-slider,
.slider .tns-outer {
  height: 100vh;
}
.slider .tns-ovh,
.tini-item {
  height: calc(100vh - 41px);
  position: relative;
}
.tini-item .tp-caption {
  position: absolute;
  z-index: 100;
}
.tini-item .big-heading {
  left: 9%;
  top: 25%;
  font-size: 53px;
}
.tini-item .sub-heading {
  left: 9%;
  top: 38%;
  font-size: 40px;
}
.tini-item .sfb {
  left: 9%;
  top: 55%;
  font-size: 14px;
}
.tini-item .sfb a {
  color: #ffffff;
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
.tini-item img.defaultimg,
.slotholder {
  height: 100%;
  width: 100%;
}
@media (max-width: 320px) {
  .tini-item {
    height: 100vh;
  }
  .tini-item .big-heading {
    font-size: 14pt;
    letter-spacing: 1px;
  }
  .tini-item .sub-heading {
    font-size: 11pt;
    letter-spacing: 1px;
  }
}
@media (max-width: 768px) {
  .tini-item {
    height: 100vh;
  }
}
.fullwidthbanner-container {
  height: 100%;
  overflow: hidden;
  transition: height 1s ease;
}
.slider .tns-controls {
  position: absolute;
  z-index: 1000;
  top: 50%;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.slider .tns-controls button {
  display: none;
}
.slider:hover .tns-controls button {
  display: block;
  transition: opacity 0.2s;
}
.tns-autowidth {
  display: block;
}
.tns-controls > button:nth-child(1) {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url(/rs-plugin/assets/large_left.png) no-Repeat 0 0;
  width: 40px;
  height: 40px;
}
.tns-controls > button:nth-child(2) {
  z-index: 100;
  cursor: pointer;
  position: relative;
  background: url(/rs-plugin/assets/large_right.png) no-Repeat 0 0;
  width: 40px;
  height: 40px;
}
.tns-controls > button:focus {
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
.desktop {
  display: block;
}
.mobil {
  display: none;
}
@media (max-width: 540px) {
  #home h1 {
    font-size: 22pt;
    letter-spacing: 1px;
  }
  .desktop {
    display: none;
  }
  .mobil {
    display: block;
  }
  img.mobil {
    height: 80vh !important;
  }
  .fullwidthbanner-container {
    height: 80vh;
  }
}
</style>
