<template>
  <div class="container-fluid d-flex justify-content-between px-0">
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100" id="tmfNav">
      <div class="d-flex col justify-content-start">
        <router-link to="/" class="navbar-brand" id="logo_text">
          <h3>The Matthew Foundation</h3>
        </router-link>
      </div>
      <button
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
      <div class="d-flex col justify-content-end">
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
            <font-awesome-icon icon="globe"></font-awesome-icon>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&display=swap");

#logo_text {
  font-family: "Caveat", cursive;
}
#tmfNav {
  background-color: #d6930d !important;
}
.nav-link:hover,
#logo_text:hover {
  color: wheat !important;
}
.nav-link {
  font-family: "Quicksand", sans-serif;
}
</style>