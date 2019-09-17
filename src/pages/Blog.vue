<template>
  <Layout>
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 class="post-header" v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Blog ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          path
        }
      }
    }
  }
</page-query>