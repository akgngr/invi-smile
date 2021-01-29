<i18n>
{
  "tr": {
    "isim": "Adınız Soyadınız",
    "telefon": "Telefon Numaranız",
    "tarih": "Randevu Tarihi",
    "kvkk": "KVKK ",
    "buton": "Gönder",
    "help": "Belirttiğiniz tarihte tarafınıza randevu oluşturulup bilgilendirileceksiniz.",
    "mesaj": "Randevunuz Başarılı bir şeilde alındı. Size en kısa zamanda dönüş yapacağız."
  },
  "en": {
    "isim": "Name Surname",
    "telefon": "Phone Number",
    "tarih": "Date",
    "kvkk": "KVKK",
    "buton": "Send",
    "help": "You will be informed by creating an appointment on the date you specified."
  },
  "de": {
    "isim": "Vorname Nachname",
    "telefon": "Telefonnummer",
    "date": "Datum",
    "kvkk": "KVKK",
    "buton": "Senden",
    "help": "Sie werden informiert, indem Sie einen Termin an dem von Ihnen angegebenen Datum erstellen."
  }
}
</i18n>
<template>
  <div>
    <!-- Subscribe start -->
    <div class="modal white-popup-block animbounceInDown" id="subwrap" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div>
          <button type="button" class="mfp-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <div class="modal-body">
            <form id="subscribe" method="post" name="subscribe" @submit.prevent="randevuGonder">

              <div class="form-group">
                <label for="exampleInputEmail1">{{ $t('isim') }}</label>
                <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" :placeholder="$t('isim')">
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">{{ $t('telefon') }}</label>
                <input v-model="telefon" type="text" class="form-control" id="exampleInputPassword1" :placeholder="$t('telefon')">
              </div>

              <div class="form-group">
                <label for="exampleInputFile">{{ $t('tarih') }}</label>
                <input v-model="tarih" class="date-input" type="date" id="exampleInputFile">
                <p class="help-block">{{ $t('help') }}</p>
              </div>

              <div class="checkbox">
                <label>
                  <input type="checkbox"> {{ $t('kvkk') }}
                </label>
              </div>

              <button id="submit-2" class="btn-form" type="submit">{{ $t('buton') }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Subscribe end -->
  </div>
</template>

<script>
export default {
  name: 'subscribe',
  data() {
    return {
      name: "",
      telefon: "",
      tarih: ""
    }
  },
  methods: {
    randevuGonder() {
      this.$axios.post('https://v1.nocodeapi.com/akgngr/telegram/mAinhMfmodLMguQE', {
        isim: this.name,
        telefon: this.telefon,
        tarih: this.tarih
      }).then(() => {
        alert("$('mesaj')")
        this.$router.push("/")
      }).catch((error) => {
        alert("Randevu kaydı oluşturulurken bir hata ile karşılaşıldı. Lütfen daha sonra tekrar deneyin.", error)
        this.$router.push("/")
      })
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .modal-dialog {
    width: 480px;
    margin: 30px auto;
  }
}
#subwrap {
  position: fixed;
  top: 100px;
  height: 80vh;
  padding: 0;
}
.date-input {
  width: 100%;
  height: 53px;
  padding: 10px 20px 6px 30px;
  color: #333;
  font-size: 9pt;
  font-weight: 400;
}
.help-block {
  text-align: left;
  padding-top: 10px;
}
.checkbox {
  text-align: left;
}
</style>
