<template>
  <div class="container-fluid d-flex justify-content-between px-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100" id="tmfNav">
      <div class="d-flex col justify-content-start">
        <router-link to="/" class="navbar-brand" id="logo_text">
          <h3>The Matthew Foundation</h3>
        </router-link>
      </div>
      <b-dropdown dropleft variant="link" class="d-block d-lg-none" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
          <span class="navbar-toggler-icon"></span>
        </template>

        <div class="nav-bg">
          <b-dropdown-item>
            <router-link to="/about" class="language">Om oss</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/contact" class="language">Kontakta oss</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/gallery" class="language">Galleri</router-link>
          </b-dropdown-item>
        </div>
      </b-dropdown>
      <!--<button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      -->
      <div class="d-none d-lg-block col-auto">
        <div v-if="this.$store.state.isSwedish" class="d-flex justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Om oss</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" href="#">Kontakt</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Galleri</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Projekt</router-link>
            </li>
          </ul>
        </div>

        <div v-if="!this.$store.state.isSwedish" class="d-flex col-auto justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Current projects</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-none d-sm-block col">
        <div
          v-if="this.$store.state.isSwedish"
          v-on:click="changeLanguage(false)"
          class="d-flex justify-content-end lang-link"
        >
          <span class="language pr-1">Svenska</span>
          <img class="flag my-auto" src="../assets/sweden.png" />
        </div>
        <div
          v-if="!this.$store.state.isSwedish"
          v-on:click="changeLanguage(true)"
          class="d-flex col justify-content-end lang-link"
        >
          <span class="language pr-1">English</span>
          <img class="flag my-auto" src="../assets/uk.png" />
        </div>
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
</style>