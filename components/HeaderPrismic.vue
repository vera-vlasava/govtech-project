<template>
  <header
    class="site-header"
    :class="$store.state.headerBlend ? 'disableblend' : ''"
  >
    <div class="wrapper">
      <a href="/" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.96 256.1">
          <g id="Ebene_1" data-name="Ebene 1">
            <path d="M744,256.1H0V0H744ZM6.85,249.25H737.11V6.85H6.85Z" />
            <rect x="3.86" y="124.63" width="736.24" height="6.85" />
            <rect x="378.55" width="6.85" height="131.48" />
            <rect x="497.13" y="124.63" width="6.85" height="131.48" />
            <path
              d="M45,75.52V54.68c3.12-9.75,13.47-17,25.82-17,11.69,0,21.29,6.33,24.94,14.81L88.8,55.49c-2.53-6.4-9.83-11-18-11-8.71,0-16.52,5.36-18.46,12.35V73.36c1.94,7,9.75,12.35,18.46,12.35S86.41,80.43,88.5,75.44V70H68.4V63.38H95.79V77.75c-3.42,7.89-12.73,14.81-25,14.81S48.08,85.34,45,75.52Z"
            />
            <path
              d="M101.45,79.76V64c2.38-7.22,10-12.65,19.35-12.65s17,5.43,19.35,12.65V79.76c-2.38,7.22-10,12.8-19.35,12.8S103.83,87,101.45,79.76ZM133.3,78v-12c-1.26-4.4-6.25-8.19-12.5-8.19s-11.24,3.79-12.51,8.19V78c1.27,4.32,6.33,8.19,12.51,8.19S132,82.29,133.3,78Z"
            />
            <path
              d="M173.35,52.44h6.55v1.64l-15,37.29h-7.82L142.23,54.08V52.44h6.7l12.21,31.34Z"
            />
            <path
              d="M225.37,38.82V45.6H206.76V91.37H199.4V45.6H180.79V38.82Z"
            />
            <path
              d="M256,81.32c-3.05,6.85-9.83,11.24-18.54,11.24-9.23,0-16.59-5.58-18.9-12.8V64c2.23-7.22,9.45-12.65,18.68-12.65S253.51,56.76,255.74,64V74H225.37v4.1c1.19,4.39,6,8.19,12.21,8.19,6.47,0,10.49-3.21,12.28-7.6Zm-30.67-15.7v2.75H249V65.62c-1.19-4.39-5.8-8.19-11.83-8.19S226.49,61.23,225.37,65.62Z"
            />
            <path
              d="M261.1,79.76V64c2.3-7.22,9.52-12.65,19-12.65,8.41,0,15.18,4.39,18,11l-6.33,2.76a12.46,12.46,0,0,0-11.68-7.37c-6.26,0-10.95,3.79-12.14,8.19V78c1.19,4.32,5.88,8.19,12.14,8.19a12.29,12.29,0,0,0,11.68-7.44l6.33,2.75c-2.83,6.63-9.6,11.09-18,11.09C270.62,92.56,263.4,87,261.1,79.76Z"
            />
            <path
              d="M337.39,61.45V91.37h-6.85V63.46c-1.42-3.28-5-5.73-10.5-5.73-5.35,0-9.37,2.9-10.27,6V91.37h-6.85V38.82h6.85V56.16a15.82,15.82,0,0,1,11.84-4.83C329.5,51.33,335.45,56,337.39,61.45Z"
            />
            <path
              d="M90.28,180.74v18c-3,9.82-13.54,17.27-26,17.27h-19V163.47h19C76.74,163.47,87.23,170.91,90.28,180.74Zm-7.36,2.08c-1.94-7-9.83-12.58-18.61-12.58H52.62v39H64.31c8.78,0,16.67-5.58,18.61-12.58Z"
            />
            <path
              d="M133.45,206c-3,6.85-9.82,11.24-18.53,11.24-9.23,0-16.6-5.59-18.91-12.81V188.62c2.24-7.21,9.46-12.65,18.69-12.65,9.08,0,16.22,5.44,18.45,12.65v10H102.79v4.09c1.19,4.39,6,8.19,12.2,8.19,6.48,0,10.5-3.2,12.28-7.59Zm-30.66-15.71V193h23.67v-2.76c-1.19-4.39-5.81-8.19-11.84-8.19S103.9,185.87,102.79,190.26Z"
            />
            <path
              d="M166.42,177.09h6.85V216h-6.55v-4.17a15.1,15.1,0,0,1-12.06,5.28c-7.81,0-13.77-4.76-15.63-10.34v-29.7h6.85v27.76c1.34,3.28,4.76,5.88,10.27,5.88,5.29,0,9.31-3,10.27-6.1Z"
            />
            <path
              d="M185.33,209.69V182.82h-7.15v-5.73h4c1.64,0,2.68-.6,3.13-1.71V163.47h6.84v13.62h10.5v5.73h-10.5v23.89c1,2.09,3,3.5,7.22,3.5h3.5V216a20.48,20.48,0,0,1-4.54.52C191.73,216.54,187.56,214.08,185.33,209.69Z"
            />
            <path
              d="M205.42,207.75l5.81-2.82c1.71,3.79,5.8,6.1,10.49,6.1,4.4,0,7.37-1.79,8.49-4.17v-3.27c-.67-1.57-2.31-2.68-4.62-3.43-3.35-1-6.62-.82-10.79-2.16-4.32-1.41-7.14-3.87-8.33-6.92v-6.77c1.86-4.69,7.88-8.34,15-8.34,7.52,0,13.62,3.8,15.71,9.23l-5.81,2.68c-1.79-3.72-5.36-5.81-10-5.81-4.25,0-7.3,1.72-8.34,4.1v3.05c.6,1.64,2.23,2.61,4.54,3.35,3.28,1,6.7.89,10.87,2.16s7.22,3.87,8.41,6.92v7.15c-1.94,4.61-7.89,8.33-15.19,8.33C214,217.13,207.51,213.26,205.42,207.75Z"
            />
            <path
              d="M242,204.4V188.62c2.31-7.21,9.53-12.65,19-12.65,8.41,0,15.19,4.39,18,11l-6.33,2.75A12.47,12.47,0,0,0,261,182.37c-6.25,0-10.94,3.8-12.13,8.19v12.06c1.19,4.32,5.88,8.19,12.13,8.19a12.31,12.31,0,0,0,11.69-7.45l6.33,2.76c-2.83,6.62-9.61,11.09-18,11.09C251.57,217.21,244.35,211.62,242,204.4Z"
            />
            <path
              d="M318.33,186.09V216h-6.85V188.1c-1.41-3.27-5-5.73-10.49-5.73s-9.38,2.91-10.27,6V216h-6.85V163.47h6.85v17.34A15.8,15.8,0,0,1,302.55,176C310.44,176,316.4,180.66,318.33,186.09Z"
            />
            <path d="M325,216V163.47h6.85V216Z" />
            <path
              d="M371.47,186.09V216h-6.4V211.7a16.22,16.22,0,0,1-12.58,5.36c-7.14,0-12.58-3.13-14.59-7.15v-8.63c2.16-4.84,8.27-7.07,15.26-7.89s10.65-1.56,11.54-2.9v-2.61c-1.34-3-4.84-5.58-10.2-5.58s-9.82,3-11.46,7.22l-6-2.91c2.53-6,9.3-10.64,17.41-10.64C362.77,176,369.31,180.36,371.47,186.09Zm-6.77,9.68c-1.26,1.19-4.47,2.08-10.35,3s-8.63,2.23-9.82,4.46v4.25c1.34,1.93,4.09,3.64,9.15,3.64s9.16-2.16,11-5.21Z"
            />
            <path
              d="M412.56,186.17V216h-6.85V188.1c-1.41-3.27-5-5.73-10.49-5.73s-9.38,2.91-10.28,6V216H378.1V177.09h6.47v4.24A15.27,15.27,0,0,1,396.78,176C404.67,176,410.62,180.66,412.56,186.17Z"
            />
            <path
              d="M449.47,163.47h6.85V216h-6.55V211.4a17.23,17.23,0,0,1-13.25,5.73,18.64,18.64,0,0,1-18.08-12.73V188.62c2.23-7.14,9.3-12.65,18.08-12.65a17.22,17.22,0,0,1,13,5.36Zm0,25.38c-1.93-3.65-6.4-6.48-12-6.48-6.18,0-11,3.8-12.21,8.19v12.06c1.19,4.32,6,8.19,12.21,8.19,5.58,0,10.05-2.91,12-6.48Z"
            />
            <path
              d="M423.72,75.47V54.63c3-9.75,13.18-17.05,25.31-17.05,11.09,0,20.47,5.73,24.19,14.89l-6.77,3.05c-2.39-6.1-8.71-11.09-17.42-11.09-8.56,0-16.08,5.36-17.94,12.36V73.31c1.86,7,9.38,12.36,17.94,12.36,8.71,0,15-5,17.42-11.09l6.77,3c-3.72,9.15-13.1,14.88-24.19,14.88C436.9,92.51,426.77,85.22,423.72,75.47Z"
            />
            <path
              d="M511.1,61.4V91.32h-6.4V87a16.21,16.21,0,0,1-12.58,5.35c-7.14,0-12.58-3.12-14.59-7.14V76.58c2.16-4.83,8.26-7.07,15.26-7.88s10.65-1.57,11.54-2.91v-2.6c-1.34-3-4.84-5.59-10.2-5.59s-9.82,3.06-11.46,7.22l-6-2.9c2.54-6,9.31-10.64,17.42-10.64S508.94,55.67,511.1,61.4Zm-6.77,9.68c-1.27,1.19-4.47,2.08-10.35,3s-8.63,2.24-9.82,4.47v4.24c1.34,1.94,4.09,3.65,9.15,3.65s9.16-2.16,11-5.21Z"
            />
            <path
              d="M576.15,61V91.32h-6.84V63c-1.19-2.83-4.62-5.36-9.46-5.36s-8.63,2.9-9.52,5.58V91.32h-6.85V63c-1.19-2.83-4.54-5.36-9.46-5.36s-8.55,2.9-9.45,5.58V91.32h-6.85V52.39h6.48v4.17a14.22,14.22,0,0,1,11.31-5.28,16.28,16.28,0,0,1,12.81,6c2.68-3.58,6.92-6,12.87-6C568.56,51.28,574.44,56,576.15,61Z"
            />
            <path
              d="M620.59,64v15.7a18.64,18.64,0,0,1-18.09,12.8,17.06,17.06,0,0,1-12.88-5.43v16.15h-6.85V52.39h6.48V57a17.11,17.11,0,0,1,13.25-5.73C611.36,51.28,618.35,56.79,620.59,64Zm-6.85,1.86c-1.19-4.39-6-8.19-12.21-8.19-5.58,0-10,2.83-11.91,6.47V79.64c1.86,3.64,6.33,6.47,11.91,6.47,6.18,0,11-3.79,12.21-8.19Z"
            />
            <path
              d="M653.86,52.39h6.84V91.32h-6.55V87.15a15.07,15.07,0,0,1-12,5.29c-7.82,0-13.77-4.76-15.64-10.35V52.39h6.85V80.16c1.34,3.27,4.77,5.88,10.27,5.88,5.29,0,9.31-3,10.28-6.11Z"
            />
            <path
              d="M665.61,83.06l5.81-2.83c1.71,3.8,5.81,6.11,10.49,6.11,4.4,0,7.37-1.79,8.49-4.17V78.89c-.67-1.56-2.31-2.68-4.62-3.42-3.34-1-6.62-.82-10.79-2.16-4.32-1.41-7.14-3.87-8.33-6.92V59.61c1.86-4.68,7.89-8.33,15-8.33,7.52,0,13.62,3.79,15.71,9.23l-5.81,2.68c-1.79-3.72-5.36-5.81-10-5.81-4.25,0-7.3,1.71-8.34,4.1v3.05c.6,1.63,2.23,2.6,4.54,3.35,3.28,1,6.7.89,10.87,2.16s7.22,3.87,8.41,6.92V84.1c-1.94,4.62-7.89,8.34-15.19,8.34C674.17,92.44,667.7,88.57,665.61,83.06Z"
            />
          </g>
        </svg>
      </a>

      <button
        class="burger"
        v-on:click="toogleMenu()"
        :class="$store.state.menu ? 'close' : ''"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="offcanvas" :class="$store.state.menu ? 'active' : ''">
      <nav>
        <ul>
          <li>
            <button data-hash="mission" v-on:click="scrollTo">
              <span>Mission & Ansatz</span>
            </button>
          </li>

          <li>
            <button data-hash="services" v-on:click="scrollTo">
              <span>Programme</span>
            </button>
          </li>

          <li>
            <button data-hash="projects" v-on:click="scrollTo">
              <span>Projekte</span>
            </button>
          </li>
          <li>
            <button data-hash="ecosystem" v-on:click="scrollTo">
              <span>??kosystem</span>
            </button>
          </li>
          <li>
            <button data-hash="community" v-on:click="scrollTo">
              <span>Mitgliedschaft</span>
            </button>
          </li>
          <li>
            <button data-hash="life" v-on:click="scrollTo">
              <span>Campus Life</span>
            </button>
          </li>

          <li>
            <button data-hash="sites" v-on:click="scrollTo">
              <span>Campus Sites</span>
            </button>
          </li>

          <li>
            <button data-hash="courses" v-on:click="scrollTo">
              <span>Open Courses</span>
            </button>
          </li>

          <li>
            <button data-hash="briefing" v-on:click="scrollTo">
              <span>Briefing Center</span>
            </button>
          </li>

          <li>
            <button data-hash="join" v-on:click="scrollTo">
              <span>Kontakt</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-prismic",
  mounted() {
    if (this.$store.state.menu) {
      const gsap = this.$gsap;

      if (window.location.hash) {
        setTimeout(function() {
          var hash = window.location.hash.replace("#", "");

          console.log(hash);
          var scrollTarget = document.getElementById(hash);
          var offset = scrollTarget.offsetTop;
          var furtherOffset = 150;

          if (hash == "join" || window.innerWidth >= 600) {
            furtherOffset = 0;
          }

          if (scrollTarget) {
            console.log(scrollTarget);
            gsap.to(window, 1, { scrollTo: { y: offset - furtherOffset } });
          }
        }, 400);
      }
      this.$store.commit("toggleMenu", false);
      var that = this;
      setTimeout(function() {
        that.$store.commit("toggleBlending", false);
      }, 700);
    }
  },
  methods: {
    toogleMenu(e) {
      if (this.$store.state.menu) {
        this.$store.commit("toggleMenu", false);
        var that = this;
        setTimeout(function() {
          that.$store.commit("toggleBlending", false);
        }, 700);
      } else {
        this.$store.commit("toggleMenu", true);
        this.$store.commit("toggleBlending", true);
      }
    },
    scrollTo(e) {
      if (e) {
        var hash = e.target.dataset.hash;
        var scrollTarget = document.getElementById(hash);
        if (scrollTarget) {
          const gsap = this.$gsap;

          console.log(scrollTarget);

          var offset = scrollTarget.offsetTop;
          var furtherOffset = 150;

          if (hash == "join" || window.innerWidth >= 600) {
            furtherOffset = 0;
          }
          gsap.to(window, 1, { scrollTo: { y: offset - furtherOffset } });

          if (this.$store.state.menu) {
            this.$store.commit("toggleMenu", false);
            var that = this;
            setTimeout(function() {
              that.$store.commit("toggleBlending", false);
            }, 700);
          }
        } else {
          this.$router.push("/#" + hash);
        }
      }
    }
  }
};
</script>

