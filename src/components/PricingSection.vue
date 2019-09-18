<template>
	<section id="data.section_id" class="block pricing-block outer" v-bind:class="'bg-'+data.bg">
		<div class="block-header inner-small">
	    <h2 class="block-title">{{ data.title }}</h2>
	    <p class="block-subtitle" v-if="data.subtitle">
	      {{ data.subtitle }}
	    </p>
	  </div>
	  <div class="inner" v-if="data.pricingplans">
	    <div class="grid">
	    	<div v-for="plan in data.pricingplans" class="cell plan" >
		      <div v-if="plan.highlight" class="cell plan highlight">
		        <div class="plan-inside">
		        <h3 class="plan-name">{{ plan.title }}</h3>
		        <div class="plan-price" v-if="plan.price">{{ plan.price }}</div>
		        <div class="plan-details">
		        	<ul>
		        		<li v-for="detail in plan.details" v-html="detail" />
		        	</ul>
		        </div>
		        <CtaButton v-if="plan.actions" :data="plan.actions" />
		        </div>
		      </div>
		      <div v-else>
		        <div class="plan-inside">
		        <h3 class="plan-name">{{ plan.title }}</h3>
		        <div class="plan-price" v-if="plan.price">{{ plan.price }}</div>
		        <div class="plan-details">
		        	<ul>
		        		<li v-for="detail in plan.details" v-html="detail" />
		        	</ul>
		        </div>
		        <CtaButton v-if="plan.actions" :data="plan.actions" />
		        </div>
		      </div>
		    </div>
	    </div>
	  </div>
	</section>
</template>

<script>
	import CtaButton from "./CtaButton"
	export default {
		name: 'PricingSection',
		props: { 
			data: Object
		},
		components: {
			CtaButton,
		},
	}
</script>