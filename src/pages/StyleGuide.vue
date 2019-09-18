<template>
  <Layout>
    <BasicPage :data="data" />
  </Layout>
</template>

<script>
import BasicPage from "../components/BasicPage"
export default {
  metaInfo: {
    title: 'Style Guide - Stackbit Azimuth Theme'
  },
  computed: {
    data() {
      return this.$static.styleGuideData.edges[0].node;
    },
  },
  components: {
    BasicPage
  }
}
</script>

<static-query>
  query styleGuideData {
    styleGuideData: allstyleGuideData {
      edges {
        node {
        	title
        	subtitle
        	content
        }
      }
    }
  }
</static-query>