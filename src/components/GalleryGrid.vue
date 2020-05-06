<template>
  <div class="container pt-5 d-flex justify-content-center">
    <div class="bg-white pb-3 w-75 p-5" id="shadow">
      <div class="row mb-2">
        <figure class="col grid-height push-up" id="g1">
            <figcaption>
              <p>Hamburgare</p>
            </figcaption>
          </figure>
        <figure class="col grid-height mx-2 push-up" id="g2">
            <figcaption>
              <p>Hamburgare</p>
            </figcaption>
          </figure>
        <figure class="col grid-height push-up" id="g3">
            <figcaption>
              <p>Hamburgare</p>
            </figcaption>
          </figure>
      </div>
      <div class="row mb-2">
        <figure class="col grid-height push-up" id="g4">
            <figcaption>
              <p>Hamburgare</p>
            </figcaption>
          </figure>
        <figure class="col grid-height mx-2 push-up" id="g5">
            <figcaption>
              <p>Hamburgare</p>
            </figcaption>
          </figure>
        <figure class="col grid-height push-up" id="g6">
            <figcaption>
              <p>Hamburgare</p>
            </figcaption>
          </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
#shadow {
  box-shadow: 3px 3px 3px #565756;
}
.grid-height {
  height: 35vh;
  flex-grow: 1;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.gallery-img {
    height:100%;
    width:100%;
  object-fit: cover;
}
figure {
  margin: 0;
  overflow: hidden;
  position: relative;
}
figcaption {
  position: absolute;
  display: block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  background: #d6930d;
  padding: 0.5vw;
  z-index: 100;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  left: 0;
  -moz-transform: translate3d(-100%, -50%, 0);
  -webkit-transform: translate3d(-100%, -50%, 0);
  transform: translate3d(-100%, -50%, 0);
  opacity: 0;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.push-up img {
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.push-up figcaption {
  top: 100%;
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.push-up:hover figcaption {
  -moz-transform: translate3d(0, -100%, 0);
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  box-shadow: 0px -2px 28px rgba(0, 0, 0, 0.3);
  overflow: visible;
}
figcaption p {
  color: white;
  text-align: center;
  font-size: 120%;
}
#g1 {
  background-image: url(../assets/chidera.jpg);
}
#g2 {
  background-image: url(../assets/chimaobi.jpg);
}
#g3 {
  background-image: url(../assets/cynthia.jpg);
}
#g4 {
  background-image: url(../assets/danjuma.jpg);
}
#g5 {
  background-image: url(../assets/Handover.jpg);
}
#g6 {
  background-image: url(../assets/nnamdi.jpg);
}
</style>