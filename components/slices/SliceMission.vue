<template>
  <section class="slice slice-mission" id="mission">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        Mission & <br />
        Ansatz
      </h2>
      <p>
        Der Govtech Campus Deutschland macht digitale Innovationen und
        Technologien für Staat, Verwaltung und Demokratie zugänglich, skalierbar
        und anwendbar.
      </p>
      <p>
        Der GovTech Campus betreibt physische Co-Innovation Spaces und kuratiert
        das führende GovTech-Ökosystem Europas, durch das neues Vertrauen
        zwischen Verwaltungen und Akteuren des GovTech-Sektors entstehen kann;
        in denen digitale Innovationen und Lösungen für Staat und Verwaltung
        transparent und zugänglich gemacht werden (Co-Ideation), in denen
        konkrete Innovationsprojekte zwischen Staat und GovTech-Szene umgesetzt
        werden (Co-Creation) und gemeinsames Lernen von Verwaltung und Techszene
        ermöglicht wird (Co-Learning). Wir möchten die Grundlage dafür schaffen,
        dass GovTech-Akteure und Organisationen des öffentlichen Sektors auf
        Augenhöhe zusammenarbeiten können, um Staat und Verwaltung zu
        modernisieren und die technologische Reife der Demokratie zu stärken.
      </p>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import checkView from "vue-check-view";
import VueParallaxJs from "vue-parallax-js";

Vue.use(checkView);

Vue.use(VueParallaxJs);

export default {
  props: ["slice"],
  name: "slice-mission"
};
</script>

<style scoped>
.parallax-bg {
  height: 70vh;
  position: relative;
  overflow: hidden;
  margin-top: 4em;
}

.parallax-bg img {
  height: 120%;
  width: 120%;
  object-fit: cover;
}

@media only screen and (min-width: 900px) {
  p {
    padding-left: 30%;
    width: 90%;
  }
  .parallax-bg {
    height: 100vh;
    margin-top: 10em;
  }
}
</style>
