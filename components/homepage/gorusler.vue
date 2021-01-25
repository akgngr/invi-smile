<i18n>
{
  "tr": {
    "hasta": "Hasta",
    "gorus": "Görüşleri"
  },
  "en": {
    "hasta": "Patient",
    "gorus": "Opinions"
  },
  "de": {
    "hasta": "Patienten",
    "gorus": "Meinungen"
  }
}
</i18n>
<template>
<div>
  <!-- Gorusler -->
  <section id="testi" class="testi-page">
    <div class="golge">
      <div class="container">
        <div class="row">
          <no-ssr>
            <vue-tiny-slider v-bind="tinyTestiOptions">
              <div class="item col-md-12">
                <blockquote>
                  <h3>sa...</h3>
                  <p>Ortodontik tedaviye başlamam icin bu yaşıma kadar beklemiş ve bi türlü cesaret edememiştim. Tancan hocam en büyük şansım bu hususta .. tedavim çok iyi sonuçlar verdi. Tancan hocam iyi ki var.. güzel gülüşümüzün mimarı.. teşekkürler</p>
                  <small>{{ $t('hasta') }} <cite title="Source Title">{{ $t('gorus') }}</cite></small>
                </blockquote>
              </div>
              <div class="item col-md-12">
                <blockquote>
                  <h3>ev...m</h3>
                  <p>Dişlerimdeki çarpaşıklık için gittiğim doktorumla tedavime başladığımdan bu yana hiç bir sıkıntım yok.Çok memnunum,tedavimin nasıl olacağı ,süreç ve sonuçları ile ilgili bilgileri beni çok memnun etti.Her zaman Güler yüzlü ve ilgili bir doktor.</p>
                  <small>{{ $t('hasta') }} <cite title="Source Title">{{ $t('gorus') }}</cite></small>
                </blockquote>
              </div>
              <div class="item col-md-12">
                <blockquote>
                  <h3>ay...a</h3>
                  <p>Şeffaf plak telsiz tadavi bizim açımızdan bir sorun yok tancan hocamızdan çok memnunuz tedavi sürecinin olumlu biteceğine inanıyoruz ve tancan hocamiza güveniyoruz.</p>
                  <small>{{ $t('hasta') }} <cite title="Source Title">{{ $t('gorus') }}</cite></small>
                </blockquote>
              </div>
              <div class="item col-md-12">
                <blockquote>
                  <h3>mü....</h3>
                  <p>Tancan Hoca ile invisalign tedavi sürecine başladık. Daha önce ortodonti tedavi görmüş biri olarak tekrar aynı sürece girme konusunda endişelerim vardı. Tancan hoca bu konuda çok güven veren ve her detayını paylaşan biri. Ölçülerim yeni alındı ve plaklarımın gelmesini bekliyorum. Tedavi süresince görüşlerimi paylaşacağım. Daha önce yanlış ortodonti tedavisi uygulanan biri olarak bu süreci tekrar deneyimleyeceğim ve paylaşacağım.</p>
                  <small>{{ $t('hasta') }} <cite title="Source Title">{{ $t('gorus') }}</cite></small>
                </blockquote>
              </div>
              <div class="item col-md-12">
                <blockquote>
                  <h3>gü...l</h3>
                  <p>İşini çok fazla severek yapan ve hastalarına gerçekten ilgisini gösteren bir ortodontist. Ben diş teli tedavisi görüyorum açıkçası çok korkuyordum fakat hocamız beni çok rahatlattı ve yaklaşık 1.5 yıldır kullandığım diş teli tedavimin sonuna gelmiş bulunmaktayım.Kendisini gönül rahatlığıyla herkese öneririm.Hayatımda yaptığım en güzel ‘iyi ki’lerde geliyorsunuz hocam.</p>
                  <small>{{ $t('hasta') }} <cite title="Source Title">{{ $t('gorus') }}</cite></small>
                </blockquote>
              </div>
            </vue-tiny-slider>
          </no-ssr>
        </div>
      </div>
    </div>
  </section>
  <!-- End Gorusler -->
</div>
</template>

<script>
export default {
  name: 'gorusler',
  data() {
    return {
      tinyTestiOptions: {
        autoplay: true,
        spead: 400,
        mouseDrag: true,
        items: 1,
        swipeAngle: false,
        nav: false,
        controlsText: ["", ""],
        animateIn: "tns-fadeIn",
        loop: true,
        rewind: true,
        fixedWidth: true,
        controlsPosition: "bottom",
        slideBy: "page",
        autoplayHoverPause: true
      }
    }
  }
}
</script>

<style>
.tns-horizontal.tns-subpixel>.tns-item{
  vertical-align: middle;
}
.testi-page, section.testi-page{
  padding: 0 !important;
  height: 90%;
  overflow: hidden;
}
.testi-page .golge{
  background: #3f3f3f;
  opacity: 0.6;
  padding-top: 3em;
  padding-bottom: 1em;
  height: 100%;
}
.testi-page .container{
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
.testi-page .tns-outer > button:nth-child(1){
  display: none;
}
.testi-page .tns-controls > button:nth-child(1):after{
  content: "‹";
  color: #FFFFFF;
  font-size: 22px;
}
.testi-page .tns-controls > button:nth-child(2):after{
  content:  "›";
  color: #FFFFFF;
  font-size: 22px;
}
.testi-page .tns-controls > button:nth-child(1){
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
.testi-page .tns-controls > button:nth-child(2){
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
.testi-page .tns-controls button:hover{
  opacity: 1;
}
@media(max-width: 540px) {
  .testi-page p{
    padding: 0;
    font-size: 12pt;
  }
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
