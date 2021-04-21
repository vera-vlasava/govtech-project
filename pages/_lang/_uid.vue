<template>
  <div>
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs"/>
    
    <div class="site-content">
      <!-- Slices block component -->
      <slices-block :slices="slices" />
    </div>

    <footer-prismic />
  </div>
</template>

<script>
import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismic from "~/components/FooterPrismic";
import HeaderPrismic from "~/components/HeaderPrismic";

export default {
  name: "page",
  components: {
    SlicesBlock,
    FooterPrismic,
    HeaderPrismic
  },
  head() {
    return {
      title: this.$prismic.asText(this.page.display_title)
    };
  },
  async asyncData({ $prismic, params, error, store }) {
    try {
      // Languages from API response
      let languages = $prismic.api.data.languages

      // Setting Master language as default language option
      let lang = { lang: languages[0].id }

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        if(params.lang.includes('en')){
          lang = { lang: 'en-us' }
        } else{
          lang = { lang: 'de-de' }
        }
      }


        // Query to get the home page content
      const result = await $prismic.api.getByUID('page', params.uid, lang)
      const menu = (await $prismic.api.getSingle('top_menu', lang)).data

      return {
        // Page content, set slices as variable
        page: result.data,
        slices: result.data.body,
        menuLinks: menu.menu_links,
        altLangs: result.alternate_languages
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
