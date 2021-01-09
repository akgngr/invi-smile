<i18n>
{
  "tr": {
    "doktor-bilgi": "DOKTORDAN BİLGİ AL",
    "devami": "DEVAMI",
    "sorular": "SIKÇA SORULAN SORULAR",
    "randevu": "RANDEVU ALIN",
    "biz": "BİZİ TANIYIN"
  },
  "en": {
    "doktor-bilgi": "GET INFO. FROM THE DOCTOR",
    "devami": "READ MORE",
    "sorular": "FREQUENTLY ASKED QUESTIONS",
    "randevu": "MAKE AN APPOINTMENT",
    "biz": "GET TO KNOW US"
  },
  "de": {
    "doktor-bilgi": "ERHALTEN SIE INFO. VOM ARZT",
    "devami": "MEHR",
    "sorular": "HÄUFIG GESTELLTE FRAGEN",
    "randevu": "EINEN TERMIN MACHEN",
    "biz": "LERNE UNS KENNEN"
  }
}
</i18n>

<template>
   <!-- gallery-home -->
    <div class="bot-home">
      <div class="container">
        <div class="row">
          <no-ssr>
            <vue-tiny-slider v-bind="tinyCarauselOptions">
              <div class="gal-home big-img">
                <div class="hovereffect">
                  <img :alt="$t('doktor-bilgi')" class="img-responsive" src="image/doctor-info.jpg" />
                  <div class="overlay">
                    <h3>{{ $t('doktor-bilgi') }}
                      <span class="devider"></span>
                    </h3>
                    <p>{{ $t('devami') }}</p>
                  </div>
                </div>
              </div>
              <div class="gal-home big-img">
                <div class="hovereffect">
                  <img :alt="$t('sorular')" class="img-responsive" src="image/faq.jpg" />
                  <div class="overlay">
                    <h3>{{ $t('sorular') }}
                      <span class="devider"></span>
                    </h3>
                    <p>{{ $t('devami') }}</p>
                  </div>
                </div>
              </div>
              <div class="gal-home big-img">
                <div class="hovereffect">
                  <img :alt="$t('randevu')" class="img-responsive" src="image/tenth-appointment.jpg" />
                  <div class="overlay">
                    <h3>{{ $t('randevu') }}
                      <span class="devider"></span>
                    </h3>
                    <p>{{ $t('devami') }}</p>
                  </div>
                </div>
              </div>
              <div class="gal-home big-img">
                <div class="hovereffect">
                  <img :alt="$t('biz')" class="img-responsive" src="image/image-galery.jpg" />
                  <div class="overlay">
                    <h3>{{ $t('biz') }}
                      <span class="devider"></span>
                    </h3>
                    <p>{{ $t('devami') }}</p>
                  </div>
                </div>
              </div>
            </vue-tiny-slider>
          </no-ssr>
        </div>
      </div>
    </div>
    <!-- gallery-home end -->
</template>

<script>
export default {
  name: 'caraosel',
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css"
        }
      ]
    }
  },
  data() {
    return {
      tinyCarauselOptions: {
        autoplay: true,
        spead: 400,
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
.bot-home .container{
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
.bot-home .tns-outer > button:nth-child(1){
  display: none;
}
.bot-home .tns-controls > button:nth-child(1):after{
  content: "‹";
  color: #FFFFFF;
  font-size: 22px;
}
.bot-home .tns-controls > button:nth-child(2):after{
  content:  "›";
  color: #FFFFFF;
  font-size: 22px;
}
.bot-home .tns-controls > button:nth-child(1){
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
.bot-home .tns-controls > button:nth-child(2){
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
.bot-home .tns-controls button:hover{
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
