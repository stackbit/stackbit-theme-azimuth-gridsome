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
	          <button id="menu-close" class="menu-toggle"><span class="screen-reader-text">Open Menu</span><span
	              class="icon-close" aria-hidden="true"></span></button>
	          <ul class="menu">
	            <li class="menu-item"	v-for="item in headerData.menu" >
	            	<g-link :to="item.url">
	              	{{ item.label }}
	              </g-link>
	            </li>
	            <li class="menu-item menu-button" v-if="headerData.actions" v-for= "action in headerData.actions">
	            	<g-link :to="action.url" class="button">
	              	{{ action.label }}
	              </g-link>
	            </li>
	          </ul>
	        </div>
      	</nav>
      	<button id="menu-open" class="menu-toggle"><span class="screen-reader-text">Close Menu</span><span class="icon-menu"
          aria-hidden="true"></span></button>
      </div>
    </div>
	</header>
</template>

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

<script>
	export default {
	  computed: {
	    headerData() {
	      return this.$static.headerData.edges[0].node;
	    },
	  },
	  mounted() {
			var menuToggle = document.querySelectorAll('.menu-toggle');

			for (var i = 0; i < menuToggle.length; i++) {
			  menuToggle[i].addEventListener('click', function(e){
			    document.body.classList.toggle('menu--opened');
			    e.preventDefault();
			  },false);
			}

			document.body.classList.remove('menu--opened');

			window.addEventListener('resize', function () {
			  if (menuToggle.offsetParent === null) {
			    document.body.classList.remove('menu--opened');
			  }
			}, true);
	  }
	};
</script>

