<i18n>
{
  "tr": {
    "title": "Misyonumuz",
    "description": "Ağız ve diş sağlığı ile ilgili üst düzeyde tanı ve tedavi hizmetini; çağdaş bilgi ve modern teknoloji ışığında, alanında sahip olduğu üstün nitelikli, eğitimli ve uzman kadrosu ile evrensel standartlarda hijyenik ortamda, kaliteli ve güvenilir bir şekilde gerçekleştirmektir.",
    "subtitle": "Invismile' Estetik Ağız ve Diş Sağlığı Polikliniği",
    "content": "Ağız ve diş sağlığı ile ilgili üst düzeyde tanı ve tedavi hizmetini; çağdaş bilgi ve modern teknoloji ışığında, alanında sahip olduğu üstün nitelikli, eğitimli ve uzman kadrosu ile evrensel standartlarda hijyenik ortamda, kaliteli ve güvenilir bir şekilde gerçekleştirmektir."
  },
  "en": {
    "title": "Our Mission",
    "description": "To provide high level diagnosis and treatment services related to oral and dental health, in the light of contemporary knowledge and modern technology, with its highly qualified, educated and expert staff in a hygienic environment with universal standards, in a quality and reliable way.",
    "subtitle": "Invismile' Aesthetic Oral and Dental Health Polyclinic",
    "content": "To provide high-level diagnosis and treatment services related to oral and dental health, in the light of contemporary knowledge and modern technology, with its high-quality, educated and expert staff in a hygienic environment at universal standards, in a quality and reliable manner."
  },
  "de": {
    "title": "Unsere Mission",
    "description": "Bereitstellung von Diagnose- und Behandlungsdiensten auf hohem Niveau im Zusammenhang mit Mund- und Zahngesundheit im Lichte des modernen Wissens und der modernen Technologie mit hochqualifiziertem, geschultem und fachkundigem Personal in universellen Standards, in einem hygienischen Umfeld, auf qualitativ hochwertige und zuverlässige Weise.",
    "subtitle": "Invismile 'Aesthetic Oral and Dental Health Polyclinic",
    "content": "Bereitstellung hochwertiger Diagnose- und Behandlungsdienste im Zusammenhang mit Mund- und Zahngesundheit im Lichte des modernen Wissens und der modernen Technologie mit hochqualifizierten, ausgebildeten und kompetenten Mitarbeitern in einem hygienischen Umfeld zu universellen Standards auf qualitativ hochwertige und zuverlässige Weise."
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
      en: '/our-mission',
      tr: '/misyonumuz',
      de: '/unsere-aufgabe'
    }
  },
  data() {
    return {
      baslik: "Misyonumuz"
    }
  }
}
</script>
<style>
.img-about{
  background-image:url('/image/about.png');
}
</style>
