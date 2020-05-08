<template>
  <div class="container pt-5 d-flex justify-content-center" id="about_container">
    <div class="row bg-white py-3 pb-3 w-100 mb-4" id="shadow">
      <div class="col-2 text-left pl-4 pt-4" id="about_nav">
        <ul style="list-style: none; padding: 0;" v-if="this.$store.state.isSwedish">
          <li class="mb-2 infolink" @click="isStatutes = false">Vilka är vi?</li>
          <li class="mb-2 infolink" @click="isStatutes = true">Stadgar</li>
        </ul><ul style="list-style: none; padding: 0;" v-if="!this.$store.state.isSwedish">
          <li class="mb-2 infolink" @click="isStatutes = false">Who are we?</li>
          <li class="mb-2 infolink" @click="isStatutes = true">Statutes</li>
        </ul>
      </div>
      <div id="about_info" class="col-9 text-left pt-4 pl-4" v-if="!isStatutes" >
      <AboutUsInfo/>
      </div>
      <div id="about_info" class="col-9 text-left pt-4 pl-4" v-if="isStatutes">
      <Statutes />
      </div>
    </div>
  </div>
</template>
<script>
import AboutUsInfo from '@/components/AboutUsInfo.vue';
import Statutes from '@/components/Statutes.vue';

export default {
  name: 'About',
  components: {
    AboutUsInfo, Statutes,
},
data() {
    return {
      isStatutes: false,
    };
  },
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");


#shadow {
  box-shadow: 3px 3px 3px #565756;
}
#about_info {
  padding-left: 10em;
  border-left: 2px solid #d6930d;
  font-family: "Noto Sans", sans-serif;
}
.infolink:hover{
  cursor: pointer;
}
#about_nav, h4 {
  font-family: "Quicksand", sans-serif;
}
</style>