<template>
  <Layout>
    <div class="outer">
      <div class="inner">
        <div class="post-feed">
          <article class="post post-card" v-for="blog in blogList">
            <div class="post-card-inside">
              <a class="post-card-thumbnail" v-if="blog.node.thumb_img_path" :href="blog.node.path">
                <g-image class="thumbnail" :src="blog.node.thumb_img_path" :alt="blog.node.title" />
              </a>
              <div class="post-card-content">
                <header class="post-header">
                  <h2 class="post-title"><a :href="blog.node.path" rel="bookmark">{{ blog.node.title }}</a></h2>
                </header>
                <div class="post-excerpt">
                  <p>{{blog.node.excerpt}}</p>
                </div>
                <footer class="post-meta">
                  <time class="published">{{ blog.node.date }}</time>
                </footer>
              </div>
            </div>
          </article>
        </div>
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
      blogList() {
        return this.$page.allBlogPost.edges;
      },
    }
  }
</script>

<page-query>
  query Blog ($page: Int) {
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