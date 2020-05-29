<template>
  <div class="container pt-5 d-flex justify-content-center pb-5">
    <div class="bg-white" id="shadow">
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img src="../assets/obi_twins.jpg" class="project-img" />
        </div>
        <div class="col-sm-7 col-12 project-text text-left">
          <h4>Jane & Joy</h4>
          <p v-if="this.$store.state.isSwedish">
            De två små tvillingarna Jane och Joy är nyfödda barn till Ejike Obi från Ozubulu i sydöstra Nigeria, Ejike är en målare men har varit arbetslös i flera år på grund av att han har tagit hand om sin sjuka mamma som fick diagnosen levercirrhos, tyvärr gick hon bort sent 2019. Du kan hjälpa den här familjen genom donation. Doneringsinformationen hittar du
            <router-link to="/contact" class="link">här</router-link>.
          </p>
          <p
            v-if="!this.$store.state.isSwedish"
          >The two little twins Jane and Joy are newborns to Ejike Obi from Ozubulu in southeastern Nigeria, Ejike is a painter but has been unemployed for several years due to taking care of his sick mother who was diagnosed with liver cirrhosis, unfortunately she passed away late 2019. You can help this family by donating. The information about how you can donate can be found <router-link to="/contact" class="link">here</router-link>.</p>
        </div>
      </div>
      <hr />
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img src="../assets/c2.jpg" class="project-img" />
        </div>
        <div class="col-sm-7 col-12 project-text text-left">
          <h4>Chidera</h4>
          <p v-if="this.$store.state.isSwedish">Den här lilla pojken Chidera, har kämpat mot bland annat hjärtproblem sen födseln. Hjälp honom att få vård. Doneringsinformationen hittar du<router-link to="/contact" class="link"> här</router-link>. </p>
          <p v-if="!this.$store.state.isSwedish">This little boy Chidera, has been fighting a heart condition since he was born. Support him to get healthcare. The information about how you can donate can be found <router-link to="/contact" class="link">here</router-link>.</p>
        </div>
      </div>
      <hr />
      <div class="row py-5">
        <div class="col-sm-5 col-12 text-center">
          <img src="../assets/chinasa.jpg" class="project-img" />
        </div>
        <div class="col-sm-7 col-12 project-text text-left">
          <h4>Chinasa</h4>
          <p v-if="this.$store.state.isSwedish">Chinasa är fjorton år gammal och lider av höftledsnekros, och har utvecklat svår värk i både kropp och ben. Hon har fått pengar till en moped, men behöver fortsatt stöd till vård. Doneringsinformationen hittar du
            <router-link to="/contact" class="link">här</router-link>.</p>
          <p v-if="!this.$store.state.isSwedish">Chinasa is fourteen years old and suffers from sickle cell anemia, and has developed severe pain in both body and leg. She has received money for a moped, but she still needs our support to get healthcare. The information about how you can donate can be found <router-link to="/contact" class="link">here</router-link>.</p>
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

.link {
  color: #d6930d;
}
#shadow {
  width: 95%;
  box-shadow: 3px 3px 3px #565756;
}
.project-img {
  width: 350px;
  height: 350px;
  object-fit: cover;
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
    padding-left: 25px !important;
    padding-top: 20px;
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