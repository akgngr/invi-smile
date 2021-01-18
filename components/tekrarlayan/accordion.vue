<template>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" :id="idd">
      <h4 class="panel-title">
        <a
          role="button"
          data-toggle="collapse"
          data-parent="#accordion"
          :href="hrefnumber"
          aria-expanded="false"
          aria-controls="collapseOne">
          {{ title }}
        </a>
      </h4>
    </div>
    <div
      :id="number"
      class="panel-collapse collapse"
      role="tabpanel"
      :aria-labelledby="idd">
      <div class="panel-body" v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: ['title', 'content'],
  data() {
    return {
      number: 0,
      hrefnumber: '#',
      idd: '#heading' + Math.floor(Math.random() * 3) + 5
    }
  },
  methods: {
    rndStr(len) {
      let text = ""
      const chars = "abcdefghijklmnopqrstuvwxyz"
      for (let i = 0; i < len; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      return text
    },
    rndNbr(len) {
      let text = ""
      const chars = "0123456789"
      for (let i = 0; i < len; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      return text
    }
  },
  mounted() {
    const message = this.rndStr(5)
    const number = this.rndNbr(3)
    this.idd = message
    this.number = number
    this.hrefnumber = '#' + number
  }
}
</script>
