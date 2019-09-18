<template>
	<section :id="data.section_id" class="block reviews-block outer" v-bind:class="'bg-'+data.bg">
  	<div class="block-header inner-small">
	    <h2 class="block-title" v-html="data.title" />
	    <p class="block-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
	  </div>
	  <div class="inner" v-if="data.reviews">
	    <div class="grid">
	      <blockquote class="cell review" v-for=" review in data.reviews">
	        <div class="review-inside">
	          <p class="review-text" v-html="review.content" />
	          <footer class="review-footer">
	            <img class="review-avatar" v-if="review.avatar" :src="review.avatar" alt="Author avatar">
	            <cite class="review-author" v-html="review.author" />
	          </footer>
	        </div>
	      </blockquote>
	    </div>
	  </div>
	</section>
</template>

<script>
	export default {
		name: 'ReviewsSection',
		props: { 
			data: Object 
		}
	}
</script>