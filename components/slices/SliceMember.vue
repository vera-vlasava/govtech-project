<template>
  <section class="slice slice-member" id="join">
    <div class="wrapper">
      <div>
        <h2 class="u-h2">
          Mitglied<br />
          werden
        </h2>
        <div class="subinfo">
          <p>
            Finden Sie die richtige<br />
            Campus-Mitgliedschaft für Sie.
          </p>
          <p>
            Kontaktieren Sie uns unter:<br />
            <a href="mailto:info@govtech.gov">info@govtech.gov</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "slice-member"
};
</script>

<style scoped>
  

  .slice-member{
    background: #fff;
    color: #000;
    margin-bottom: 0;
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
    font-weight: 400;
    padding-bottom: 80px;
    margin-top: 0em;
  }

  .slice-member .u-h1,
  .slice-member .u-h2,
  .slice-member .u-h3{
    color: #000;
  }

  .u-h2{
    font-size: 4em;
    line-height: 1em;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: .4em;
  }

   @media only screen and (min-width: 900px){
    .u-h2{
      font-size: 8em;
    }

    .wrapper{
      display: flex
    }
    .wrapper > div{
      margin-left: auto;
    }

    .subinfo{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

   @media only screen and (min-width: 1100px){
    .subinfo{
      width: 80%;
    }
  }

   @media only screen and (min-width: 1400px){
    .u-h2{
      font-size: 8em;
    }
    .subinfo{
      width: 80%;
    }
  }



</style>
