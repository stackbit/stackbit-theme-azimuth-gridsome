<template>
  <div class="outer">
	  <div class="inner-medium">
	    <article class="post page post-full">
	      <header class="post-header">
	        <h1 class="post-title">{{ data.title }}</h1>
	      </header>
	      <div class="post-thumbnail" v-if="data.img_path">
	        <g-image :src="'/'+data.img_path" :alt="data.title" />
	      </div>
	      <div class="post-subtitle" v-if="data.subtitle">
	        {{ data.subtitle }}
	      </div>
	      <div class="post-content" v-html="data.content" />
	    </article>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'BasicPage',
		props: { 
			data: Object 
		}
	}
</script>