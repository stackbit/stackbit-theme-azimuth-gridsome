<template>
	<footer id="colophon" class="site-footer">
		<div class="footer-top outer">
	    <div class="inner">
	      <div class="footer-widgets">
	        <div class="widget footer-branding">
	        	<p class="site-logo" v-if="footerData.logo_img">
		          <g-link to="/">
		            <g-image :src="footerData.logo_img" />
		          </g-link>
		        </p>
		        <p class="site-title" v-else>
		          <g-link to="/">
		            {{headerData.title}}
		          </g-link>
		        </p>
	          <p class="site-description" v-if="footerData.tagline">
	            {{ footerData.tagline }}
	          </p>
	        </div>
	        <nav class="widget footer-navigation" v-if="(footerData.has_nav || footerData.has_social)">
	          <div class="footer-nav-inside">
	            <div class="secondary-nav" v-if="footerData.has_nav">
	              <h2 class="widget-title">{{ footerData.nav_title }}</h2>
	              <ul class="secondary-menu">
	                <li v-for="item in footerData.nav_menus">
	                  <g-link :to="item.url">{{ item.label }}</g-link>
	                </li>
	              </ul>
	            </div>
	            <div class="social-nav">
              	<h2 class="widget-title">{{ footerData.social_title }}</h2>
              	<Social />
            	</div>
	          </div>
	        </nav>
	        <div class="widget footer-subscribe" v-if="footerData.has_subscribe">
	          <h2 class="widget-title">{{ footerData.subscribe_title }}</h2>
	          <p v-if="footerData.subscribe_content">{{ footerData.subscribe_content }}</p>
	          <SubscribeForm />
	        </div>
	      </div>
	    </div>
	  </div>
	  <div class="site-info outer">
	    <div class="inner">
	    	<span v-html="footerData.content" />
	      &nbsp;
	      <span v-for="link in footerData.links">
	     	 	<a v-if="link.new_window" :href="link.url" target="_blank" rel="noopener" v-html="link.text" />
	     	 	<a v-else :href="link.url" v-html="link.text" />
	      </span>
	    </div>
	  </div>
	</footer>
</template>

<static-query>
	query footerData {
	  headerData: allheaderData {
	    edges {
	      node {
	        title
	        logo_img
	        has_nav
	        menu {
        		label
        		url
	        }
	        actions {
	        	label
	        	url
	        }
	      }
	    }
	  },
	  footerData: allfooterData {
	  	edges {
	      node {
	        logo_img
	        has_nav
	        nav_title
	        nav_menus {
	        	label
	        	url
	        }
	        has_social
	        social_title
	        tagline
	        has_subscribe
	        subscribe_title
	        subscribe_content
	        content
	        links {
	        	text
	        	url
	        	new_window
	        }
	      }
	    }
	  }
	}
</static-query>

<script>
	import Social from "./Social.vue"
	import SubscribeForm from "./SubscribeForm.vue" 

	export default {
	  computed: {
	    headerData() {
	      return this.$static.headerData.edges[0].node;
	    },
	    footerData() {
	    	return this.$static.footerData.edges[0].node;
	    }
	  },
	  components: {
      Social,
      SubscribeForm
    }
	};
</script>

