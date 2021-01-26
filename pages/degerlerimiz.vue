<i18n>
{
  "tr": {
    "title": "Değerlerimiz",
    "description": "Invismile olarak değerlerimiz başta Hasta ve Çalışan Haklarına Saygı Duymak, Bilimsel Esasları Temel Almak vd.",
    "subtitle": "Invismile Estetik Ağız ve Diş Sağlığı Polikliniği",
    "content": "<ul><li>Hasta ve Çalışan Haklarına Saygı Duymak,</li> <li>Bilimsel Esasları Temel Almak,</li> <li>Hasta Tedavilerinde Yüksek Kalite Standardını yakalamak,</li> <li>Tüm Aktivitelerinde Hesap Verebilir ve Şeffaf Olmak,</li> <li>Katılımcı, Hoşgörülü, Yenilikçi Bir Yönetim Anlayışı İçerisinde Olmak,</li> <li>İnsan Odaklı Hizmet Anlayışına Sahip Olmak,</li> <li>Çevreye Duyarlı Olmak,</li> <li>Etik ve Hukuki Kurallara Uymak,</li></ul>"
  },
  "en": {
    "title": "Our Values",
    "description": "As Invismile, our values are Respecting Patient and Employee Rights, Taking Scientific Principles as a Basis, etc.",
    "subtitle": "Invismile Aesthetic Oral and Dental Health Polyclinic",
    "content": "<ul><li> Respecting Patient and Employee Rights, </li> <li> Based on Scientific Principles, </li> <li> Achieving the High Quality Standard in Patient Treatments, </li> <li> Being Accountable and Transparent in All Activities , </li> <li>To have a Participatory, Tolerant, Innovative Management Approach, </li> <li> To Have a Human-Oriented Service Approach, </li> <li> To Be Environmentally Sensitive, </li> <li> Complying with Ethical and Legal Rules, </li></ul>"
  },
  "de": {
    "title": "Unsere Werte",
    "description": "Als Invismile sind unsere Werte: Achtung der Rechte von Patienten und Mitarbeitern, Berücksichtigung wissenschaftlicher Grundsätze usw.",
    "subtitle": "Invismile Aesthetic Oral and Dental Health Polyclinic",
    "content": "<ul><li> Achtung der Patienten- und Mitarbeiterrechte, </li> <li> basierend auf wissenschaftlichen Grundsätzen, </li> <li> Erreichen des hohen Qualitätsstandards bei Patientenbehandlungen, </li> <li> Rechenschaftspflicht und Transparenz bei allen Aktivitäten , </li> <li> einen partizipativen, toleranten, innovativen Managementansatz zu haben, </li> <li> einen menschenorientierten Serviceansatz zu haben,</li> <li>umweltbewusst zu sein,</li> <li>Einhaltung ethischer und rechtlicher Regeln,</li></ul>"
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
                  <p v-html="$t('content')"></p>
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
      en: '/our-values',
      tr: '/degerlerimiz',
      de: '/unsere-werte'
    }
  },
  data() {
    return {
      baslik: "Değerlerimiz"
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
