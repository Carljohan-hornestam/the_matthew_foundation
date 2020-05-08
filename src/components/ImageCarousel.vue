<template>
    <div>
       <div class="w-75 h-75 m-auto">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active img1">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Nnamdi</h2>
          <p class="lead">Fått kapitalstöd för att kunna avsluta sin utbildning. Läser internationella relationer.</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item img2">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Chidera</h2>
          <p class="lead">Pojken har kämpat mot bland annat hjärtproblem sen födseln. Fått vårdstöd!</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item img3">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Cynthia</h2>
          <p class="lead">Fått kapitalstöd för att kunna avsluta sin utbildning. Hon läser filosofi.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>
</div> 
    </div>
</template>
<script>

export default {
    name: 'ImageCarousel',
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");

.carousel-img{
    height: 75vh;
}
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
  max-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.img1 {
  background-image: url(../assets/c4.jpg);
}
.img2 {
  background-image: url(../assets/c2.jpg);
}
.img3 {
  background-image: url(../assets/cynthia.jpg);
}
.carousel-caption {
  left: 0 !important;
  right:0 !important;
  padding-bottom: 0 !important;
}


</style>