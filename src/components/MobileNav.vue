<template>
    <div class="nav-bg collapse" id="dropMenu">
        <ul style="list-style: none;" v-if="this.$store.state.isSwedish">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Om oss</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Kontakt/Donera</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Galleri</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Pågående hjälpinsatser</router-link>
            </li>
          </ul>
        <ul style="list-style: none;" v-if="!this.$store.state.isSwedish">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact/Donate</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Ongoing aid efforts</router-link>
            </li>
          </ul>
    </div>
</template>
<script>
export default {
  name: "MobileNav",
};
</script>
<style scoped>
.nav-bg {
  background-color: #d6930d !important;
}
.nav-link:hover {
  color: wheat !important;
}
.nav-link {
  font-family: "Quicksand", sans-serif;
  color: rgba(0, 0, 0, 0.5) !important;
}
ul {
    padding-inline-start: 0 !important;
    margin-block-end: 0 !important;
}
</style>