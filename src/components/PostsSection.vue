<template>
	<section :id="data.section_id" class="block posts-block outer" v-bind:class="'bg-'+data.bg">
		<div class="block-header inner-small">
	    <h2 class="block-title" v-html="data.title" />
	    <p class="block-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
	  </div>
	  <div class="inner">
	    <div class="post-feed">
	      <article class="post post-card" v-for="post in posts.slice(0, 3)">
	        <div class="post-card-inside">
	          <a class="post-card-thumbnail" v-if="post.node.thumb_img_path" :href="post.node.path">
		          <g-image class="thumbnail" :src="post.node.thumb_img_path" :alt="post.node.title" />
		        </a>
		        <div class="post-card-content">
	            <header class="post-header">
	              <h3 class="post-title">
	              	<a :href="post.node.path" rel="bookmark">{{ post.node.title }}</a>
	              </h3>
	            </header>
	            <div class="post-excerpt">
	              <p v-html="post.node.excerpt" />
	            </div>
	            <footer class="post-meta">
	              <time class="published">{{ post.node.date }}</time>
	            </footer>
	          </div>
	        </div>
	      </article>
	    </div>
	  </div>
	</section>
</template>

<script>
	export default {
		name: 'PostsSection',
		props: { 
			data: Object,
			posts: Array, 
		}
	}
</script>