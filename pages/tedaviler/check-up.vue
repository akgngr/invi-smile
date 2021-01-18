<i18n>
{
  "tr": {
    "title": "Check-up",
    "description": "Dişlerinin sağlıklı olduğunu düşünen ve sorun yaşamayan kişiler de dahil olmak üzere yaş ve cinsiyet fark etmeksizin her bireyin, yılda en az 1 kez, ideal olarak yılda 2 kez dişlerine check-up yaptırması oldukça önemlidir.",
    "content1": "<p>Dişlerinin sağlıklı olduğunu düşünen ve sorun yaşamayan kişiler de dahil olmak üzere yaş ve cinsiyet fark etmeksizin her bireyin, yılda en az 1 kez, ideal olarak yılda 2 kez dişlerine check-up yaptırması oldukça önemlidir.</p><p>Bazı ciddi sistemik hastalıklar ağız içinde çeşitli şekillerde belirti vermektedir.</p><p>Diş muayenesi sırasında, vitamin eksikliği ve demir eksikliği, kemik erimesi (osteoporoz), bazen de şeker hastalığı (diabet), ağız kanseri, aids (HIV) gibi ciddi hastalıklar bir diş muayenesi sırasında teşhis edilebilir.</p>",
    "accord1title": "Check up sırasında hangi muayene yöntemlerini ve hangi teşhis araçlarını kullanıyoruz?",
    "accord1": "<ul><li>Yumuşak doku muayenesi yapılır. Yanaklar, dişeti, dil, yumuşak damak kontrol edilir. Kırmızılık, şişlik, 15 gün ya da daha uzun zamandır devam eden iyileşmeyen yaralar tespit edilir.</li><li>Eski protezler, dolgular kontrol edilir.</li><li>Çene eklemi muayenesi yapılır. Ağız açma kapama fonksiyonu incelenir, ilgili kaslar elle muayene edilir.</li><li>Özellikle dişeti iltihabı, dişeti çekilmeleri, protez vurukları, yüksek dolgular, kırık dişler tespit edilir.</li><li>Dişleriniz ve çevre dokuların muayenesi için kullandığımız en önemli teşhis aracı “panoramik röntgen” dir.</li></ul>"
  },
  "en": {
    "title": "Check-up",
    "description": "It is very important for every individual, regardless of age and gender, to have their teeth check-up at least once a year, ideally twice a year, including those who think their teeth are healthy and have no problems.",
    "content1": "<p> It is very important for every individual, regardless of age and gender, to have their teeth check-up at least once a year, ideally twice a year, including those who think their teeth are healthy and have no problems. </p> <p> Some serious systemic diseases cause symptoms in the mouth in various ways. </p> <p> During dental examination, serious diseases such as vitamin deficiency and iron deficiency, osteoporosis, diabetes, oral cancer, and AIDS (HIV). diseases can be diagnosed during a dental examination. </p>",
    "accord1title": "Which examination methods and diagnostic tools do we use during check-up?",
    "accord1": "<p> Implant; They are artificial tooth roots that are placed on the jawbone and applied to hold the prostheses to be attached. These artificial tooth roots; They are made to replace missing teeth and can be used for a long time. Implants placed in the jawbone by specialist physicians in a sterile environment with a small surgical procedure, attach to the jaw bone within about 2-3 months and these artificial tooth roots are now in a state to carry the prostheses. But; For implant application; It is very important that the bone structure is appropriate and the gums are healthy. In cases where these conditions do not support implants; It is possible to make implants and achieve high success with additional bone surgery applications. </p> <p> The biggest advantage of implant application; It is to have fixed teeth that are almost the same as the natural tooth, instead of the missing tooth or teeth that the person has lost. Use of implant teeth; It can be used for many years under suitable conditions and if it is made by experts. In this process, the mouth and dental care of the person also plays an important role. </p>"
  },
  "de": {
    "title": "Untersuchung",
    "description": "Unabhängig von Alter und Geschlecht ist es für jeden Menschen sehr wichtig, dass seine Zähne mindestens einmal im Jahr, idealerweise zweimal im Jahr, überprüft werden, einschließlich derer, die glauben, dass ihre Zähne gesund sind und keine Probleme haben.",
    "content1": "<p> Es ist sehr wichtig, dass jeder Einzelne, unabhängig von Alter und Geschlecht, seine Zähne mindestens einmal im Jahr, idealerweise zweimal im Jahr, überprüft, einschließlich derer, die glauben, dass seine Zähne gesund sind und keine Probleme haben. </ p> <p> Einige Schwere systemische Erkrankungen verursachen auf verschiedene Weise Symptome im Mund. </ p> <p> Während der zahnärztlichen Untersuchung treten Vitamin- und Eisenmangel, Osteoporose, manchmal Diabetes (Diabetes), Mundkrebs, AIDS (HIV) auf. Krankheiten können während einer zahnärztlichen Untersuchung diagnostiziert werden. </ p>",
    "accord1title": "Welche Untersuchungsmethoden und Diagnosewerkzeuge verwenden wir bei der Untersuchung?",
    "accord1": "<ul> <li> Eine Weichteiluntersuchung wird durchgeführt. Wangen, Zahnfleisch, Zunge, weicher Gaumen werden überprüft. Es werden Rötungen, Schwellungen und nicht heilende Wunden festgestellt, die 15 Tage oder länger andauern. </li> <li> Alte Prothesen und Füllungen werden überprüft. </li> <li> Eine Kiefergelenksuntersuchung wird durchgeführt. Die Funktion zum Öffnen und Schließen des Mundes wird untersucht, die relevanten Muskeln werden abgetastet. </li> <li> Insbesondere Gingivitis, Zahnfleischrezessionen, prothetische Stöße, hohe Füllungen und gebrochene Zähne werden erkannt. </li> <li> Zur Untersuchung Ihrer Zähne und des umgebenden Gewebes. Das wichtigste Diagnosewerkzeug, das wir verwenden, ist 'Panorama-Röntgen'. </li> </ ul>"
  }
}
</i18n>
<template>
  <div>
    <SocialHead :title="$t('title')" :description="$t('description')" />
    <Subheader :baslik="$t('title')" />
    <section class="services whitepage">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-12 onStep">
                <img alt="imgservices" class="img-responsive" src="/image/tedaviler/invismile-check-up.webp">
                <h2 v-html="$t('title')"></h2>
              </div>
              <div class="col-md-12" v-html="$t('content1')"></div>
              <div class="col-md-12">
      <AccordionLayout>
        <Accordion :title="$t('accord1title')" :content="$t('accord1')" />
      </AccordionLayout>
    </div>
            </div>
          </div>
          <div class="col-md-3 onStep">
              <Tedavilerrightwidget />

              <div class="widget">
                <div class="download-brochure">
                  <h3>
                    DOWNLOAD BROCHURE
                  </h3>

                  <div class="btn-download onStep" data-animation="fadeInRight" data-time="600">
                    <a class="link-class" href="#">DOWNLOAD NOW</a>
                  </div>
                </div>
              </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SocialHead from '@/components/SocialHead'
import Subheader from '@/components/subheader'
import Accordion from '~/components/tekrarlayan/accordion'
import AccordionLayout from '~/components/tekrarlayan/accorlayout'
import Tedavilerrightwidget from '~/components/tedavilerrightwidget'

export default {
  name: 'check-up',
  layout: "page",
  components: {
    SocialHead,
    Subheader,
    Accordion,
    AccordionLayout,
    Tedavilerrightwidget
  },
  nuxtI18n: {
    seo: true,
    paths: {
      tr: '/tedaviler/check-up',
      en: '/treatments/check-up',
      de: '/behandlungen/untersuchung'
    }
  }
}
</script>
