<template>
  <div id="page" class="site">
    <Header />
    <main id="content" class="site-content">
      <slot />
    </main>
    <Footer />
  </div>
 
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
