<template>
	<p class="block-buttons">
	  <a v-for="action in data" :href="action.url" class="button secondary">{{action.label}}</a>
	</p>
</template>

<script>
	export default {
		name: 'CtaButton',
		props: { 
			data: Array 
		}
	}
</script>