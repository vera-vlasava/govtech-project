<template>
  <section class="slice slice-ecosystem" id="ecosystem">
    <div class="wrapper  wrapper--offset">
      <h2 class="u-h1">
        Ökosystem
      </h2>
      <p class="intro">
        Wir entwickeln das führende GovTech-Ökosystem in Europa. Wir lösen
        bestehende Silos innerhalb der Verwaltung sowie zwischen Verwaltung und
        Techszene auf. Wir vernetzen führende Organisationen, Vordenker:innen
        sowie Digitalverantwortliche und Techexpert:innen aus Staat und
        Verwaltung, der Startupszene, der Zivilgesellschaft, der Industrie und
        der Forschung.
      </p>

      <div class="slice-ecosystem__item">
        <div class="slice-ecosystem__content">
          <div>
            <h3 class="u-h3 upper">Ordentliche Mitglieder</h3>
          </div>
          <div class="logos-wrapper">
            <div>
              <img src="~/assets/img/logo01.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo02.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo03.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo04.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo05.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo06.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo07.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo08.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="slice-ecosystem__item">
        <div class="slice-ecosystem__content">
          <div>
            <h3 class="u-h3 upper">Fördermitglieder</h3>
          </div>
          <div class="logos-wrapper">
            <div>
              <img src="~/assets/img/logo01.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo02.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo03.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo04.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo05.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo06.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo07.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo08.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="slice-ecosystem__item">
        <div class="slice-ecosystem__content">
          <div>
            <h3 class="u-h3 upper">Community-Mitglieder</h3>
          </div>
          <div class="logos-wrapper">
            <div>
              <img src="~/assets/img/logo01.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo02.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo03.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo04.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo05.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo06.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo07.jpg" />
            </div>
            <div>
              <img src="~/assets/img/logo08.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-ecosystem"
};
</script>

<style scoped>
.slice-ecosystem {
  margin-bottom: 9em;
}

.slice-ecosystem__item {
  margin-top: 5em;
}

.slice-ecosystem__item .u-h3 {
  margin-bottom: 1 em;
  text-transform: uppercase;
}

.u-h1 {
  padding-top: 10px;
}

.logos-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 3em 0 3em 0;
}

.logos-wrapper div {
  display: inline-block;
  white-space: nowrap;
  height: 60px;
  width: 120px;
  background: #000;
  margin-right: 20px;
  margin-bottom: 10px;
}

.logos-wrapper img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}

@media only screen and (min-width: 900px) {
  .intro {
    width: 50%;
  }
  .slice-ecosystem__item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-bottom: 4em;
  }

  .slice-ecosystem__content {
    width: 100%;
  }

  .slice-ecosystem__content > div {
    width: 100%;
  }

  .slice-ecosystem__content > div p:last-child {
    margin-bottom: 0;
  }

  .logos-wrapper div {
    height: 100px;
    width: 200px;
    margin-right: 20px;
  }
}
</style>
