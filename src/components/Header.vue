<template>
	<header id="masthead" class="site-header outer">
		<div class="inner">
    	<div class="site-header-inside">
      	<div class="site-branding">
	        <p class="site-logo" v-if="headerData.logo_img">
	          <g-link to="/">
	            <g-image :src="headerData.logo_img" />
	          </g-link>
	        </p>
	        <p class="site-title" v-else>
	          <g-link to="/">
	            {{headerData.title}}
	          </g-link>
	        </p>
      	</div>
      	<nav id="main-navigation" class="site-navigation" aria-label="Main Navigation" >
      		<div class="site-nav-inside">
	          <button id="menu-close" class="menu-toggle" @click="onClose" ><span class="screen-reader-text" >Open Menu</span><span
	              class="icon-close" aria-hidden="true"></span></button>
	          <ul class="menu">
	            <li class="menu-item"	v-for="item in headerData.menu" @click="onClose">
	            	<g-link :to="item.url">
	              	{{ item.label }}
	              </g-link>
	            </li>
	            <li class="menu-item menu-button" v-if="headerData.actions" v-for= "action in headerData.actions" @click="onClose">
	            	<g-link :to="action.url" class="button">
	              	{{ action.label }}
	              </g-link>
	            </li>
	          </ul>
	        </div>
      	</nav>
      	<button id="menu-open" class="menu-toggle" @click="onClick"><span class="screen-reader-text">Close Menu</span><span class="icon-menu"
          aria-hidden="true"></span></button>
      </div>
    </div>
	</header>
</template>
<script>
	export default {
		data () {
		  return {
		    isVisible: false
		  }
		},
	  computed: {
	    headerData() {
	      return this.$static.headerData.edges[0].node;
	    }
	  },
   	methods: {
	    onClick () {
	      document.body.classList.toggle('menu--opened');
	    },
	    onClose () {
	      document.body.classList.remove('menu--opened');
	    }
	  }
	}
</script>

<static-query>
	query headerData {
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
	        has_social
	        social_title
	      }
	    }
	  }
	}
</static-query>


