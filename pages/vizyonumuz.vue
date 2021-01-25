<i18n>
{
  "tr": {
    "title": "Vizyonumuz",
    "description": "Vizyonumuz; hastalarımıza güven, iş kalitesi ve istisnai hasta bakımı üzerine inşa edilmiş ömür boyu sürecek bir ilişkiyi teşvik edecek bir diş deneyimi sağlamaktır.",
    "subtitle": "Invismile' Estetik Ağız ve Diş Sağlığı Polikliniği",
    "content": "Vizyonumuz, bir hastanın sağlıklı bir gülümsemeyi sürdürme becerisine gelince, önümüze çıkan engelleri kaldırmaya çalışmaktır. Tüm diş dallarında Invismile' Estetik Ağız ve Diş Sağlığı Polikliniği Uzman Ekibi, hastalarımızın her birinin hak ettiği gülümsemeyi elde edebilmesi için bu engelleri aşmanın yeni yollarını keşfetmek için sürekli çalışıyor!"
  },
  "en": {
    "title": "Our vision",
    "description": "Our vision is to provide our patients with a dental experience that will promote a lifelong relationship built on trust, confidence, quality of work, and exceptional patient care.",
    "subtitle": "Invismile' Aesthetic Oral and Dental Health Polyclinic",
    "content": "It is our vision to strive to remove barriers that seem to get in the way when it comes to a patient’s ability to maintain a healthy smile. Invismile Esthetic Dental Clinic Specialist Team in all dental branches is constantly working to discover new ways to break through these barriers so that each and every one of our patients can achieve the smile they deserve!"
  },
  "de": {
    "title": "Unsere Vision",
    "description": "Unsere Vision ist es, unseren Patienten eine zahnärztliche Erfahrung zu bieten, die eine lebenslange Beziehung fördert, die auf Vertrauen, Zuversicht, Arbeitsqualität und außergewöhnlicher Patientenversorgung beruht.",
    "subtitle": "Pros 'Aesthetic Oral and Dental Health Polyclinic",
    "content": "Es ist unsere Vision, Barrieren zu beseitigen, die der Fähigkeit eines Patienten, ein gesundes Lächeln zu bewahren, im Weg zu stehen scheinen. Das Spezialistenteam der Invismile Esthetic Dental Clinic in allen Zahnarztpraxen arbeitet ständig daran, neue Wege zu finden, um diese Barrieren zu überwinden, damit jeder einzelne unserer Patienten das Lächeln erzielen kann, das er verdient!"
  }
}
</i18n>
<template>
  <div>
    <SocialHead :title="$t('title')" :description="$t('description')" />
    <Subheader :baslik="$t('title')" />
    <!-- section about -->
    <section aria-label="about" class="no-top no-bottom">
      <div class="container-fluid">
        <div class="row">
          <div class="no-gutter">

            <div class="col-md-6 col-xs-12">
              <div class="onStep">
                <div class="img-about"></div>
              </div>
            </div>

            <div class="col-md-1 col-xs-1"></div>

            <div class="col-md-5 col-xs-11">
              <div class="about onStep">
                <article>
                  <h2>
                    {{ $t('title') }}
                  </h2>
                  <strong>{{ $t('subtitle') }}</strong>
                  <span class="devider-cont"></span>
                  <p>{{ $t('description') }}</p>
                  <p>{{ $t('content') }}</p>
                  </article>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- section about end -->
  </div>
</template>

<script>
import SocialHead from '~/components/SocialHead'
import Subheader from '~/components/subheader'

export default {
  layout: "page",
  components: { SocialHead, Subheader },
  nuxtI18n: {
    seo: true,
    paths: {
      en: '/our-Vision',
      tr: '/vizyonumuz',
      de: '/unsere-Vision'
    }
  },
  data() {
    return {
      baslik: "Vizyonumuz"
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
<style>
.img-about{
  background-image:url('/image/about.png');
}
</style>
