<template>
	<ul class="social-links">
	  <li v-for="link in socialData.links">
	    <g-link :to="link.url" target="_blank" rel="noopener">
	    	{{ link.title }}
	    </g-link>
	  </li>
	</ul>

</template>

<static-query>
	query socialData {
	  socialData: allsocialData {
	    edges {
	      node {
					links {
						type
						title
						url
					}	        
	      }
	    }
	  }
	}
</static-query>

<script>
	export default {
	  computed: {
	    socialData() {
	      return this.$static.socialData.edges[0].node;
	    }
	  }
	};
</script>
