// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "~/assets/sass/main.scss"

export default function (Vue, { router, head, isClient }) {
	head.script.push({
    src: 'js/plugins.js',
    body: true,
    async: true,
  });

  head.script.push({
    src: 'js/animation.js',
    body: true,
    async: true,
  });

  
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

