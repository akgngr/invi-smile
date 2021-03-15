<i18n>
{
  "tr": {
    "title": "Kalite Politikamız",
    "description": "Sağlık hizmetlerine bakış açısı, hizmeti sunuş şekli ve sürekli kalite iyileştirme faaliyetleriyle alanında örnek gösterilen bir Ağız ve Diş Sağlığı Polikliniği olmak kalite politikamızdır.",
    "subtitle": "Smile Izmir Estetik Ağız ve Diş Sağlığı Polikliniği"
  },
  "en": {
    "title": "Our Quality Policy",
    "description": "It is our quality policy to be an Oral and Dental Health Polyclinic, which is exemplified in its field with its perspective on healthcare services, the way it provides service and its continuous quality improvement activities.",
    "subtitle": "Smile Izmir Aesthetic Oral and Dental Health Polyclinic"
  },
  "de": {
    "title": "Unsere Qualitätspolitik",
    "description": "Es ist unsere Qualitätspolitik, eine Poliklinik für Mund- und Zahngesundheit zu sein, die in ihrem Bereich mit ihrer Perspektive auf Gesundheitsdienstleistungen, der Art und Weise, wie sie Dienstleistungen erbringt, und ihren kontinuierlichen Aktivitäten zur Qualitätsverbesserung beispielhaft dargestellt wird.",
    "subtitle": "Smile Izmir Aesthetic Oral and Dental Health Polyclinic"
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
      en: '/our-quality-policy',
      tr: '/kalite-politikamiz',
      de: '/unsere-qualitatspolitik'
    }
  },
  data() {
    return {
      baslik: "Kalite Politikamız"
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
