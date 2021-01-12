<i18n>
{
  "tr": {
    "hakkimizda" : "Invi Smile' Estetik Dental ve Medikal Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Alsancak'ta hizmet vermeye başlamıştır."
  },
  "en": {
    "hakkimizda" : "Estetik Dental ve Medikal Ltd. Şti by Prof. Dr. Tancan UYSAL and Asst. Assoc. Dr. Our Oral and Dental Health Polyclinic, which was opened in 2020 with the joint venture of Banu UYSAL, started to serve in Alsancak."
  },
  "de": {
    "hakkimizda" : "Estetik Dental ve Medikal Ltd. Şti von Prof. DR. Tancan UYSAL und Asst. Assoc. DR. Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 mit dem Joint Venture von Banu UYSAL eröffnet wurde, wurde in Alsancak in Betrieb genommen."
  }
}
</i18n>
<template>
  <div>
    <!-- subfooter -->
    <section aria-label="footer" class="subfooter">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <div class="logo">
              <img alt="logo" src="image/logo.png">
            </div>
            <p>{{ $t('hakkimizda') }}</p>
          </div>
          <div class="col-md-3 col-xs-12">
            <h3>
              RECENT POSTS
            </h3>
            <div class="recent">
              <a href="#">
                <div class="date">
                  <div class="month">
                    <span class="date-month">22</span> <span class="name-month">APR</span>
                  </div>
                </div>
                <div class="news">
                  Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante
                </div></a>
            </div>
            <div class="recent">
              <a href="#">
                <div class="date">
                  <div class="month">
                    <span class="date-month">22</span> <span class="name-month">APR</span>
                  </div>
                </div>
                <div class="news">
                  Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante
                </div></a>
            </div>
            <div class="recent">
              <a href="#">
                <div class="date">
                  <div class="month">
                    <span class="date-month">22</span> <span class="name-month">APR</span>
                  </div>
                </div>
                <div class="news">
                  Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante
                </div></a>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <h3>
              CONTACT INFO
            </h3>
            <address>
              <span>129 Park street, New York City, NY 10903</span> <span><strong>PHONE:</strong> (+6221) 000 888 999</span> <span><strong>EMAIL:</strong> <a href="mailto:companyname@gmail.com">companyname@gmail.com</a></span> <span><strong>SITE:</strong> <a href="#">www.companyname.com</a></span>
            </address>
          </div>
          <div class="col-md-3 col-xs-12">
            <h3>
              PHOTO STREAM
            </h3>
            <!--
            <div id="flickr-photo-stream">
              <script src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=52617155@N08" type="text/javascript">
              </script>
              <div class="clearfix">
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
    </section>
    <!-- subfooter end -->
    <!-- footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            Buildstate &copy; Copyright 2017 by on3-step
          </div>
          <div class="col-md-6">
            <div class="right">
              <div class="social-icons">
                <a href="#"><span class="ti-facebook"></span></a> <a href="#"><span class="ti-dribbble"></span></a> <a href="#"><span class="ti-twitter"></span></a> <a href="#"><span class="ti-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer end -->
    <!-- ScrolltoTop -->
    <div id="totop">
      <span class="ti-angle-up"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-field'
}
</script>
