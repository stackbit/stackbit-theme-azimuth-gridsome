<template>
  <Layout>
    <div v-if="homeData.heroSection.enable">
      <HeroSection :data="homeData.heroSection"/>
    </div>
  </Layout>
</template>

<script>
  import HeroSection from "../components/HeroSection"

  export default {
    metaInfo: {
      title: 'Hello, world!'
    },
    computed: {
      homeData() {
        return this.$static.homeData.edges[0].node;
      },
    },
    components: { 
      HeroSection
    }
  }
</script>


<static-query>
  query homeData {
    homeData: allhomeData {
      edges {
        node {
          title
          heroSection {
            enable
            section_id
            image
            title
            content
            actions {
              label
              url
            }
          }
        }
      }
    }
  }
</static-query>
