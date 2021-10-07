<template>
  <section class="slice slice-community" id="initiatoren">
    <div class="wrapper wrapper--offset">
      <h2 class="u-h1">
        INITIATOREN
      </h2>
      <p>
        Der GovTech Campus Deutschland ist weltweit einzigartig in seiner Organisation und wurde von Bundesregierung, Bundesländern sowie Akteuren der Techszene, Forschung/Wissenschaft und der Zivilgesellschaft gemeinsam initiiert.      
      </p>
    </div>
    <div class="initiatoren">
      <div class="wrapper wrapper--offset">
        <div class="logos">
          <div>
             <img src="~/assets/img/logo01.jpg" />
          </div>
          <div>
            <img src="~/assets/img/logo02.jpg" />
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

  .logos{
    display: flex;
    flex-wrap: wrap;
    margin: 4em 0 4em 0;
  }

  .logos div{
    display: inline-block;
    white-space: nowrap;
    height: 60px;
    width: 120px;
    background: #fff;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .logos img{
    height: 100%;
    width: 100%;
    object-fit: cover;

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
      margin-right: 50px;
      height: 80px;
      width: 150px;
    }
  }

  @media only screen and (min-width: 1400px){

    .communities__item{
      padding: 0 0 100px 20vw;
    }

  }

  

</style>
