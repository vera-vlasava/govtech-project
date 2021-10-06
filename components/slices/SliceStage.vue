<template>
  <section class="slice slice-stage">
    <div class="wrapper">
      <h1 class="u-h2">
        GovTech Campus Deutschland -<br />
        Technologien für die Zukunft von<br />
        Staat und Verwaltung
      </h1>
    </div>
    <div class="wrapper wrapper--offset">
      <div class="visual">
        <img src="~/assets/img/govtech_stage.jpg" />
      </div>
      <p>
        Digitale Innovation und technologische Resilienz von Staat und Verwaltung sind die treibenden Themen unserer Zeit. Die Herausforderungen sind vielfältig, aber die Chancen enorm. Mit dem GovTech Campus Deutschland, dem weltweit ersten Innovations-, Entwicklungs- und Lernraum dieser Art, schaffen wir ideale Voraussetzungen für die Modernisierung von Staat und Demokratie.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-stage"
};
</script>

<style scoped>
  
  .slice-stage{
    padding-top: 20vh;
  }
  .visual{
    margin: 2.5em 0;
    width: calc(100vw + 30px);
  }

  @media only screen and (min-width: 900px){
    .slice-stage{
      padding-top: 30vh;
    }
    .visual{
      margin: 4em 0;
      width: calc(100vw + 30px);
    }
    p{
      width: 60%;
    }
  }

  

</style>
