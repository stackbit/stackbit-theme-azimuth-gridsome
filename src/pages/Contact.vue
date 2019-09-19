<template>
	<Layout>
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
		      <div class="post-content">
		      	<p v-html="data.content" />
		      	<form name="contactForm" method="POST" netlify-honeypot="bot-field" data-netlify="true" id="contact-form"
		          class="contact-form">
		          <p class="screen-reader-text">
		            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
		          </p>
		          <p class="form-row">
		            <label class="form-label">Name</label>
		            <input type="text" name="name" class="form-input">
		          </p>
		          <p class="form-row">
		            <label class="form-label">Email address</label>
		            <input type="email" name="email" class="form-input">
		          </p>
		          <p class="form-row">
		            <label class="form-label">Message</label>
		            <textarea name="message" class="form-textarea" rows="7"></textarea>
		          </p>
		          <input type="hidden" name="form-name" value="contactForm" />
		          <p class="form-row form-submit">
		            <button type="submit" class="button">Send Message</button>
		          </p>
		        </form>
		      </div>
		    </article>
		  </div>
		</div>
	</Layout>
</template>

<script>
	export default {
	  metaInfo: {
	    title: 'Contact - Stackbit Azimuth Theme'
	  },
	  computed: {
	    data() {
	      return this.$static.contactData.edges[0].node;
	    },
	  }
	}
</script>

<static-query>
  query contactData {
    contactData: allcontactData {
      edges {
        node {
          title
          content
        }
      }
    }
  }
</static-query>