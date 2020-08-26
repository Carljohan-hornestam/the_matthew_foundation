<template>
  <div class="container pt-5">
    <div class="row home-textbox justify-content-center d-block">
      <div>
        <Editorial/>
      </div>
      <div>
        <ImageCarousel/>
</div>
    </div>
  </div>
</template>

<script>

import ImageCarousel from '@/components/ImageCarousel.vue';
import Editorial from '@/components/Editorial.vue';

export default {
  name: 'Home',
  components: {
    ImageCarousel, Editorial
  },
}
</script>
<style scoped>
</style>
