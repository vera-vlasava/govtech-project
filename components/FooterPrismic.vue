<template>
  <footer class="site-footer">
    <div class="wrapper">
    	<p class="copyright">© 2021 GovTech</p>
    	<nav>
    		<ul>
    			<li><a href="/impressum">Impressum</a></li>
    			<li><a href="/datenschutz">Datenschutz</a></li>
    		</ul>
    	</nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-prismic"
};
</script>

<style scoped>
	.site-footer{
		background: #fff;
		color: #000;
		font-size: 0.786em;
		margin-top: -1px;
	}

	.site-footer .copyright{
		display: inline-block;
		margin-right: 20px;
	}

	.site-footer nav{
		display: inline-block;
	}

	.site-footer ul{
		list-style: none;
	}
	.site-footer li{
		display: inline-block;
		margin-right: 5px;
	}

	.site-footer a{
		text-decoration: none;
		color: #000;
	}

	 @media only screen and (min-width: 1400px){
	    .wrapper{
	      padding: 20px 60px;
	    }
	  }
</style>
