<template>
	<section id="data.section_id" class="block text-block outer" v-bind:class="'bg-'+data.bg">
  	<div class="inner">
	    <div class="grid">
	      <div class="cell block-preview" v-if="data.image">
	        <img :src="data.image" :alt="data.title" />
	      </div>
	      <div class="cell block-content">
	        <h2 class="block-title underline">{{ data.title }}</h2>
	        <div class="block-copy">
	        	<p v-html="content" />
	        </div>
	        <p class="block-buttons" v-if="data.actions">
	          <a v-for="action in data.actions" :href="action.url" class="button secondary">{{ action.label }}
	          </a>
	        </p>
	      </div>
	    </div>
	  </div>
	</section>
</template>

<script>
	import CtaButton from "./CtaButton"
	export default {
		name: 'ContentSection',
		props: { 
			data: Object,
			content: Object
		},
		components: {
			CtaButton
		}
	}
</script>