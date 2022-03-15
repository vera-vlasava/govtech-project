<template>
  <section class="slice slice-courses" id="courses">
    <div class="wrapper  wrapper--offset">
      <h2 class="u-h1">
        Open <br />
        Courses
      </h2>
      <p class="intro">
        Der GovTech Campus Deutschland hebt das Konzept der Tech- und
        Digital-Weiterbildung für Staat und Verwaltung auf eine neue Ebene:
        Mittels Collaborative Learning setzen wir auf die Einbindung externer
        Partner aus der Technologie- und erweiterten GovTech-Szene, der
        Zivilgesellschaft sowie Wissenschaft und Forschung in ein Open
        Course-Curriculum. Wir machen die Tech- und Entwicklerszene zur Faculty
        für Staat und Verwaltung. Unser Open Course-Curriculum entwickelt
        sukzessive ein breites Spektrum stets aktueller Technologie- und
        Digitalthemen und ist so konzipiert, dass es berufsbegleitend auf
        aktuelle und künftige berufliche Herausforderungen im Hinblick auf die
        Transformation von Staat und Verwaltung gezielt begleitet und
        vorbereitet. Die Teilnahme an unserem Open Course-Curriculum ist für die
        unsere Mitglieder kostenlos.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-courses"
};
</script>

<style scoped>
.slice-courses {
  background-color: #fff;
  padding: 9em 0;
}

.slice-courses,
.u-h1 {
  color: #000;
}

.slice-courses__item {
  margin-top: 5em;
}

.slice-courses__item .u-h3 {
  margin-bottom: 1 em;
  text-transform: uppercase;
}

@media only screen and (min-width: 900px) {
  .intro {
    width: 90%;
  }
  .slice-courses__item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: 10em;
  }

  p {
    padding-left: 30%;
    width: 100%;
  }
}
</style>
