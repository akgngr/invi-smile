<i18n>
{
  "tr": {
    "title": "Hakkımızda",
    "subtitle": "Invismile' Estetik Ağız ve Diş Sağlığı Polikliniği",
    "description": "Invi Smile’ Estetik Dental ve Medikal Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Alsancak’ta hizmet vermeye başlamıştır.",
    "content": "Tüm diş hekimliği uzmanlık branşlarından oluşan akademisyen kadrosuyla, tam kapsamlı 6 diş ünitesi ile 500 metrekare modern çalışma alanıyla ulusal ve uluslararası alanda hizmet vermektedir. Kliniğimiz, 3D ağız içi tarama sistemi ve diş hekimliğinin radyolojik tetkik imkanlarını (panoramik, sefalomerik, periapikal röntgen) siz değerli hastalarımıza sunmaktadır. Pros’ Estetik Ağız ve Diş Sağlığı Polikliniğ; uzman hekim kadrosu, ileri tıp teknolojisi, tam donanımlı tanı ve tedavi üniteleri, hasta güvenliği odaklı tek katlı yaygın modern mimarisi ve misafirlerinin tüm ihtiyaçları düşünülerek tasarlanmış yapısı ile haftanın 6 günü hizmet vermektedir."
  },
  "en": {
    "title": "About Us",
    "subtitle": "Invismile' Aesthetic Oral and Dental Health Polyclinic",
    "description": "Our Oral and Dental Health Polyclinic, which was opened in 2020 by Invi Smile 'Estetik Dental ve Medikal Ltd., with the joint venture of Prof. Dr. Tancan UYSAL and Assistant Prof. Dr. Banu UYSAL, started to serve in Alsancak.",
    "content": "With its academic staff consisting of all dentistry specialties, 6 dental units with full coverage and 500 square meters of modern working area, it serves nationally and internationally. Our clinic offers 3D intraoral scanning system and radiological examination facilities (panoramic, cephalomeric, periapical x-ray) to our valued patients.Pros' Aesthetic Oral and Dental Health Polyclinic; with its expert physician staff, advanced medical technology, fully equipped diagnosis and treatment units, patient safety-oriented single-storey modern architecture and a structure designed considering all the needs of its guests, serves the day. "
  },
  "de": {
    "title": "Über uns",
    "subtitle": "Invismile 'Aesthetic Oral and Dental Health Polyclinic",
    "description": "Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 von Invi Smile 'Estetik Dental ve Medikal Ltd. mit dem Joint Venture von Prof. Dr. Tancan UYSAL und dem Assistenten Prof. Dr. Banu UYSAL eröffnet wurde, hat ihren Dienst in Alsancak aufgenommen.",
    "content": "Mit seinem akademischen Personal, das aus allen zahnmedizinischen Fachgebieten, 6 zahnärztlichen Einheiten mit vollständiger Abdeckung und 500 Quadratmetern modernem Arbeitsbereich besteht, dient es national und international. Unsere Klinik bietet ein intraorales 3D-Scansystem und radiologische Untersuchungsmöglichkeiten der Zahnmedizin (Panorama, Cephalomer, periapikale Röntgenaufnahme) für unsere geschätzten Patienten.Pros 'Poliklinik für ästhetische Mund- und Zahngesundheit; Mit Fachpersonal, fortschrittlicher Medizintechnik, voll ausgestatteten Diagnose- und Behandlungseinheiten, patientensicherheitsorientierter einstöckiger moderner Architektur und einer Struktur, die alle Bedürfnisse seiner Gäste berücksichtigt, die wöchentliche dient dem Tag. "
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
                <img src="/image/about.png" :alt="$t('title')">
              </div>
            </div>

            <div class="col-md-1 col-xs-1"></div>

            <div class="col-md-5 col-xs-11">
              <div class="about onStep" data-animation="fadeInLeft" data-time="300">
                <article>
                  <h2>
                    {{ $t('title') }}
                  </h2>
                  <strong>{{ $t('subtitle') }}</strong>
                  <span class="devider-cont"></span>
                  <p>{{ $t('description') }}</p>
                  <br>
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
      en: '/about-us',
      tr: '/hakkimizda',
      de: '/uber-uns'
    }
  },
  data() {
    return {
      baslik: "Hakkımızda"
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
