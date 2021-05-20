<i18n>
{
  "tr": {
    "description": "1991 yılında Nevşehir’de doğan Bahar Sayın ilkokul, ortaokul ve lise eğitimini Eskişehir’de bitirdi. Lisans eğitimini 2009 yılında Hacettepe Üniversitesi Diş Hekimliği Fakültesi’nde lisans eğitimine başladı ve eğitimini 2014 yılında onur öğrencisi olarak bitirdi. ",
    "content": "<p>2015 yılında Erciyes Üniversitesi Diş Hekimliği Fakültesi Protetik Diş Tedavisi bölümünde uzmanlık eğitimine başladı. 2019 yılında “Estetik Bölgede Yapılan İmplant Tedavilerinde Farklı Dişeti Şekillendirme Materyalleri Kullanımının Değerlendirilmesi: Klinik ve Biyokimyasal Çalışma” konu başlıklı teziyle uzmanlık eğitimini tamamladı. </p><blockquote>2019-2020 yıllarında Eskişehir’de özel bir ağız ve diş sağlığı polikliniğinde mesleki hayatına devam etti. 2020 yılında Kütahya Sağlık Bilimleri Üniversitesi Diş Hekimliği Fakültesi Protetik Diş Tedavisi Anabilim dalına yardımcı doçent olarak atandı. Protetik diş tedavisi alanında dersler verdi ve protez uzmanı olarak hasta tedavilerinde rol aldı. </blockquote><p>Bahar Sayın şimdiki mesleki hayatına Özel Smile İzmir Ağız ve Diş Sağlığı Polikliniğinde protez uzmanı olarak devam etmektedir. Klinik ilgi alanlarını dijital diş hekimliği, implant tedavileri, gülüş tasarımı, zirkon kaplama, porselen lamina ve full porselen kaplamalar oluşturmaktadır. Türk Diş Hekimleri Birliği, Osseointegrasyon Derneği ve Uluslararası Prostodontistler Birliği üyeliği mevcuttur.</p>",
    "bahar-sayin": "Yrd. Doç. Dr. Bahar SAYIN",
    "bahar-sayin-baslik": "<span class='color'>Yrd. Doç. Dr.</span> Bahar SAYIN"
  },
  "en": {
    "description": "Bahar Sayın, born in Nevşehir in 1991, completed her primary, secondary and high school education in Eskişehir. He started his undergraduate education at Hacettepe University Faculty of Dentistry in 2009 and completed his education as an honor student in 2014.",
    "content": "<p> In 2015, she started her specialty education in the Department of Prosthodontics, Faculty of Dentistry, Erciyes University. In 2019, he completed his specialty training with his thesis titled \"Evaluation of the Use of Different Gingival Shaping Materials in Implant Treatments Performed in the Aesthetic Region: Clinical and Biochemical Study\". </ p> <blockquote> She continued her professional life in a private oral and dental health polyclinic in Eskişehir in 2019-2020. She was appointed as an assistant professor to Kütahya Health Sciences University Faculty of Dentistry Department of Prosthodontics in 2020. She gave lectures in the field of prosthetic dentistry and took part in patient treatments as a prosthetics specialist. </blockquote> <p> Bahar Sayın continues her current professional life as a prosthesis specialist in Private Smile İzmir Oral and Dental Health Polyclinic. His clinical interests are digital dentistry, implant treatments, smile design, zircon veneers, porcelain lamina and full porcelain veneers. He is a member of the Turkish Dental Association, Osseointegration Association and International Prostodontists Association. </p>",
    "bahar-sayin": "Assist. Prf. Dr. Bahar SAYIN",
    "bahar-sayin-baslik": "<span class='color'>Assist. Prf. Dr.</span> Bahar SAYIN"
  },
  "de": {
    "description": "Bahar Sayın, 1991 in Nevşehir geboren, absolvierte ihre Grund-, Sekundar- und Highschool-Ausbildung in Eskişehir. Er begann seine Grundausbildung an der Fakultät für Zahnmedizin der Hacettepe University im Jahr 2009 und schloss seine Ausbildung als Ehrenstudent im Jahr 2014 ab.",
    "content": "<p> 2015 begann sie ihre Fachausbildung an der Fakultät für Zahnmedizin der Universität Erciyes, Abteilung für Prothetik. 2019 schloss er seine Fachausbildung mit seiner Dissertation mit dem Titel 'Bewertung der Verwendung verschiedener Zahnfleischformungsmaterialien bei Implantatbehandlungen im ästhetischen Bereich: Klinische und biochemische Studie' ab. </p> <blockquote> In den Jahren 2019-2020 setzte sie ihr Berufsleben in einer privaten Poliklinik für Mund- und Zahngesundheit in Eskişehir fort. Im Jahr 2020 wurde er als Assistenzprofessor an die Abteilung für Prothetik der Fakultät für Zahnmedizin der Kütahya Health Sciences University berufen. Er hielt Vorträge auf dem Gebiet der prothetischen Zahnbehandlung und nahm als Prothesenspezialist an Patientenbehandlungen teil. </blockquote> <p> Bahar Sayın setzt ihr derzeitiges Berufsleben als Prothesenspezialistin in der Poliklinik für Mund- und Zahngesundheit von Private Smile İzmir fort. Seine klinischen Interessen sind digitale Zahnmedizin, Implantatbehandlungen, Lächeln-Design, Zirkonfurniere, Porzellanschicht und Vollporzellanveneers. Er ist Mitglied der Turkish Dental Association, der Osseointegration Association und der International Union of Prostodontists</p>",
    "bahar-sayin": "Helfen Prf. Dr. Bahar SAYIN",
    "bahar-sayin-baslik": "<span class='color'>Helfen Prf. Dr.</span> Bahar SAYIN"
  }
}
</i18n>
<template>
  <div>
    <SocialHead :title="$t('bahar-sayin')" :description="$t('description')" />
    <Subheader :baslik="$t('bahar-sayin')" />
    <!-- services -->
    <section class="services whitepage">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-12 onStep">
                <img alt="imgservices" class="img-responsive" src="/image/doktor/profil/bahar-sayin.jpg">
                <h2 v-html="$t('bahar-sayin-baslik')"></h2>
                <p><em>{{ $t('description') }}</em></p>
              </div>
              <div class="col-md-12" v-html="$t('content')"></div>
            </div>
          </div>

          <div class="col-md-3 onStep">
            <DoktorRightWidget />
          </div>
        </div>
      </div>
    </section>
    <!-- services end -->
  </div>
</template>

<script>
import SocialHead from '@/components/SocialHead'
import Subheader from '@/components/subheader'
import DoktorRightWidget from '~/components/doktorrightwidget'

export default {
  name: 'bahar-sayin',
  layout: "page",
  transition: 'fade',
  components: {
    DoktorRightWidget,
    SocialHead,
    Subheader
  },
  nuxtI18n: {
    seo: true,
    paths: {
      en: '/bahar-sayin',
      tr: '/bahar-sayin',
      de: '/bahar-sayin'
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

<style scoped>

</style>
