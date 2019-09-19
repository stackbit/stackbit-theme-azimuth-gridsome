<template>
	<div>
    <div class="accordion-header" >
      <button class="accordion-trigger" @click="onClick">
        <div class="accordion-title">{{ data.question }}</div>
        <div class="accordion-icon" v-if="isVisible" v-bind:class="'icon-minus'"></div>
        <div class="accordion-icon" v-else v-bind:class="'icon-plus'"></div>
      </button>
    </div>
    <div class="accordion-panel" v-if="isVisible">
      <div class="accordion-content">
       	<p v-html="data.answer" />
      </div>
    </div>
	</div>	    
</template>

<script>
	export default {
		name: 'FaqDropDown',
		props: { 
			data: Object
		},
		data () {
	    return {
	      isVisible: false
	    }
	  },
	  methods: {
	    onClick () {
	      this.isVisible = !this.isVisible
	    }
	  }
	}
</script>
