<i18n>
{
  "tr": {
    "title": "İletişim",
    "subtitle": "smileizmir' Estetik Ağız ve Diş Sağlığı Polikliniği İletişim",
    "description": "Bizimle iletişime geçin, aklınıza takılan soruları sorun ve cevabınızı alın.",
    "adresimiz": "Adalet Mah. Şehit Polis Fethi Sekin Cad. No 4/B Bayraklı/İzmir",
    "isim": "İsminiz",
    "eposta": "E-Posta",
    "mesaj": "Mesajınız",
    "gonder": "Gönder",
    "iletisim-bilgileri": "İletişim Bilgilerimiz",
    "adres": "Adresiniz",
    "telefon": "Telefonunuz",
    "mobil": "Cep"
  },
  "en": {
    "title": "Contact Us",
    "subtitle": "smileizmir' Aesthetic Oral and Dental Health Polyclinic Contact",
    "description": "Contact us, ask any questions you have and get your answers.",
    "adresimiz": "Adalet Mah. Şehit Polis Fethi Sekin Cad. No 4/B Bayraklı/İzmir",
    "isim": "Your Name",
    "eposta": "E-Mail",
    "mesaj": "Your Message",
    "gonder": "Send",
    "iletisim-bilgileri": "Our Contact Information",
    "adres": "Address",
    "telefon": "Phone",
    "mobil": "Mobile"
  },
  "de": {
    "title": "Kontakt uns",
    "subtitle": "smileizmir 'Aesthetic Oral and Dental Health Polyclinic, Kontakt",
    "description": "Kontaktieren Sie uns, stellen Sie Ihre Fragen und erhalten Sie Ihre Antworten.",
    "adresimiz": "Adalet Mah. Şehit Polis Fethi Sekin Cad. No 4/B Bayraklı/İzmir",
    "isim": "Dein Name",
    "eposta": "E-Mail",
    "mesaj": "Botschaft",
    "gonder": "Senden",
    "iletisim-bilgileri": "Kontakt Informationen",
    "adres": "Adresse",
    "telefon": "Telefon",
    "mobil": "Mobile"
  }
}
</i18n>
<template>
<div>
  <SocialHead :title="$t('title')" :description="$t('description')" />
  <Subheader :baslik="$t('title')" />

  <!-- map -->
  <div class="onStep" data-animation="fadeIn" data-time="300" id="map-1">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200123.37955523265!2d26.902969988194908!3d38.396918278939005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963738c1b4fbf%3A0x106ab0d78fd816f0!2sSmile%20%C4%B0zmir!5e0!3m2!1str!2str!4v1615820953300!5m2!1str!2str"
      width="100%"
      height="500"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      loading="lazy"
      tabindex="0"></iframe>
  </div>
  <!-- map end -->
  <!-- section contact -->
  <section aria-label="contact" class="whitepage">
    <div class="container">
      <div class="row">

        <div class="col-md-8">

          <form id="form-contact1" class="iletisim" @submit.prevent="mesajGonder">
            <div class="form-group user-name">
              <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
              <input
                v-model="name"
                type="text"
                class="form-control"
                required=""
                id="name-contact-1"
                :placeholder="$t('isim')">
            </div>

            <div class="form-group user-email">
              <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
              <input
                v-model="email"
                type="email"
                class="form-control"
                required=""
                id="email-contact"
                :placeholder="$t('eposta')">
            </div>

            <div class="form-group user-message">
              <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
              <textarea
                v-model="mesaj"
                class="form-control"
                required=""
                id="message-contact"
                :placeholder="$t('mesaj')">
              </textarea>
            </div>
            <button type="submit" id="send-contact-1" class="btn-contact">{{ $t('gonder') }}</button>
          </form>
        </div>
        <!-- address -->
        <div class="col-md-3 col-md-offset-1">
          <h3 class="heading-cont">{{ $t('iletisim-bilgileri') }}</h3>
          <address class="cont-1">
            <span>{{ $t('adresimiz') }}</span>
            <span><strong>{{ $t('telefon') }}:</strong> <a href="tel:+902323454141"> (+90)2323454141</a></span>
            <span><strong>{{ $t('eposta') }}:</strong><a href="mailto:info@smileizmir.com"> info@smileizmir.com</a></span>
            <span><strong>{{ $t('mobil') }}:</strong> <a href="tel:+905539355141"> +905539355141</a></span>
            <span><strong>Whatsapp:</strong> <a href="https://wa.me/905539355141"> +905539355141</a></span>
            <span><strong>Telegram:</strong> <a href="https://t.me/smileizmir"> @smileizmir</a></span>
          </address>
        </div>
        <!-- address end -->
      </div>
    </div>
  </section>
  <!-- section contact end -->
</div>
</template>

<script>
import SocialHead from '~/components/SocialHead'
import Subheader from '~/components/subheader'

export default {
  name: 'iletisim',
  components: { SocialHead, Subheader },
  data() {
    return {
      name: "",
      email: "",
      mesaj: ""
    }
  },
  methods: {
    mesajGonder() {
      this.$axios.post('https://v1.nocodeapi.com/akgngr/telegram/GcAkldTGZcwOqGdY', {
        isim: this.name,
        email: this.email,
        mesaj: this.mesaj
      }).then(() => {
        alert("Mesajınız Başarılı bir şeilde gönderildi.")
        this.$router.push("/")
      }).catch((error) => {
        alert("Mesajınız gönderilirken bir hata ile karşılaşıldı.", error)
      })
    }
  },
  nuxtI18n: {
    seo: true,
    paths: {
      en: '/contact-us',
      tr: '/iletisim',
      de: '/kontakt-uns'
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
.iletisim .glyphicon:before{
  position: absolute;
  top: 30px;
  left: 13px;
  color: #dadada;
}
address.cont-1 span{
  display: flex;
  justify-content: space-between;
}
</style>
