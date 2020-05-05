<template>
  <div class="container pt-5">
    <div class="row home-textbox justify-content-center d-block">
      <h4 class="text-center m-0">Välkommen till hemsidan för The Matthew Foundation!</h4>
      <div>
        <ImageCarousel/>
</div>
    </div>
  </div>
</template>

<script>

import ImageCarousel from '@/components/ImageCarousel.vue';

export default {
  name: 'Home',
  components: {
    ImageCarousel,
  },
}
</script>
<style scoped>
</style>
