<template>
	<section :id="data.section_id" class="block faq-block outer" v-bind:class="'bg-'+data.bg">
		<div class="inner-small">
	    <div class="block-header">
	      <h2 class="block-title" v-html="data.title" />
	      <p class="block-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
	    </div>
	    <div class="faq-accordion" v-if="data.faqitems">
	    	<template v-for="faqitem in data.faqitems">
		      <FaqDropDown :data="faqitem" />
		    </template>
	    </div>
	  </div>
	</section>
</template>

<script>
	import FaqDropDown from "./FaqDropDown"
	export default {
		name: 'FaqSection',
		props: { 
			data: Object
		},
		components: {
			FaqDropDown
		}
	}
</script>