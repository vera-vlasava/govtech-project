<template>
  <section class="slice slice-campus">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        GovTech<br />
        Campus<br />
        <small>Deutschland</small>
      </h2>
      <p>
        Wir wollen Deutschland zum Vorreiter bei der Entwicklung und Anwendung
        digitaler Technologien und Lösungen für den öffentlichen Sektor -
        Government Technology - machen. Wir vernetzen Bund, Länder und Kommunen
        mit mit innovativsten Akteuren der Techszene, der Zivilgesellschaft, der
        Open-Source-Community und der angewandten Forschung. In produktivem
        Umfeld mit optimalem Know how und zentraler Infrastruktur erschließen,
        entwickeln und erproben wir neue Ideen und Lösungen und helfen dabei,
        sie in Deutschland zur Anwendung zu bringen.
      </p>
    </div>

    <!-- <div class="wrapper wrapper--full">
      <div class="stripes"  v-view="moveStripes">
        <img class="layer" :style="stripeOffset" ref="stripeLayer" src="~/assets/img/strips-black.svg" />
        <div class="number">
          <span>20</span>
          <span>21</span>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import Vue from "vue";
import checkView from "vue-check-view";
Vue.use(checkView);

export default {
  props: ["slice"],
  name: "slice-campus",
  data() {
    return {
      stripeTransform: 0,
      lastScroll: 1,
      stripeInView: false
    };
  },
  computed: {
    stripeOffset() {
      return {
        transform: "translateX(" + this.stripeTransform + "px)"
      };
    }
  },
  methods: {
    moveStripes(e) {
      if (this.stripeInView == false) {
        if (e.type == "enter" || e.type == "progress") {
          this.stripeInView = true;
        } else {
          this.stripeInView = false;
        }
      } else {
        if (e.type == "exit") {
          this.stripeInView = false;
        }
      }
    },
    handleScroll() {
      if (this.stripeInView) {
        if (window.scrollY > this.lastScroll) {
          this.stripeTransform = this.stripeTransform - 2;
        } else {
          this.stripeTransform = this.stripeTransform + 2;
        }

        this.lastScroll = window.scrollY;
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.stripes {
  height: 70vh;
  margin-top: 5em;
  position: relative;
  overflow: hidden;
  background: #2b2b2b;
}

.stripes .layer {
  height: 100%;
  width: 500vw;
  left: -100vw;
  object-fit: cover;
  transition: transform 0.3 ease;
  position: relative;
  z-index: 20;
}

.stripes .number {
  font-size: 60vw;
  font-weight: 800;
  line-height: 88%;
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.stripes .number span {
  display: block;
}

@media only screen and (min-width: 900px) {
  p {
    padding-left: 30%;
    width: 90%;
  }
  .stripes {
    height: 90vh;
  }
  .stripes .number span {
    display: inline-block;
  }

  .stripes .number {
    width: 100%;
    text-align: center;
    font-size: 28vw;
  }
  .stripes .layer {
    left: -25vw;
    width: 200vw;
  }
}
</style>
