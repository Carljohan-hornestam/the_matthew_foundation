<template>
  <div>
    <div class="w-75 h-75 m-auto">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div class="carousel-item active img1">
            <div class="carousel-caption">
              <h2 class="display-4">Jane & Joy</h2>
              <p
                class="lead d-none d-md-block"
                v-if="this.$store.state.isSwedish"
              >Tvillingarna är barn till en målare, som har varit arbetslös i flera år pga att han har tagit hand om sin sjuka mamma.</p>
              <p
                class="lead d-none d-md-block"
                v-if="!this.$store.state.isSwedish"
              >The twin's father is a painter, who has been unemployed for several years due to him taking care of his ill mother.</p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item img2">
            <div class="carousel-caption">
              <h2 class="display-4">Chidera</h2>
              <p
                class="lead d-none d-md-block"
                v-if="this.$store.state.isSwedish"
              >Den här lilla pojken har kämpat mot bland annat hjärtproblem sen födseln.</p>
              <p
                class="lead d-none d-md-block"
                v-if="!this.$store.state.isSwedish"
              >This little boy has been fighting heart condition since he was born.</p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item img3">
            <div class="carousel-caption">
              <h2 class="display-4">Chimaobi</h2>
              <p
                class="lead d-none d-md-block"
                v-if="this.$store.state.isSwedish"
              >Chimaobi lider av en mental sjukdom. Hennes mamma är änka, hon har inte råd att betala för den hjälp sin dotter behöver. De har fått hjälp för att kunna betala för vård.</p>
              <p
                class="lead d-none d-md-block"
                v-if="!this.$store.state.isSwedish"
              >Chimaobi suffers from a mental illness. Her mother is a widow, she can't afford to pay for the care her daughter needs. They have been aided, in order to pay for healthcare.</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImageCarousel"
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");

.lead {
  background-color: #d6930d;
  font-family: "Noto Sans", sans-serif;
  width: inherit;
  margin: 0 !important;
}
h2 {
  font-family: "Quicksand", sans-serif;
}
.carousel-item {
  height: 80vh;
  max-height: 450px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.img1 {
  background-image: url(../assets/twins_carousel.jpg);
}
.img2 {
  background-image: url(../assets/c2.jpg);
}
.img3 {
  background-image: url(../assets/chimaobi_carousel.jpg);
}
.carousel-caption {
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  padding-bottom: 0 !important;
}

@media (max-width: 400px) {
.carousel-item {
  max-height: 320px;
}
h2{
  font-size: x-large;
}
}
</style>