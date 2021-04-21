<template>
  <div :class="$store.state.menu ? 'menu_open' : '' ">
    <nuxt /> 
  </div>
</template>


<style type="text/css">
  .offcanvasmove{
    transform: translateY(0vh);
    opacity: 1;
    transition: all .7s ease-out;
  }

  .menu_open .offcanvasmove{
    transform: translateY(200px);
    opacity: 0.7;
    transition: all .7s ease-out;
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