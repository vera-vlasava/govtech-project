<template>
  <section class="slice slice-stage">
    <div class="wrapper">
      <h1 class="u-h2">
        GovTech Campus Deutschland -<br />
        Die führende GovTech Community für<br />
        die Zukunft von Staat und Verwaltung
      </h1>
    </div>

    <div class="wrapper wrapper--offset">
      <div class="visual">
        <img src="~/assets/img/govtech_stage.jpg" />
      </div>
      <p>
        Digitale Transformation und technologische Resilienz von Staat und Verwaltung sind die treibenden Themen unserer Zeit. Die Herausforderungen sind Vielfältig, aber die Chancen enorm. Mit dem GovTech Campus Deutschland, als gemeinsamer Lern-, Vernetzungs- und Experiementierraum haben wir es uns zur Aufgabe gemacht, ideale Voraussetzungen für die Entwicklung digitaler Innovationen für Staat und Verwaltung in Bund, Ländern und Kommunen zu schaffen.
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
