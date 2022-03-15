<template>
  <section class="slice slice-services" id="services">
    <div class="wrapper  wrapper--offset">
      <h2 class="u-h1">
        Programme
      </h2>
      <p class="intro">
        Wir bündeln die Expertise unserer Community in drei programmatischen
        Ansätzen.
      </p>

      <div class="slice-services__item">
        <div class="slice-services__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-services__content">
          <div>
            <h3 class="u-h3">Co-Ideation</h3>
            <p>
              Wir organisieren Wissensplattformen, in denen Verwaltungen,
              Techszene, Forschungsorganisationen und Zivilgesellschaft das
              GovTech-Ökosystem entschlüsseln und zusammen mit Expert:innen aus
              IT, Recht und Vergabe überzeugende Antworten auf die digitalen und
              technologischen Innovationsaufgaben von Bund, Ländern und Kommunen
              finden.
            </p>
          </div>
        </div>
      </div>

      <div class="slice-services__item slice-services__visual--right">
        <div class="slice-services__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-services__content">
          <div>
            <h3 class="u-h3">Co-Creation</h3>
            <p>
              Wir stellen die Infrastruktur für Innovationsprojekte von Staat
              und Verwaltung mit dem GovTech-Ökosystem. Für jedes Projekt
              organisieren wir ein offenes Innovations-Ökosystem mit den
              passenden GovTech-Akteuren - vom IT-Dienstleister,
              Open-Source-Lösungen, Hyperscalern, zivilgesellschaftlichen
              Akteuren bis zu namhaften Forschungsorganisationen - die digitale
              oder technologische Innovationen in konkrete Anwendungsfälle oder
              Produkte übertragen können.
            </p>
          </div>
        </div>
      </div>

      <div class="slice-services__item">
        <div class="slice-services__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_03.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-services__content">
          <div>
            <h3 class="u-h3">Co-Learning</h3>
            <p>
              Wir generieren praxisrelevante Impulse für die digitale
              Transformation von Verwaltungsorganisationen. Durch ein
              Open-Course-Curriculum, Fellowships, Briefings,
              Case-Präsentationen und weitere Workshop- und Lernformate fördern
              wir den Austausch der Verwaltung mit dem GovTech-Ökosystem und
              machen wertvolle Expertise für alle zugänglich.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-services"
};
</script>

<style scoped>
.slice-services {
  margin-bottom: 9em;
}
.slice-services__visual {
  width: 100%;
  height: 20vh;
  margin-bottom: 1.8em;
}

.slice-services__visual video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.slice-services__item {
  margin-top: 5em;
}

.slice-services__item .u-h3 {
  margin-bottom: 0.5em;
}

@media only screen and (min-width: 900px) {
  .intro {
    width: 50%;
  }
  .slice-services__item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    margin-bottom: 10em;
  }

  .slice-services__item:last-child {
    margin-bottom: 0;
  }

  .slice-services__item.slice-services__visual--right .slice-services__visual {
    order: 2;
  }
  .slice-services__item.slice-services__visual--right .slice-services__content {
    order: 1;
    padding-right: 40px;
    padding-left: 0%;
  }

  .slice-services__item.slice-services__visual--right
    .slice-services__content
    > div {
    width: 80%;
    margin-left: 20%;
  }

  .slice-services__visual {
    width: 40%;
    height: auto;
    margin-bottom: 0;
  }

  .slice-services__content {
    width: 60%;
    padding-left: 40px;
  }

  .slice-services__content > div {
    width: 80%;
  }

  .slice-services__content > div p:last-child {
    margin-bottom: 0;
  }
}
</style>
