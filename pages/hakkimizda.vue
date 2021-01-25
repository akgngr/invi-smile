<i18n>
{
  "tr": {
    "title": "Hakkımızda",
    "subtitle": "Invismile' Estetik Ağız ve Diş Sağlığı Polikliniği",
    "description": "Invi Smile’ Estetik Dental ve Medikal Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Alsancak’ta hizmet vermeye başlamıştır.",
    "icerik1": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret  Ltd. Şti tarafından, Prof. Dr. Tancan UYSAL ve Yrd. Doç. Dr. Banu UYSAL ortak girişimiyle 2020 yılında açılan Ağız ve Diş Sağlığı Polikliniğimiz Bayraklı’da hizmet vermeye başlamıştır.",
    "icerik2": "Tüm diş hekimliği uzmanlık branşlarından oluşan akademisyen kadrosuyla, tam kapsamlı 9 diş ünitesi ile 500 metrekare modern çalışma alanıyla ulusal ve uluslararası alanda hizmet vermektedir. Kliniğimiz, 3D ağız içi tarama sistemi, 3D print, dijital diş hekimligi tasarım üretim altyapısı  ve diş hekimliğinin radyolojik tetkik imkanlarını (panoramik, sefalomerik, periapikal röntgen) siz değerli hastalarımıza sunmaktadır. *Invismile Estetik Ağız ve Diş Sağlığı Polikliniği*; uzman hekim kadrosu, ileri tıp teknolojisi, tam donanımlı tanı ve tedavi üniteleri, hasta güvenliği odaklı tek katlı yaygın modern mimarisi ve misafirlerinin tüm ihtiyaçları düşünülerek tasarlanmış yapısı ile haftanın 6 günü hizmet vermektedir."
  },
  "en": {
    "title": "About Us",
    "subtitle": "Invismile' Aesthetic Oral and Dental Health Polyclinic",
    "description": "Our Oral and Dental Health Polyclinic, which was opened in 2020 by Invi Smile 'Estetik Dental ve Medikal Ltd., with the joint venture of Prof. Dr. Tancan UYSAL and Assistant Prof. Dr. Banu UYSAL, started to serve in Alsancak.",
    "icerik1": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti by Prof. Dr. Tancan UYSAL and Asst. Assoc. Dr. Our Oral and Dental Health Polyclinic, which was opened in 2020 with the joint venture of Banu UYSAL, has started to serve in Bayraklı.",
    "icerik2": "With its academic staff consisting of all dentistry specialties, 9 fully comprehensive dental units and 500 square meters of modern working area, it provides services in national and international fields. Our clinic offers 3D intraoral scanning system, 3D printing, digital dentistry design production infrastructure and radiological examination facilities of dentistry (panoramic, cephalomeric, periapical x-ray) to our valuable patients. * Invismile Estetik Oral and Dental Health Polyclinic *; It provides services 6 days a week with its expert physician staff, advanced medical technology, fully equipped diagnosis and treatment units, single-storey modern architecture focused on patient safety and a structure designed with all the needs of its guests in mind."
  },
  "de": {
    "title": "Über uns",
    "subtitle": "Invismile 'Aesthetic Oral and Dental Health Polyclinic",
    "description": "Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 von Invi Smile 'Estetik Dental ve Medikal Ltd. mit dem Joint Venture von Prof. Dr. Tancan UYSAL und dem Assistenten Prof. Dr. Banu UYSAL eröffnet wurde, hat ihren Dienst in Alsancak aufgenommen.",
    "icerik1": "Invismile Estetik Dental ve Medikal Sanayi ve Ticaret Ltd. Şti von Prof. DR. Tancan UYSAL und Asst. Assoc. DR. Unsere Poliklinik für Mund- und Zahngesundheit, die 2020 mit dem Joint Venture von Banu UYSAL eröffnet wurde, hat ihren Dienst in Bayraklı aufgenommen.",
    "icerik2": "Mit seinem akademischen Personal, das aus allen Fachgebieten der Zahnmedizin, 9 umfassenden zahnärztlichen Einheiten und 500 Quadratmetern modernem Arbeitsbereich besteht, bietet das Unternehmen Dienstleistungen im nationalen und internationalen Bereich an. Unsere Klinik bietet unseren wertvollen Patienten ein intraorales 3D-Scansystem, 3D-Druck, eine Produktionsinfrastruktur für das Design digitaler Zahnheilkunde und radiologische Untersuchungseinrichtungen (Panorama-, Cephalomer-, periapikale Röntgenaufnahme) der Zahnmedizin. * Invismile Estetik Poliklinik für Mund- und Zahngesundheit *; Es bietet 6 Tage die Woche Dienstleistungen mit Fachpersonal, fortschrittlicher Medizintechnik, voll ausgestatteten Diagnose- und Behandlungseinheiten, einer einstöckigen modernen Architektur, die auf Patientensicherheit ausgerichtet ist, und einer Struktur, die auf die Bedürfnisse seiner Gäste zugeschnitten ist."
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
                <img src="/image/digital-dentistry.png" width="100%" :alt="$t('title')">
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
                  <p>{{ $t('icerik1') }}</p>
                  <br>
                  <p>{{ $t('icerik2') }}</p>
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
