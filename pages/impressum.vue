<template>
  <div>
    <header-prismic />
    <div class="offcanvasmove">
	    <div class="site-content page">
	     	<div class="wrapper">
		 			<h1 class="u-h1">Impressum</h1>
		 			<p>
		 				GovTech Campus Deutschland e.V.<br />
						Max-Urich-Straße 3<br />
						D-13355 Berlin <br />
						Mail: <a href="mailto:office@govtechcampus.de">office@govtechcampus.de</a><br />
						Web: <a href="www.govtechcampus.de" target="_blank">www.govtechcampus.de</a> 
					</p>
					<p>
						vertreten durch den Vorstand:<br />
						Patrick Burghardt<br />
						Markus Richter (Vorsitz)<br />
						Lars Zimmermann
					</p>
						Amtsgericht Charlottenburg<br />
						VR 39017 B<br />
						Steuernummer: 27/640/61593
					<p>
						V.i.S.d § 55 Abs. 2 RStV:<br />
						Patrick Burghardt<br />
						Markus Richter (Vorsitz)<br />
						Lars Zimmermann
					</p>
	 		</div>
	    </div>

	    <footer-prismic />
 	</div>
  </div>
</template>

<style scoped>
	.page{
		color: #fff;
		padding-top: 180px;
		padding-bottom: 50px;
	}	

	.page a{
		color: #fff!important;
	}

	.page .wrapper{
		max-width: 900px;
   	margin: 0 auto;    	
	}
	@media only screen and (min-width: 900px){
		.page{
			color: #fff;
			padding-top: 200px;
			padding-bottom: 100px;
		}	
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
      title: 'GovTech – Impressum',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Technologien für die Zukunft von Staat und Verwaltung'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://govtechcampus.de/govtech.jpg'
        }
      ]   
    };
  }
};
</script>