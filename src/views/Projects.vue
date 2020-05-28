<template>
  <div class="container pt-5 d-flex justify-content-center pb-5">
    <div class="bg-white" id="shadow">
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img
            src="http://www.spicyauctiontemplates.com/samples/blue/insertimagehere.gif"
            class="project-img"
          />
        </div>
        <div class="col-sm-7 col-12 project-text text-left pt-4">
          <h4>Namn</h4>
          <p
            v-if="this.$store.state.isSwedish"
          >Brödtext</p>
          <p
            v-if="!this.$store.state.isSwedish"
          >Body text</p>
        </div>
      </div>
      <hr />
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img
            src="http://www.spicyauctiontemplates.com/samples/blue/insertimagehere.gif"
            class="project-img"
          />
        </div>
        <div class="col-sm-7 col-12 project-text text-left pt-4">
          <h4>Namn</h4>
          <p
            v-if="this.$store.state.isSwedish"
          >Brödtext</p>
          <p
            v-if="!this.$store.state.isSwedish"
          >Body text</p>
        </div>
      </div>
      <hr />
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img
            src="http://www.spicyauctiontemplates.com/samples/blue/insertimagehere.gif"
            class="project-img"
          />
        </div>
        <div class="col-sm-7 col-12 project-text text-left pt-4">
          <h4>Namn</h4>
          <p
            v-if="this.$store.state.isSwedish"
          >Brödtext</p>
          <p
            v-if="!this.$store.state.isSwedish"
          >Body text</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");

#shadow {
  width: 95%;
  box-shadow: 3px 3px 3px #565756;
}
.project-img {
  width: 350px;
  height: 350px;
}
.project-text {
  padding-right: 50px;
  font-family: "Noto Sans", sans-serif;
}
hr {
  background-color: #d6930d;
  height: 2px;
  margin: 0 35px;
}
h4 {
  font-family: "Quicksand", sans-serif;
}
@media (max-width: 665px) {
  .project-img {
    width: 250px;
    height: 250px;
  }
  .project-text {
    margin: 5px 10px;
    padding-left: 15px !important;
    text-align: center !important;
  }
}
@media (min-width: 665px) and (max-width: 750px) {
  .project-img {
    width: 200px;
    height: 200px;
  }
  .project-text {
    padding-left: 40px !important;
    padding-right: 10px !important;
  }
  .row {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  hr {
    margin: 0 29px;
  }
}
@media (max-width: 1030px) and (min-width: 750px) {
  .project-img {
    width: 250px;
    height: 250px;
  }
  .project-text {
    padding-left: 30px;
  }
  .row {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  hr {
    margin: 0 29px;
  }
}
</style>