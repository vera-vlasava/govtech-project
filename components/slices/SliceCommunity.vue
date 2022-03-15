<template>
  <section class="slice slice-community" id="community">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        Mitgliedschaft
      </h2>
      <p>
        Die Mitglieder und Partner des GovTech Campus Deutschland sind
        Organisationen mit Expertise und Fähigkeiten, die unsere Leidenschaft
        für Innovation und Kooperation im Hinblick auf die Modernisierung von
        Staat und Verwaltung teilen.
      </p>
      <p>
        Die Mitglieder unserer Community schließen sich zusammen und helfen
        Bund, Ländern und Kommunen, neue Lösungen für bestehende
        Herausforderungen zu finden. Schließen Sie sich dem
        Bundesfinanzministerium, dem Auswärtigen Amt, dem
        Bundesinnenministerium, den Startups Element oder Aleph Alpha, dem
        Stanford Center for Human Centered Artificial Inteligence und vielen
        anderen Mitgliedern unserer Community an. Haben Sie Interesse an einer
        strategischen Fördermitgliedschaft oder einer (kostenlosen)
        Community-Mitgliedschaft? Kontaktieren Sie uns!
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
    <div class="wrapper wrapper--full parallax-bg">
      <img src="~/assets/img/background-pic_01.jpg" v-parallax="0.2" />
      <!-- ~/assets/img/govtech_stage.jpg -->
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
/* .communities {
  margin: 2em 0;
} */
/* .horizontal-scroll {
  white-space: nowrap;
  overflow-x: scroll;
} */

/* .horizontal-scroll::-webkit-scrollbar {
  display: none;
} */

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

.logos {
  white-space: nowrap;
  padding: 0 0 4em 0;
}

.logos div {
  display: inline-block;
  white-space: nowrap;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: #1f1f1f;
  margin-right: 40px;
}

.contactlist {
  margin-top: 3em;
}
.contactlist > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 2em;
}

.contactlist h3 {
  line-height: 1em;
}

.contactlist small {
  font-size: 0.5em;
}

.contactlist hr {
  border-bottom: 1px solid #fff;
  width: 100%;
  opacity: 0.2;
  border-top: none;
}

.contactlist h3 {
  margin-right: 2em;
}
.contactlist a {
  margin-left: 2em;
  cursor: pointer;
  text-align: center;
  color: #fff;
  opacity: 1;
  background: transparent;

  text-decoration: none;
  transition: opacity 0.4s ease-out;
}

.contactlist span {
  pointer-events: none;
  background: linear-gradient(
    230deg,
    #e6e6cf,
    #e6fffa 25.17%,
    #ffffff 50%,
    #c2e0fb 73.09%,
    #a3adaa 90.09%,
    #bbdef2
  );
  background-size: 200% 200%;
  -webkit-animation: silverMove 8s ease infinite;
  -moz-animation: silverMove 8s ease infinite;
  animation: silverMove 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (min-width: 900px) {
  p {
    width: 60%;
  }
  .u-h4 {
    margin-bottom: 0;
  }

  /* .communities {
    margin-top: 80px;
  } */

  /* .communities__item {
    padding: 0 0 80px 180px;
    display: flex;
    align-items: center;
  }

  .communities__item .wrapper:first-child {
    width: 200px;
    padding: 0;
  }

  .communities__item .horizontal-scroll {
    width: calc(100% - 250px);
    margin-left: 50px;
    padding: 0;
    display: flex;
    align-items: center;
  } */

  .parallax-bg {
    height: 100vh;
    margin-top: 10em;
  }

  .logos {
    padding: 0;
  }
  .logos div {
    margin-right: 100px;
  }
}

/* @media only screen and (min-width: 1400px) {
  .communities__item {
    padding: 0 0 100px 20vw;
  }
} */
</style>
