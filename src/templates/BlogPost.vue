<template>
  <Layout>
    <br>
    <g-link to="/" >  &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{$page.blogPost.title}}</h1>
        <p class="blogPost-date"> {{ $page.blogPost.date}} 
      </p>
    </div>
    <div >
      <p v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>