<style scoped>
.offcanvas {
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  padding: 135px 0 90px 0;
  width: 100%;
  background: #000;
  color: #fff;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #fff;
  transform: translateY(-100%);
  transition: transform 0.7s ease-out;
}

.offcanvas button {
  padding: 10px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
  color: #fff;
  opacity: 1;
  background: transparent;

  text-decoration: none;
  transition: opacity 0.4s ease-out;
}

.offcanvas button span {
  pointer-events: none;
  background: linear-gradient(
    230deg,
    #e6e6cf,
    #e6fffa 25.17%,
    #ffffff 50%,
    #c2e0fb 73.09%,
    #a3adaa 90.09%,
    #bbdef2
  );
  background-size: 200% 200%;
  -webkit-animation: silverMove 8s ease infinite;
  -moz-animation: silverMove 8s ease infinite;
  animation: silverMove 8s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@-webkit-keyframes silverMove {
  0% {
    background-position: 0% 92%;
  }
  50% {
    background-position: 100% 9%;
  }
  100% {
    background-position: 0% 92%;
  }
}
@-moz-keyframes silverMove {
  0% {
    background-position: 0% 92%;
  }
  50% {
    background-position: 100% 9%;
  }
  100% {
    background-position: 0% 92%;
  }
}
@keyframes silverMove {
  0% {
    background-position: 0% 92%;
  }
  50% {
    background-position: 100% 9%;
  }
  100% {
    background-position: 0% 92%;
  }
}

.offcanvas.active {
  transform: translateY(0);
  transition: transform 0.7s ease-out;
}

header {
  position: fixed;
  z-index: 200;
  width: 100%;
  top: 30px;
  mix-blend-mode: difference;
}
header.disableblend {
  mix-blend-mode: initial;
}
header > .wrapper {
  position: relative;
  z-index: 200;
}
.wrapper {
  display: flex;
}
.burger {
  margin-left: auto;
  width: 44px;
  background: transparent;
  border: none;
  padding: 10px;
  margin-right: -10px;
  cursor: pointer;
}

.burger span {
  height: 2px;
  width: 100%;
  margin: 7px 0;
  background: #fff;
  display: block;
  transition: opacity 0.7s ease-out;
}

.burger.close span:first-child,
.burger.close span:last-child {
  opacity: 0;
  transition: opacity 0.7s ease-out;
}

.logo {
  display: block;
}

.logo svg {
  height: 50px;
}

.logo g {
  fill: #fff;
}

@media only screen and (min-width: 1400px) {
  .wrapper {
    padding: 20px 60px;
  }

  .logo svg {
    height: 70px;
  }

  /* .offcanvas {
    padding-top: 0;
  } */

  .offcanvas button:hover {
    opacity: 0.5;
    transition: opacity 0.4s ease-out;
  }
}
</style>
