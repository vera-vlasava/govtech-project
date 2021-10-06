<template>
  <section class="slice slice-community" id="community">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        Community
      </h2>
      <p>
        Der GovTech Campus Deutschland ist ein Ort der Innovation, der Kollaboration, des Lernens - und des Umsetzens. Wir orchestrieren den Aufbau der führenden GovTech-Community in Europa und bieten Bund, Ländern und Kommunen, Startups, Zivilgesellschaft und Forschungsorganisationen wie Unternehmen erstmals eine zentrale Infrastruktur für die Entwicklung der Zukunft von Staat und Verwaltung. Kontaktieren Sie uns!
      </p>
    </div>
    <div class="wrapper wrapper--offset">



      <div class="contactlist">
          <div>
            <h3 class="u-h4">
              Verwaltungsorganisationen<br /><small>(Bund/Länder/Kommunen)</small>
            </h3>
            <hr />
            <a href="mailto:andreas.brickmann@govtechcampus.de">
              <span>Kontakt</span>
            </a>
          </div>

          <div>
            <h3 class="u-h4">
              Startups
            </h3>
            <hr />
            <a href="mailto:lars.zimmermann@govtechcampus.de">
              <span>Kontakt</span>
            </a>
          </div>

          <div>
            <h3 class="u-h4">
              Zivilgesellschaft
            </h3>
            <hr />
            <a href="mailto:lars.zimmermann@govtechcampus.de">
              <span>Kontakt</span>
            </a>
          </div>

          <div>
            <h3 class="u-h4">
              Unternehmen
            </h3>
            <hr />
            <a href="mailto:lars.zimmermann@govtechcampus.de">
              <span>Kontakt</span>
            </a>
          </div>

          <div>
            <h3 class="u-h4">
              Forschung/Wissenschaft
            </h3>
            <hr />
            <a href="mailto:hagen.saxowski@govtechcampus.de">
              <span>Kontakt</span>
            </a>
          </div>
      </div>
    </div>
    <!-- <div class="communities">
      <div class="communities__item">
        <div class="wrapper wrapper--offset">
          <h3 class="u-h4">
            Bundesländer
          </h3>
        </div>
        <div class="wrapper wrapper--offset horizontal-scroll">

          <div class="logos">
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
          </div>
        </div>
      </div>

      <div class="communities__item">
        <div class="wrapper wrapper--offset">
          <h3 class="u-h4">
            Wissenschaft
          </h3>
        </div>
        <div class="wrapper wrapper--offset horizontal-scroll">
          <div class="logos">
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
          </div>
        </div>
      </div>

      <div class="communities__item">
        <div class="wrapper wrapper--offset">
          <h3 class="u-h4">
            Unternehmen
          </h3>
        </div>
        <div class="wrapper wrapper--offset horizontal-scroll">
          <div class="logos">
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
          </div>
        </div>
      </div>

      <div class="communities__item">
        <div class="wrapper wrapper--offset">
          <h3 class="u-h4">
            Startups
          </h3>
        </div>
        <div class="wrapper wrapper--offset horizontal-scroll">
          <div class="logos">
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
            <div>
              <img src="">
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-stage"
};
</script>

<style scoped>
  

  .communities{
    margin: 2em 0;
  }
  .horizontal-scroll{
    white-space: nowrap;
    overflow-x: scroll;
  }

  .horizontal-scroll::-webkit-scrollbar {
    display: none;
  }

  .logos{
    white-space: nowrap;
    padding: 0 0 4em 0;
  }

  .logos div{
    display: inline-block;
    white-space: nowrap;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background: #1f1f1f;
    margin-right: 40px;
  }

  .contactlist{
    margin-top: 3em;
  }
  .contactlist > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 2em;
  }

  .contactlist h3{
    line-height: 1em;
  }

  .contactlist small{
    font-size: 0.5em;
  }

  .contactlist hr{
    border-bottom: 1px solid #fff;
    width: 100%;
    opacity: 0.2;
    border-top: none;
  }

  .contactlist h3{
    margin-right: 2em;
  }
  .contactlist a{
    margin-left: 2em;
    cursor: pointer;
    text-align: center;
    color: #fff;
    opacity: 1;
    background: transparent;

    
    text-decoration: none;
    transition: opacity .4s ease-out;
  }

  .contactlist  span{
    pointer-events: none;
    background: linear-gradient(230deg, #e6e6cf,#e6fffa 25.17%,#ffffff 50%,#c2e0fb 73.09%,#A3ADAA 90.09%,#bbdef2);
    background-size: 200% 200%;
    -webkit-animation: silverMove 8s ease infinite;
    -moz-animation: silverMove 8s ease infinite;
    animation: silverMove 8s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (min-width: 900px){
    p{
      width: 60%;
    }
    .u-h4{
      margin-bottom: 0;
    }

    .communities{
      margin-top: 80px;
    }

    .communities__item{
      padding: 0 0 80px 180px;
      display: flex;
      align-items: center;
    }

    .communities__item .wrapper:first-child{
      width: 200px;
      padding: 0;
    }

    .communities__item .horizontal-scroll{
      width: calc(100% - 250px);
      margin-left: 50px;
      padding: 0;
      display: flex;
      align-items: center;
    }

    .logos{
      padding: 0;
    }
    .logos div{
      margin-right: 100px;
    }
  }

  @media only screen and (min-width: 1400px){

    .communities__item{
      padding: 0 0 100px 20vw;
    }

  }

  

</style>
