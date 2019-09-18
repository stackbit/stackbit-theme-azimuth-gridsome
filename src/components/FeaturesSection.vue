<template>
	<section :id="data.section_id" class="block features-block outer" v-bind:class="'bg-'+data.bg">
  	<div class="block-header inner-small">
	    <h2 class="block-title">{{ data.title }}</h2>
	    <p class="block-subtitle" v-if="data.subtitle">
	      {{ data.subtitle }}
	    </p>
	  </div>
	  <div class="inner" v-if="data.featureslist">
	    <div class="block-item" v-for="feature in data.featureslist">
	      <div class="grid">
	        <div class="cell block-preview" v-if="feature.image">
	          <g-image :src="feature.image" :alt="feature.title" />
	        </div>
	        <div class="cell block-content">
	          <h3 class="block-title underline">{{ feature.title }}</h3>
	          <div class="block-copy">
	          	<p v-html="feature.content" />
	          </div>
	          <CtaButton v-if="feature.actions" :data="feature.actions" />
	        </div>
	      </div>
	    </div>
    </div>
	</section>
</template>

<script>
	import CtaButton from "./CtaButton"
	export default {
		name: 'FeaturesSection',
		props: { 
			data: Object 
		},
		components: {
			CtaButton
		}
	}
</script>