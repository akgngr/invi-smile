<template>
  <div>
    <Loader />
    <Nuxt />
  </div>
</template>

<script>
import Loader from '~/components/loader'

export default {
  components: {
    Loader
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || '/css/themify-icons.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/fullscreen.css',
        media: 'screen'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/rev-settings.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/on3step-style.css'
      },
      {
        rel: 'stylesheet',
        href: process.env.HOST || 'css/queries-on3step.css'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
      },
      {
        src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
      },
      {
        ssr: true,
        src: 'js/on3step.js'
      }
    ]
  }
}
</script>
