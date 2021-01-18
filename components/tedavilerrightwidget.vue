<template>
  <div class="widget">
    <ul id="services-list">
      <li>
        <nuxt-link :to="localePath('/tedaviler/dental-implant')">Dental İmplant</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/check-up')">Check-Up</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/kanal-tedavisi-endodonti')">Kanal Tedavisi (Endodonti)</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/lazerle-estetik-dolgu')">Lazerle Estetik Dolgu</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/dijital-gulus-tasarimi')">Dijital Gülüş Tasarımı</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/seffaf-plaklarla-ortodonti')">Şeffaf Plaklarla Ortodonti</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/estetik-lamina-veneerler')">Estetik Lamina Veneerler</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/zirkonyum-porselen-kaplama')">Zirkonyum Porselen Kaplama</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/dis-sikma-tedavisi')">Diş Sıkma Tedavisi</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/cocuk-dis-hekimligi')">Çocuk Diş Hekimliği</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/radyoloji')">Radyoloji</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/cene-eklemi-tme-tedavisi')">Çene Eklemi (TME) Tedavisi</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/dis-beyazlatma')">Diş Beyazlatma</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/diseti-tedavileri')">Dişeti Tedavileri</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/tedaviler/gorunmez-tellerle-ortodonti')">Görünmez Tellerle Ortodonti</nuxt-link>
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
