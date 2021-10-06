<template>
  <section class="slice slice-spaces" id="sites">
    <div class="wrapper wrapper--offset">
      <div class="desktop-flex">
        <div class="content">
          <h2 class="u-h1">
            CAMPUS<br />
            SITES
          </h2>
          <p>
            Die erste Campus Site wird 2021 in Berlin-Mitte eröffnet. Büroräume, Co-Ideation/–Creation/–Learning-Bereiche für Verwaltungen, Startups, Zivilgesellschaft, Forschungsorganisationen oder Tech-Unternehmen ergänzen sich mit modernsten Veranstaltungs- und Seminarräumen und stehen Mitgliedern und Residents zur Verfügung.
          </p>
          <p class="hide-mobile">
            An weiteren Standorten in den Bundesländern - beginnend in Frankfurt/Hessen - bieten wir ein inspirierendes Umfeld, das Arbeitswelten intelligent vereint und Branchen, Technologien, Wissen und Umsetzungsfähigkeiten zusammenbringt.
          </p>
        </div>
        <div class="morses">
          <div class="overlay"></div>
          <div class="morse" v-parallax="0.1">
            <div class="line hidden"></div>
            <div class="line"></div>
            <div class="dot"><span class="circle"></span></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="dot dot-with-location">
              <span class="circle"></span>
              <span class="label">Berlin</span>
            </div>
            <div class="line"></div>
            <div class="line"></div>
          </div>

          <div class="morse" v-parallax="0.04">
            <div class="line"></div>
            <div class="line"></div>
            <div class="dot"><span class="circle"></span></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="dot dot-with-location">
              <span class="circle"></span>
              <span class="label">Hessen</span>
            </div>
            <div class="line"></div>
            <div class="line"></div>
          </div>

          <div class="morse" v-parallax="0.16">
            <div class="line"></div>
            <div class="dot"><span class="circle"></span></div>
            <div class="line"></div>
            <div class="dot dot-with-location dot-with-location--left">
              <span class="circle"></span>
              <span class="label">NRW</span>
            </div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="dot"><span class="circle"></span></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <p class="hide-desktop">
        An weiteren Standorten in den Bundesländern - beginnend in Frankfurt/Hessen - bieten wir ein inspirierendes Umfeld, das Arbeitswelten intelligent vereint und Branchen, Technologien, Wissen und Umsetzungsfähigkeiten zusammenbringt.
      </p>
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
  name: "slice-spaces"
};
</script>

<style scoped>
  
  .morses{
    display: flex;
    justify-content: space-around;
    position: relative;
    overflow: hidden;
  }
  .morses .overlay{
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,1) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
  }
  .morse{
    text-align: center;
    display: inline-block;
  }

  .morse .line.hidden,
  .morse .dot.hidden{
    opacity: 0;
  }

  .morse .line{
    width: 3px;
    height: 40px;
    background: #fff;
    opacity: 0.2;
    margin: 15px auto;
  }
  .morse .dot{
    position: relative;
  }
  .morse .dot .circle{
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 10px;
    opacity: 0.2;
    margin: 15px auto;
    position: relative;
    display: block;
  }


  .morse .dot.dot-with-location .circle{
    opacity: 1;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    animation: pulse 6s ease infinite;
    box-shadow: 0 0 30px -2px #fff;
    display: block;
  }

  .morse:first-child .dot.dot-with-location .circle{
    animation: pulse 4s ease infinite;
  }

  .morse:last-child .dot.dot-with-location .circle{
    animation: pulse 9s ease infinite;
  }



  .morse .dot .label{
    position: absolute;
    top: 53%;
    left: 35px;
    transform: translateY(-50%);
    color: #fff;
    font-weight: 400;
  }

  .morse .dot.dot-with-location.dot-with-location--left .label{
    position: absolute;
    top: 53%;
    right: 35px;
    left: initial;
    transform: translateY(-50%);
    color: #fff;
    font-weight: 400;
  }


  @keyframes pulse {
      0%{transform: scale(.7)}
      50%{transform: scale(1.1)}
      100%{transform: scale(.7)}
  }

  @media only screen and (min-width: 900px){
    .slice-spaces{
      margin: 18em 0;
    }
    .desktop-flex{
      display: flex;
      flex-wrap: nowrap;
    }

    .content{
      width: 50%;
      order: 2;
    }

    .morses{
      width: 50%;
      order: 1;
      justify-content: space-between;
      padding-right: 10%;
    }
  }

</style>
