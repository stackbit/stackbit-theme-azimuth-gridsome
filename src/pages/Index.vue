<template>
  <Layout>
    <HeroSection v-if="homeData.heroSection.enable" :data="homeData.heroSection"/>
    <FeaturesSection v-if="homeData.featuresSection.enable" :data="homeData.featuresSection"/>
    <ReviewsSection v-if="homeData.reviewsSection.enable" :data="homeData.reviewsSection" />
    <CtaSection v-if="homeData.ctaSection.enable" :data="homeData.ctaSection" />
    <PostsSection v-if="homeData.postsSection.enable" :data="homeData.postsSection" :posts="$page.allBlogPost.edges" />
  </Layout>
</template>

<script>
  import HeroSection from "../components/HeroSection"
  import FeaturesSection from "../components/FeaturesSection"
  import ReviewsSection from "../components/ReviewsSection"
  import CtaSection from "../components/CtaSection"
  import PostsSection from "../components/PostsSection"

  export default {
    metaInfo: {
      title: 'Home - Stackbit Azimuth Theme'
    },
    computed: {
      homeData() {
        return this.$static.homeData.edges[0].node;
      },
    },
    components: { 
      HeroSection,
      FeaturesSection,
      ReviewsSection,
      CtaSection,
      PostsSection,
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
          featuresSection {
            enable
            section_id
            bg
            title
            subtitle
            featureslist {
              title
              image
              content
              actions {
                label
                url
              }
            }
          }
          reviewsSection {
            enable
            section_id
            bg
            title
            subtitle
            reviews {
              author
              avatar
              content
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
          postsSection {
            enable
            section_id
            bg
            title
          }
        }
      }
    }
  }
</static-query>

<page-query>
  query Home ($page: Int) {
    allBlogPost (
      page: $page,
      sort: [{ by: "date" }]
    ){
      edges {
        node {
          _id
          title
          subtitle
          excerpt
          thumb_img_path
          content_img_path
          date (format: "MMMM D, YYYY")
          path
        }
      }
    }
  }
</page-query>