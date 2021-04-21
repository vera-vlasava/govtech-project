<template>
  <section class="slice slice-services" id="services">
    <div class="wrapper  wrapper--offset">
      <h2 class="u-h1">
        Programme<br />
        und ServiceS
      </h2>
      <p class="intro">
        Ausgewählte Programme und Services bündeln die einzigartige Expertise und das Potenzial unserer Mitglieder und Campus Residents
      </p>

      <div class="slice-services__item">
        <div class="slice-services__visual">
          <img src="~/assets/img/stripe_01.jpg" />
        </div>
        <div class="slice-services__content">
          <div>
            <h3 class="u-h3">Fellowship-Programm</h3>
            <p>Unser Fellowship-Programm bietet Vordenker:innen für die Dauer von 3-6 Monaten die Möglichkeit, neue Ideen und Ansätze zur Stärkung von Demokratie und offenen Gesellschaften durch digitale Technologien zu entwickeln und in die Öffentlichkeit zu bringen. Unsere Fellows tragen aktiv zum Campus-Leben bei und initiieren strategische Diskussionen und Debatten über die Weiterentwicklung von Staat und Verwaltung.</p>
          </div>
        </div>
      </div>

      <div class="slice-services__item slice-services__visual--right">
        <div class="slice-services__visual">
          <img src="~/assets/img/stripe_02.jpg" />
        </div>
        <div class="slice-services__content">
          <div>
            <h3 class="u-h3">Entrepreneur-in-residence-Programm</h3>
            <p>Europa’s erstes ‘Entrepreneur-in-Residence-Programm’ für GovTech bietet herausragenden Persönlichkeiten für die Dauer von 6-12 Monaten die Möglichkeit, unternehmerische Forschungs- und Innovationsprojekte zur digitalen Transformation von Staat und Verwaltung voranzutreiben. Über das Entrepreneur-in-Residence-Programm verbinden wir Partner und Campus Residents mit den besten Innovatoren und Gründerpersönlichkeiten für Government Technology.</p>
          </div>
        </div>
      </div>

      <div class="slice-services__item">
        <div class="slice-services__visual">
          <img src="~/assets/img/stripe_03.jpg" />
        </div>
        <div class="slice-services__content">
          <div>
            <h3 class="u-h3">Associate-Programm</h3>
            <p>Im Rahmen der GovTech Associateships bringen wir Mitarbeiterinnen und Mitarbeiter aus Verwaltungsorganisationen mit Startups, Entwicklern und anderen Akteuren aus der Technologieszene zusammen. Dabei gewinnen alle Associates durch die Zusammenarbeit mit der Technologieszene wertvolle Erkenntnisse und Zugang zu den Methoden und Innovationen der Tech- und Digitalszene. Am Associateship-Programm können alle Verwaltungsorganisationen aus Bund, Ländern und Kommunen teilnehmen.</p>
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
  
  .slice-services{
    margin-bottom: 9em;
  }
  .slice-services__visual{
    width: 100%;
    height: 20vh;
    margin-bottom: 1.8em;
  }

  .slice-services__visual img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .slice-services__item{
    margin-top: 5em;
  }

  .slice-services__item .u-h3{
    margin-bottom: .5em;
  }

   @media only screen and (min-width: 900px){
    .intro{
      width: 50%;
    }
    .slice-services__item{
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-end;
      margin-bottom: 10em;
    }

    .slice-services__item.slice-services__visual--right .slice-services__visual{
      order: 2;
    }
    .slice-services__item.slice-services__visual--right .slice-services__content{
      order: 1;
      padding-right: 40px;
      padding-left: 0%;
    }

    .slice-services__item.slice-services__visual--right .slice-services__content > div{
      width: 80%;
      margin-left: 20%;
    }


    .slice-services__visual{
      width: 40%;
      height: auto;
      margin-bottom: 0;
    }

    .slice-services__content{
      width: 60%;
      padding-left: 40px;
    }

    .slice-services__content > div{
      width: 80%;
    }

    .slice-services__content > div p:last-child{
      margin-bottom: 0;
    }
  }
  

</style>
