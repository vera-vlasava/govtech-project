<template>
  <section class="slice slice-community" id="community">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        Community
      </h2>
      <p>
        Gemeinsam mit unseren Partnern entschlüsseln wir die Potenziale von GovTech zur digitalen Transformation von Staat und Verwaltung in Deutschland.
      </p>
      <p>
        <br />
        <a href="" class="btn btn--primary"><span>Weitere Informationen</span></a>
      </p>
    </div>
    <div class="communities">
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
    </div>
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
