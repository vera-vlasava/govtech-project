<template>
  <div>
    <header-prismic />
    <div class="offcanvasmove">
      <div class="site-content">
        <!-- Slices block component -->
        <slices-block :slices="slices" />
      </div>

      <footer-prismic />
    </div>
  </div>
</template>

<script>
// Imports for all components
import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismic from "~/components/FooterPrismic";
import HeaderPrismic from "~/components/HeaderPrismic";

export default {
  name: "Home",
  components: {
    SlicesBlock,
    FooterPrismic,
    HeaderPrismic
  },
  head() {
    return {
      title: 'GovTech'
    };
  },
  data() {
    return {
      slices: [
        {
          slice_type: 'stage'
        },
        {
          slice_type: 'campus'
        },
        {
          slice_type: 'services'
        },
        {
          slice_type: 'community'
        },
        {
          slice_type: 'life'
        },
        {
          slice_type: 'spaces'
        },
        {
          slice_type: 'initiator'
        },
        {
          slice_type: 'member'
        }
      ]
    };
  }
  // async asyncData({ $prismic, params, error, store }) {
  //   try {
  //     // Languages from API response
  //     let languages = $prismic.api.data.languages

  //     // Setting Master language as default language option
  //     let lang = { lang: languages[0].id }

  //     // If there is a langauge code in the URL set this as language option
  //     if (params.lang !== undefined || null) {
  //       if(params.lang.includes('en')){
  //         lang = { lang: 'en-us' }
  //       } else{
  //         lang = { lang: 'de-de' }
  //       }
  //     }

  //     // Query to get the home page content
  //     const result = await $prismic.api.getSingle('homepage', lang)
  //     const menu = (await $prismic.api.getSingle('top_menu', lang)).data

  //     return {
  //       // Page content, set slices as variable
  //       page: result.data,
  //       slices: result.data.body,
  //       menuLinks: menu.menu_links,
  //       altLangs: result.alternate_languages
  //     };
  //   } catch (e) {
  //     error({ statusCode: 404, message: "Page not found" });
  //   }
  // }
};
</script>
