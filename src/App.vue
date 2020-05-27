<template>
  <div id="app">
    <div>
      <Navbar/>
      <MobileNav/>
    </div>
    <div id="main">
    <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import MobileNav from '@/components/MobileNav.vue';

export default {
  components: {
    Navbar, MobileNav
  }
}
</script>

<style>
/*@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
*/
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#main{
  background: url(assets/bg.jpg) no-repeat center center fixed;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
