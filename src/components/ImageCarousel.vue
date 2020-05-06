<template>
    <div>
       <div class="h-100">
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="200"
  >
    <b-carousel-slide
      caption="First slide"
      :img-src="require('../assets/chidera.jpg')" class="carousel-img"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      :img-src="require('../assets/chimaobi.jpg')" class="carousel-img"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      :img-src="require('../assets/danjuma.jpg')" class="carousel-img"
    ></b-carousel-slide>
  </b-carousel>
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