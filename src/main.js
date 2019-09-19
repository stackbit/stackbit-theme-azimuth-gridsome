// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "~/assets/sass/main.scss"

export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}


