<template>
  <section class="slice slice-life" id="life">
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
      <img src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" v-parallax="0.2">
      <!-- ~/assets/img/govtech_stage.jpg -->
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
