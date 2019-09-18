<template>
  <Layout>
    <ContentSection v-if="featuresData.featuresSection.enable" :data="featuresData.featuresSection" :content="featuresData.content"/>
    <CtaSection v-if="featuresData.ctaSection.enable" :data="featuresData.ctaSection" />
  </Layout>
</template>

<script>
  import ContentSection from "../components/ContentSection"
  import CtaSection from "../components/CtaSection"

  export default {
    metaInfo: {
      title: 'Features - Stackbit Azimuth Theme'
    },
    computed: {
      featuresData() {
        return this.$static.featuresData.edges[0].node;
      },
    },
    components: { 
      ContentSection,
      CtaSection,
    }
  }
</script>

<static-query>
  query featuresData {
    featuresData: allfeaturesData {
      edges {
        node {
          title
          content
          featuresSection {
            enable
            section_id
            bg
            image
            title
            actions {
              label
              url
            }
          }
          ctaSection {
            enable
            section_id
            title
            subtitle
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