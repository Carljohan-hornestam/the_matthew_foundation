<template>
  <div class="container pt-5 d-flex justify-content-center" id="about_container">
    <div class="row bg-white py-3 pb-3 w-100 mb-4" id="shadow">
      <div class="mq col-12 col-sm-3 col-lg-2 text-left pl-sm-4 pt-3 pt-sm-4" id="about_nav">
        <ul style="list-style: none; padding: 0;" v-if="this.$store.state.isSwedish">
          <li class="mb-2 infolink" @click="isStatutes = false">Vilka är vi?</li>
          <li class="mb-2 infolink" @click="isStatutes = true">Stadgar</li>
        </ul>
        <ul style="list-style: none; padding: 0;" v-if="!this.$store.state.isSwedish">
          <li class="mb-2 infolink" @click="isStatutes = false">Who are we?</li>
          <li class="mb-2 infolink" @click="isStatutes = true">Statutes</li>
        </ul>
      </div>
      <div class="w-100">
        <hr class="d-block d-sm-none my-0 mx-4"/>
      </div>
      <div id="about_info" class="col-12 col-sm-9 col-lg-10 text-left pt-4 pl-4" v-if="!isStatutes" >
      <AboutUsInfo/>
      </div>
      <div id="about_info" class="col-12 col-sm-9 col-lg-10 text-left pt-4 pl-4" v-if="isStatutes">
        <div v-if="this.$store.state.isSwedish">
      <Statutes_swe/>
        </div>
      <div v-if="!this.$store.state.isSwedish">
      <Statutes_eng />
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import AboutUsInfo from '@/components/AboutUsInfo.vue';
import Statutes_swe from '@/components/Statutes_swe.vue';
import Statutes_eng from '@/components/Statutes_eng.vue'

export default {
  name: 'About',
  components: {
    AboutUsInfo, Statutes_swe, Statutes_eng,
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
hr {
  background-color: #d6930d;
  height: 2px;
}

@media (max-width: 600px) {
#about_info {
  border-left: none;
}
li {
  float: left;
}
.mq{
  display: flex;
  justify-content: space-around;
}
.infolink {
  padding: 0px 20px;
}
}
</style>