<template>
  <div class="container pt-5">
    <div class="row home-textbox justify-content-center d-block">
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
