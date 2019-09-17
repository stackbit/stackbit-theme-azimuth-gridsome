<template>
	<section :id="data.section_id" class="block hero-block bg-accent outer">
	  <div class="inner">
	    <div class="grid">
	      <div class="cell block-preview" v-if="data.image">
	        <g-image :src="data.image" :alt="data.title" />
	      </div>
	      <div class="cell block-content">
	        <h2 class="block-title underline">{{ data.title }}</h2>
	        <div class="block-copy" >
	        	<p v-html="data.content" />
	        </div>
	        <p class="block-buttons" v-if="data.actions">
	          <a v-for="action in data.actions" :href="action.url" class="button white large">{{ action.label }}</a>
	        </p>
	      </div>
	    </div>
	  </div>
	</section>
</template>

<script>
	export default {
		name: 'HeroSection',
		props: { 
			data: Object 
		} 
	}
</script>