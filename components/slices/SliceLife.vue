<template>
  <section class="slice slice-life">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        Campus<br />
        life
      </h2>
      <p>
        Der GovTech Campus Deutschland geht neue Wege im Community-Building. Gemeinsam mit unseren Campus Residents und Partnern organisieren wir Veranstaltungen zur Förderung des Wissensaustauschs und der Zusammenarbeit - unterstützt durch ausgewählte Programme und Services. Ein Digital- und Tech-Curriculum für Staat und Verwaltung, technische Neuerungen und ein aktives Community-Management schaffen ein inspirierendes Umfeld und generiert wirksame Impulse für die digitale Transformation von Staat und Verwaltung. Der Campus dient der Community als Vernetzungs-, Lern- und Umsetzungsraum.
      </p>
      <p>
        Für Staat und Verwaltung aus Bund, Ländern und Kommunen wird ein einmaliger Raum geschaffen, neue Arbeitsformen Co-Creation und Collaboration zu erlebbar zu machen und zu nutzen. 
      </p>
      <p>
        Startups und Technologieszene erhalten die Möglichkeit, mit Verwaltung unmittelbar in Interaktion zu treten.  
      </p>
    </div>
    <div class="wrapper wrapper--full parallax-bg">
      <img src="~/assets/img/govtech_stage.jpg" v-parallax="0.2">
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'
import VueParallaxJs from 'vue-parallax-js'

Vue.use(checkView);

Vue.use(VueParallaxJs)


export default {
  props: ["slice"],
  name: "slice-life",
  data() {
    return {
      imageOffset: 0,
      lastScroll: 1,
      imageInView: false
    };
  }
};
</script>

<style scoped>
  
  .parallax-bg{
    height: 70vh;
    position: relative;
    overflow: hidden;
    margin-top: 4em;
  }

  .parallax-bg img{
    height: 120%;
    width: 120%;
    object-fit: cover;
  }

  @media only screen and (min-width: 900px){
    p{
      padding-left: 30%;
      width: 90%;
    }
    .parallax-bg{
      height: 100vh;
      margin-top: 10em;
    }
  }




</style>
