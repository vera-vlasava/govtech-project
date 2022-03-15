<template>
  <section class="slice slice-projects" id="projects">
    <div class="wrapper  wrapper--offset">
      <h2 class="u-h1">
        Projekte
      </h2>
      <p class="intro">
        Zusammen mit Bund, Ländern, Kommunen und der GovTech-Community
        entwickeln wir kontinuierlich Projekte, die die Innovationskraft unserer
        Mitglieder in idealer Weise kombinieren und fördern.
      </p>

      <div class="slice-projects__item">
        <div class="slice-projects__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-projects__content">
          <div>
            <h3 class="u-h3 upper">Projekt 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio velit iure similique incidunt dolores quam a asperiores
              laboriosam, molestias eius deserunt optio pariatur harum,
              consectetur porro numquam commodi officiis id.
            </p>
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
          </div>
        </div>
      </div>

      <div class="slice-projects__item">
        <div class="slice-projects__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-projects__content">
          <div>
            <h3 class="u-h3 upper">Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cum tempora beatae, vitae architecto cupiditate
              dolorum exercitationem laboriosam sequi enim eligendi,
              necessitatibus dolor assumenda molestiae, aliquid expedita
              adipisci soluta aliquam!
            </p>
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
          </div>
        </div>
      </div>

      <div class="slice-projects__item">
        <div class="slice-projects__visual">
          <video autoplay playsinline muted loop>
            <source src="~/assets/img/stripe_03.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slice-projects__content">
          <div>
            <h3 class="u-h3 upper">Projekt 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque
              quasi, modi libero sunt recusandae sit pariatur eveniet? Ipsa
              voluptate rem, accusantium cumque illum voluptas blanditiis dolor
              similique esse voluptates.
            </p>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-projects"
};
</script>

<style scoped>
.slice-projects {
  background-color: #fff;
  padding: 9em 0;
  margin-bottom: 0;
}

.u-h1,
.slice-projects,
.u-h3 {
  color: #000;
}

.slice-projects__visual {
  width: 100%;
  height: 20vh;
  /* margin-bottom: 1.8em; */
}

.slice-projects__visual video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.slice-projects__item {
  margin-top: 5em;
}

.slice-projects__item .u-h3 {
  margin-bottom: 1.5em;
  text-transform: uppercase;
}

.logos-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 4em 0 4em 0;
}

.logos-wrapper div {
  display: inline-block;
  white-space: nowrap;
  height: 50px;
  width: 100px;
  background: #000;
  margin-right: 10px;
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
  .slice-projects__item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
  }

  .slice-projects__visual {
    width: 40%;
    height: auto;
    margin-bottom: 0;
  }

  .slice-projects__content {
    width: 60%;
    padding-left: 40px;
  }

  .slice-projects__content > div {
    width: 80%;
  }

  .logos-wrapper div {
    height: 80px;
    width: 160px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
