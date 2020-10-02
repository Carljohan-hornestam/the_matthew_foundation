<template>
  <div class="container-fluid d-flex justify-content-between px-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100" id="tmfNav">
      <div class="d-flex col-3 justify-content-start">
        <router-link to="/" class="navbar-brand" id="logo_text">
          <h3>The Matthew Foundation</h3>
        </router-link>
      </div>
      <div class="d-none d-lg-block col-6">
        <div v-if="this.$store.state.isSwedish" class="d-flex justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Om oss</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" href="#">Kontakt/Donera</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Galleri</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Pågående hjälpinsatser</router-link>
            </li>
          </ul>
        </div>
        <div v-if="!this.$store.state.isSwedish" class="d-flex justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" href="#">Contact/Donate</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Ongoing aid efforts</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-3 d-flex justify-content-end phone">
        <div
          v-if="this.$store.state.isSwedish"
          v-on:click="changeLanguage(false)"
          class="d-flex lang-link"
        >
          <span class="language pr-1 d-none d-lg-block">Svenska</span>
          <img class="flag my-auto" src="../assets/sweden.png" />
        </div>
        <div
          v-if="!this.$store.state.isSwedish"
          v-on:click="changeLanguage(true)"
          class="d-flex lang-link"
        >
          <span class="language pr-1 d-none d-lg-block">English</span>
          <img class="flag my-auto" src="../assets/uk.png" />
        </div>
        
        <span class="navbar-toggler-icon d-block d-lg-none" data-toggle="collapse" data-target="#dropMenu" ></span>
      </div>
    </nav>
  </div>
</template>
<script>
//import $ from 'jquery'
export default {
  name: "Navbar",

  methods: {
    changeLanguage(choice) {
      this.$store.commit("setIsSwedish", choice);
    },
    mobileNavToggle() {
      this.$store.commit("mobileNavToggle");
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&display=swap");

#logo_text {
  font-family: "Caveat", cursive;
}
#tmfNav, .nav-bg, ul.dropdown-menu {
  background-color: #d6930d !important;
}
.nav-link:hover,
#logo_text:hover {
  color: wheat !important;
}
.nav-link,
.language {
  font-family: "Quicksand", sans-serif;
}
.active-link {
  color: wheat !important;
}
.flag {
  height: 3vh;
}
.language {
  color: rgba(0, 0, 0, 0.5);
}
.lang-link:hover {
  cursor: pointer;
}
.dropdown-menu {
   padding-top: 0;
   padding-bottom: 0;
}
.dropdown-menu > li:first-child {
   margin-top: 15px;
}
.dropdown-menu > li:last-child {
   margin-bottom: 15px;
}
@media (max-width: 420px) {
.navbar{
  padding: .5rem 0 !important;
}
.phone {
  justify-content: space-around !important;
}
.flag {
  height: 2.3vh;
}
.navbar-toggler-icon {
  margin-left: 1vw;
}
}
@media (min-width: 420px) and (max-width: 820px) {
.flag {
  height: 6vh;
}
.navbar-toggler-icon {
  margin-left: 1vw;
  height: 8vh;
  width: 8vh;
}
}
@media (min-width: 750px) and (max-width: 800px) {
.flag {
  height: 3.5vh;
}
.navbar-toggler-icon {
  margin-left: 1vw;
  height: 5vh;
  width: 5vh;
}
h3 {
  font-size: 2.25rem;
}
}
@media (min-width: 821) and (max-width: 1200px) {
.flag {
  height: 2vh;
}
}
</style>