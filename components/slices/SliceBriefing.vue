<template>
  <section class="slice slice-briefing" id="briefing">
    <div class="wrapper  wrapper--offset">
      <h2 class="u-h1">
        Briefing <br />
        Center
      </h2>
      <p class="intro">
        Wir konzipieren Veranstaltungs-und Lernformate, die dem
        Wissensaustausch, der Vernetzung sowie der Zusammenarbeit zwischen
        Verwaltung, Techszene, Industrie und Zivilgesellschaft dienen.
      </p>

      <div class="slice-briefing__item">
        <div class="slice-briefing__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-briefing__content">
          <div>
            <h3 class="u-h3">GovTech Cases</h3>
            <p>
              Im Rahmen der GovTech Cases stellen ausgewählte Führungskräfte des
              öffentlichen Sektors regelmäßig zusammen mit Vertreter:innen aus
              Tech-/IT- und Entwicklerszene konkrete Anwendungsfälle (“Use
              Cases”) digitaler Technologien und Lösungen im öffentlichen Sektor
              vor.
            </p>
          </div>
        </div>
      </div>

      <div class="slice-briefing__item slice-briefing__visual--right">
        <div class="slice-briefing__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-briefing__content">
          <div>
            <h3 class="u-h3">GovTech Briefings</h3>
            <p>
              Im Rahmen der GovTech Briefings diskutieren wir mit namhaften
              Persönlichkeiten aus Tech, Verwaltung, Politik, Industrie,
              Forschung oder Zivilgesellschaft Trends und Herausforderungen in
              Bezug auf die Modernisierung von Staat und Verwaltung.
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
  name: "slice-briefing"
};
</script>

<style scoped>
.slice-briefing {
  margin-bottom: 9em;
}
.slice-briefing__visual {
  width: 100%;
  height: 20vh;
  margin-bottom: 1.8em;
}

.slice-briefing__visual video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.slice-briefing__item {
  margin-top: 5em;
}

.slice-briefing__item .u-h3 {
  margin-bottom: 0.5em;
}

@media only screen and (min-width: 900px) {
  .intro {
    width: 50%;
  }
  .slice-briefing__item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    margin-bottom: 10em;
  }

  .slice-briefing__item.slice-briefing__visual--right .slice-briefing__visual {
    order: 2;
  }
  .slice-briefing__item.slice-briefing__visual--right .slice-briefing__content {
    order: 1;
    padding-right: 40px;
    padding-left: 0%;
  }

  .slice-briefing__item.slice-briefing__visual--right
    .slice-briefing__content
    > div {
    width: 80%;
    margin-left: 20%;
  }

  .slice-briefing__visual {
    width: 40%;
    height: auto;
    margin-bottom: 0;
  }

  .slice-briefing__content {
    width: 60%;
    padding-left: 40px;
  }

  .slice-briefing__content > div {
    width: 80%;
  }

  .slice-briefing__content > div p:last-child {
    margin-bottom: 0;
  }
}
</style>
