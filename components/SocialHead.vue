<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: '/image/share.png'
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://smileizmir.com'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'description',
          property: 'description',
          content: this.description
        }
      ],
      title: this.title + " | Smile İzmir",
      description: this.description
    }
  }
}
</script>
