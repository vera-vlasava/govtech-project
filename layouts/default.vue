<template>
  <div :class="$store.state.menu ? 'menu_open' : '' ">
    <nuxt /> 
  </div>
</template>


<style type="text/css">
  .offcanvasmove{
    transform: translateY(0vh);
    transition: transform .7s ease-out;
  }

  .menu_open .offcanvasmove{
    transform: translateY(200px);
    transition: transform .7s ease-out;
  }
</style>


<script>


export default {
  components: {
    
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  }
};
</script>