<template>
  <div>
    <header-prismic />
    <div class="offcanvasmove">
	    <div class="site-content page">
	     	<div class="wrapper">
	 			<h1 class="u-h1">datenschutz</h1>
	 			<p>Lorem ipsum</p>
	 		</div>
	    </div>

	    <footer-prismic />
 	</div>
  </div>
</template>

<style scoped>
	.page{
		color: #fff;
		padding-top: 200px;
	}	

	.page .wrapper{
		max-width: 900px;
    	margin: 0 auto;
    	min-height: 80vh;
	}
</style>

<script>
// import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismic from "~/components/FooterPrismic";
import HeaderPrismic from "~/components/HeaderPrismic";

export default {
  name: "page",
  components: {
    // SlicesBlock,
    FooterPrismic,
    HeaderPrismic
  },
  head() {
    return {
      title: 'GovTech Campus Impressum'
    };
  }
};
</script>