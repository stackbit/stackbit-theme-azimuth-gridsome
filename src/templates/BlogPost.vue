<template>
  <Layout>
    <div class="outer">
      <div class="inner-medium">
        <article class="post post-full">
          <header class="post-header">
            <h1 class="post-title">{{ data.title }}</h1>
          </header>
          <div class="post-thumbnail" v-if="data.content_img_path">
            <g-image :src="'/'+data.content_img_path" :alt="data.title" />
          </div>
          <div class="post-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
          <div class="post-content">
            <p v-html="data.content" />
          </div>
          <footer class="post-meta">
            <time class="published">{{ data.date }}</time>
          </footer>
        </article>
      </div>
    </div>
  </Layout>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Blog - Stackbit Azimuth Theme'
    },
    computed: {
      data() {
        return this.$page.blogPost;
      },
    }
  }
</script>
<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      subtitle
      date (format: "D MMMM, YYYY")
      content_img_path
      content
    }
  }
</page-query>