<template>
  <div>
    <div class="w-75 h-75 m-auto">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div class="carousel-item active img1">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4">Nnamdi</h2>
              <p
                class="lead"
                v-if="this.$store.state.isSwedish"
              >Fått kapitalstöd för att kunna avsluta sin utbildning. Läser internationella relationer.</p>
              <p
                class="lead"
                v-if="!this.$store.state.isSwedish"
              >Recieved economic support in order to finish his education. He is currently studying international relations.</p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item img2">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4">Chidera</h2>
              <p
                class="lead"
                v-if="this.$store.state.isSwedish"
              >Pojken har kämpat mot bland annat hjärtproblem sen födseln. Fått vårdstöd.</p>
              <p
                class="lead"
                v-if="!this.$store.state.isSwedish"
              >The boy has been fighting heart condition since he was born. Been given economic support for healthcare.</p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item img3">
            <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4">Cynthia</h2>
              <p
                class="lead"
                v-if="this.$store.state.isSwedish"
              >Fått kapitalstöd för att kunna avsluta sin utbildning. Hon läser filosofi.</p>
              <p
                class="lead"
                v-if="!this.$store.state.isSwedish"
              >Recieved economic support in order to finish her education. She is currently studying philosophy.</p>
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
</template>
<script>

export default {
    name: 'ImageCarousel',
}
</script>
<style scoped>
.carousel-img{
    height: 75vh;
}


</style>