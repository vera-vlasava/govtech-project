<template>
  <section class="slice slice-qoute" id="qoute">
    <div class="wrapper  wrapper--offset">
      <div class="intro">
        <p>
          <span class="quote">&ldquo;</span> Govtech Campus Germany makes
          digital innovations and solutions accessible, scalable, and useful for
          governments, public administration, and democracy.
        </p>
        <p>
          For this purpose, we build and curate a physical space and virtual
          ecosystem where new trust between government and tech sector actors
          can be fostered; where new methods of cross-sectoral co-ideation, co-
          creation, and co-learning can be tested, practised and refined; and
          where GovTech stakeholders and public sector organizations can stop
          eyeing each other with suspicion and start collaborating and
          innovating on an equal footing.
        </p>
      </div>

      <div class="author">
        <div class="em-dash u-h3">&mdash;</div>
        <div class="author-name u-h3">Markus Richter</div>
        <div class="author-position">CIO des Bundes</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-qoute"
};
</script>

<style scoped>
.slice-qoute {
  margin-bottom: 9em;
}

.intro {
  padding-top: 1em;
  font-style: italic;
}

.author {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.author-name {
  grid-column-start: 2;
}

.author-position {
  font-weight: bold;
  grid-column-start: 2;
}

.em-dash {
  text-align: right;
  margin-right: 10px;
}

.quote {
  font-size: 3em;
}

@media only screen and (min-width: 900px) {
  .intro {
    width: 80%;
    margin: 0 auto;
    font-weight: bold;
  }

  .slice-qoute__content {
    width: 100%;
  }

  .slice-qoute__content > div {
    width: 100%;
  }
}
</style>
