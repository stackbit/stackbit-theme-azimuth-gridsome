<template>
	<section :id="data.section_id" class="block faq-block outer" v-bind:class="'bg-'+data.bg">
		<div class="inner-small">
	    <div class="block-header">
	      <h2 class="block-title" v-html="data.title" />
	      <p class="block-subtitle" v-if="data.subtitle" v-html="data.subtitle" />
	    </div>
	    <dl class="faq-accordion" v-if="data.faqitems">
	    	<template v-for="faqitem in data.faqitems">
		      <dt class="accordion-header" >
		        <button class="accordion-trigger">
		          <div class="accordion-title">{{ faqitem.question }}</div>
		          <div class="accordion-icon icon-plus"></div>
		        </button>
		      </dt>
		      <dd class="accordion-panel">
		        <div class="accordion-content">
		         	<p v-html="faqitem.answer" />
		        </div>
		      </dd>
		    </template>
	    </dl>
	  </div>
	</section>
</template>

<script>
	export default {
		name: 'FaqSection',
		props: { 
			data: Object
		}
	}
</script>