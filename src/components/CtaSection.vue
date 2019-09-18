<template>
	<section :id="data.section_id" class="block cta-block bg-accent outer" >
  	<div class="inner-large">
	    <div class="grid">
	      <div class="cell block-content">
	        <h2 class="block-title">{{ data.title }}</h2>
	        <p class="block-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
	      </div>
	      <div class="cell block-buttons" v-if="data.actions">
	        <a v-for="action in data.actions" :href="action.url" class="button white large">{{ action.label }}</a>
	      </div>
	    </div>
	  </div>
	</section>
</template>

<script>
	export default {
		name: 'CtaSection',
		props: { 
			data: Object 
		}
	}
</script>