<i18n>
{
  "tr": {
    "dental-implant": "Dental İmplant",
    "check-up": "Check-Up",
    "kanal-tedavisi": "Kanal Tedavisi (Endodonti)",
    "lazer-estetik": "Lazerle Estetik Dolgu",
    "gulus-tasarimi": "Dijital Gülüş Tasarımı",
    "seffaf-plak": "Şeffaf Plaklarla Ortodonti",
    "estetik-lamina": "Estetik Lamina Veneerler",
    "zikronyum": "Zirkonyum Porselen Kaplama",
    "dis-sikma": "Diş Sıkma Tedavisi",
    "cocuk-dis": "Çocuk Diş Hekimliği",
    "radyoloji": "Radyoloji",
    "cene-eklemi":  "Çene Eklemi (TME) Tedavisi",
    "dis-beyazlatma": "Diş Beyazlatma",
    "diseti":  "Dişeti Tedavileri",
    "gorunmez-teller": "Görünmez Tellerle Ortodonti"
  },
  "en": {
    "dental-implant": "Dental Implant",
    "check-up": "Check-Up",
    "kanal-tedavisi": "Root Canal Treatment (Endodontics)",
    "lazer-estetik": "Laser Aesthetic Filling",
    "gulus-tasarimi": "Digital Smile Design",
    "seffaf-plak": "Orth. with Trans. Plaques",
    "estetik-lamina": "Aesthetic Lamina Veneers",
    "zikronyum": "Zirconium Porcelain Coating",
    "dis-sikma": "Tooth Tightening Treatment",
    "cocuk-dis": "Children's Dentistry",
    "radyoloji": "Radiology",
    "cene-eklemi":  "Jaw Joint (TMJ) Treatment",
    "dis-beyazlatma": "Teeth whitening",
    "diseti":  "Gum Treatments",
    "gorunmez-teller": "Orth. with Invisible Wires"
  },
  "de": {
    "dental-implant": "Zahnimplantat",
    "check-up": "Check-Up",
    "kanal-tedavisi": "Wurzelkanalbehandlung (Endodontie)",
    "lazer-estetik": "Laserästhetische Füllung",
    "gulus-tasarimi": "Digital Smile Design",
    "seffaf-plak": "KFO mit Transparent-Plaketten",
    "estetik-lamina": "Ästhetische Lamina-Furniere",
    "zikronyum": "Zirkonium-Porzellanbeschichtung",
    "dis-sikma": "Zahnstraffungsbehandlung",
    "cocuk-dis": "Kinderzahnheilkunde",
    "radyoloji": "Radiologie",
    "cene-eklemi":  "Kiefergelenkbehandlung",
    "dis-beyazlatma": "Zahnaufhellung",
    "diseti":  "Zahnfleischbehandlungen",
    "gorunmez-teller": "Kiefer. mit unsich. Drähten"
  }
}
</i18n>
<template>
  <div class="widget">
    <ul id="services-list">
      <li>
        <nuxt-link :to="localePath('dental-implant' )">{{ $t('dental-implant')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('check-up')">{{ $t('check-up')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('kanal-tedavisi-endodonti')">{{ $t('kanal-tedavisi')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('lazerle-estetik-dolgu')">{{ $t('lazer-estetik')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('dijital-gulus-tasarimi')">{{ $t('gulus-tasarimi')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('seffaf-plaklarla-ortodonti')">{{ $t('seffaf-plak')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('estetik-lamina-veneerler')">{{ $t('estetik-lamina')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('zirkonyum-porselen-kaplama')">{{ $t('zikronyum')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('dis-sikma-tedavisi')">{{ $t('dis-sikma')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('cocuk-dis-hekimligi')">{{ $t('cocuk-dis')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('radyoloji')">{{ $t('radyoloji')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('cene-eklemi-tme-tedavisi')">{{ $t('cene-eklemi')}}i</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('dis-beyazlatma')">{{ $t('dis-beyazlatma')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('diseti-tedavileri')">{{ $t('diseti')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('gorunmez-tellerle-ortodonti')">{{ $t('gorunmez-teller')}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tedavilerrightwidget'
}
</script>

<style scoped>

</style>
