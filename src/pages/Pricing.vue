<template>
  <Layout>
    <PricingSection v-if="pricingData.pricingSection.enable" :data="pricingData.pricingSection" />
    <FaqSection v-if="pricingData.faqSection.enable" :data="pricingData.faqSection" />
  </Layout>
</template>

<script>
  import PricingSection from "../components/PricingSection"
  import FaqSection from "../components/FaqSection"

  export default {
    metaInfo: {
      title: 'Features - Stackbit Azimuth Theme'
    },
    computed: {
      pricingData() {
        return this.$static.pricingData.edges[0].node;
      },
    },
    components: { 
      PricingSection,
      FaqSection,
    }
  }
</script>

<static-query>
  query pricingData {
    pricingData: allpricingData {
      edges {
        node {
          title
          pricingSection {
            enable
            section_id
            bg
            title
            subtitle
            pricingplans {
              title
              price
              details
              highlight
              actions {
                label
                url
              }
            }
          }
          faqSection {
            enable
            section_id
            bg
            title
            subtitle
            faqitems {
              question
              answer
            }
          }
        }
      }
    }
  }
</static-query>