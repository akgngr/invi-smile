<template>
   <!-- gallery-home -->
    <div class="">
      <div class="container">
        <div class="row">
          <no-ssr>
            <vue-tiny-slider v-bind="tinyCarauselOptions">
              <div>
                <img alt="imageportofolio" class="img-responsive" src="img/gallery-home/img1.jpg" />
                <div class="overlay">
                  <h3>FONDATION BUILDING
                    <span class="devider"></span>
                  </h3>
                  <p>MORE DETAIL</p>
                </div>
              </div>
              <div>
                <img alt="imageportofolio" class="img-responsive" src="img/gallery-home/img1.jpg" />
                <div class="overlay">
                  <h3>FONDATION BUILDING
                    <span class="devider"></span>
                  </h3>
                  <p>MORE DETAIL</p>
                </div>
              </div>
              <div>
                <img alt="imageportofolio" class="img-responsive" src="img/gallery-home/img1.jpg" />
                <div class="overlay">
                  <h3>FONDATION BUILDING
                    <span class="devider"></span>
                  </h3>
                  <p>MORE DETAIL</p>
                </div>
              </div>
              <div>
                <img alt="imageportofolio" class="img-responsive" src="img/gallery-home/img1.jpg" />
                <div class="overlay">
                  <h3>FONDATION BUILDING
                    <span class="devider"></span>
                  </h3>
                  <p>MORE DETAIL</p>
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
        center: true,
        items: 4,
        swipeAngle: false,
        controlsContainer: false,
        nav: false,
        controlsText: ["", ""]
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
