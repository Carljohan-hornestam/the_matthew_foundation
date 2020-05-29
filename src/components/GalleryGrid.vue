<template>
  <div class="container pt-5 d-flex justify-content-center pb-5">
    <div class="bg-white pb-3 w-75 p-5" id="shadow">
      <div class="row mb-2">
        <figure class="col-12 col-sm-auto grid-height push-up custom-link mb-2 mb-sm-0" id="g1" v-on:click="showModal('img1')">
          <img
            id="img1"
            src="../assets/chidera.jpg"
            alt="Den här lilla pojken Chidera, har kämpat mot bland annat hjärtproblem sen födseln."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img1"
            src="../assets/chidera.jpg"
            alt="This little boy Chidera, has been fighting a heart condition since he was born."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />
          <figcaption>
            <p>Chidera</p>
          </figcaption>
        </figure>
        <figure
          class="col-12 col-sm-auto grid-height mx-0 mx-sm-2 mb-2 mb-sm-0 push-up custom-link"
          id="g2"
          v-on:click="showModal('img2')"
        >
          <img
            id="img2"
            src="../assets/chimaobi.jpg"
            alt="Chimaobi är en ung flicka som lider av mental sjukdom, hon är dotter till en änka som inte har ekonomin till att vårda Chimaobis hälsotillstånd. Hon har fått ekonomiskt stöd till vård."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img2"
            src="../assets/chimaobi.jpg"
            alt="Chimaobi is a young girl suffering from mental illness, she is the daughter of a widow who does not have the finances to alleviate Chimaobi's health. She has been given economic support for healthcare."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />

          <figcaption>
            <p>Chimaobi</p>
          </figcaption>
        </figure>
        <figure class="col-12 col-sm-auto grid-height push-up custom-link" id="g3" v-on:click="showModal('img3')">
          <img
            id="img3"
            src="../assets/cynthia.jpg"
            alt="Cynthia studerar filosofi vid universitetet i Imo området. Hon förlorade sin mamma 2008 till en okänd sjukdom. Sjukdomen upptäcktes och diagnostiserades aldrig. 2010 förlorade hon även sin pappa till levercirros. Hon har fått hjälp för att kunna avsluta sina studier."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img3"
            src="../assets/cynthia.jpg"
            alt="Cynthia is studying philosophy at the University of Imo state. She lost her mother in 2008 to an unknown illness. The illness was never detected nor diagnosed. In 2010, she tragically also lost her father to liver cirrhosis. She has been financially aided to finish her studies."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />
          <figcaption>
            <p>Cynthia</p>
          </figcaption>
        </figure>
      </div>
      <div class="row mb-2">
        <figure class="col-12 col-sm-auto grid-height push-up custom-link mb-2 mb-sm-0" id="g4" v-on:click="showModal('img4')">
          <img
            id="img4"
            src="../assets/danjuma.jpg"
            alt="Danjuma är en sistaårsstudent vid det statliga universitetet i Nasarawa, han studerar offentlig förvaltning. Han förlorade tragiskt båda sina föräldrar i hjärtsvikt. Danjuma har fått kapitalstöd för att kunna gå färdigt sin utbildning."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img4"
            src="../assets/danjuma.jpg"
            alt="Danjuma is a final year student at the State University of Nasarawa, he is studying public administration. He tragically lost both his parents to heart failure. Danjuma has received economic support in order to finish his education."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />

          <figcaption>
            <p>Danjuma</p>
          </figcaption>
        </figure>
        <figure
          class="col-12 col-sm-auto grid-height mx-0 mx-sm-2 mb-2 mb-sm-0 push-up custom-link"
          id="g5"
          v-on:click="showModal('img5')"
        >
          <img
            id="img5"
            src="../assets/Handover.jpg"
            alt="Chinasa är fjorton år gammal och lider av höftledsnekros, och har utvecklat svår värk i både kropp och ben. Hon har fått pengar till en moped så att hon kan ta sig till b la skolan."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img5"
            src="../assets/Handover.jpg"
            alt="Chinasa is fourteen years old and suffers from sickle cell anemia, and has developed severe pain in both body and leg. She has received money for a moped so she can get to school."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />

          <figcaption>
            <p>Chinasa</p>
          </figcaption>
        </figure>
        <figure class="col-12 col-sm-auto grid-height push-up custom-link" id="g6" v-on:click="showModal('img6')">
          <img
            id="img6"
            src="../assets/nnamdi.jpg"
            alt="Nnamdi läser internationella relationer på ett universitet i området Imo. Där måste de studenter som inte är födda i området betala mer än de studenter som är födda där. Han är son till en änka som har ekonomiska problem efter hennes makes bortgång. Nnamdi har fått ekonomisk hjälp för att kunna avsluta sina studier."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img6"
            src="../assets/nnamdi.jpg"
            alt="Nnamdi studies international relations at a university in the Imo state. There, the students who are not born in the state have to pay more than the students who were born there. He is the son of a widow who has financial problems after her husband's passing. Nnamdi has been financially aided to finish his studies."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />
          <figcaption>
            <p>Nnamdi</p>
          </figcaption>
        </figure>
      </div>
      <div class="row mb-2">
        <figure class="col-12 col-sm-auto grid-height push-up custom-link mb-2 mb-sm-0" id="g7" v-on:click="showModal('img7')">
          <img
            id="img7"
            src="../assets/obi_twins.jpg"
            alt="De två små tvillingarna Jane och Joy är nyfödda barn till Ejike Obi från Ozubulu i sydöstra Nigeria, Ejike är en målare men har varit arbetslös i flera år på grund av att han har tagit hand om sin sjuka mamma som fick diagnosen levercirrhos, tyvärr gick hon bort sent 2019."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img7"
            src="../assets/obi_twins.jpg"
            alt="The two little twins Jane and Joy are newborns to Ejike Obi from Ozubulu in southeastern Nigeria, Ejike is a painter but has been unemployed for several years due to taking care of his sick mother who was diagnosed with liver cirrhosis, unfortunately she passed away late 2019."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />
          <figcaption>
            <p v-if="this.$store.state.isSwedish">Obi tvillingarna, Jane och Joy</p>
            <p v-if="!this.$store.state.isSwedish"> The Obi twins, Jane and Joy </p>
          </figcaption>
        </figure>
        <figure
          class="col-12 col-sm-auto grid-height mx-0 mx-sm-2 mb-2 mb-sm-0 push-up custom-link"
          id="g8"
          v-on:click="showModal('img8')"
        >
          <img
            id="img8"
            src="../assets/favour.jpg"
            alt="Favour är en 10 år gammal flicka som drömmer om att bli sjuksköterska när hon blir stor. Hon har fått hjälp för att fortsätta kunna gå i skolan, då hennes föräldrar tampas med ekonomiska problem."
            style="display:none;"
            v-if="this.$store.state.isSwedish"
          />
          <img
            id="img8"
            src="../assets/favour.jpg"
            alt="Favour is a 10 year old girl who dreams about becoming a nurse when she grows up. She has been given aid in order to continue studying, as her parents struggle with financial problems."
            style="display:none;"
            v-if="!this.$store.state.isSwedish"
          />

          <figcaption>
            <p>Favour</p>
          </figcaption>
        </figure>
        <figure class="col-12 col-sm-auto grid-height push-up custom-link" id="g9" v-on:click="showModal('img9')">
          <img id="img9" src="../assets/jane.jpg" alt="Jane är en 6 år gammal flicka som drömmer om att få jobba med biokemi. Hon har fått hjälp för att fortsätta kunna gå i skolan, pga att hennes föräldrar har ekonomiska problem." style="display:none;" v-if="this.$store.state.isSwedish"/>
          <img id="img9" src="../assets/jane.jpg" alt="Jane is a 6 year old girl who dreams about working with biochemistry. She has been given aid in order to continue with her studies, as her parents are having financial problems." style="display:none;" v-if="!this.$store.state.isSwedish"/>
          <figcaption>
            <p>Jane</p>
          </figcaption>
        </figure>
      </div>
    </div>
    <div id="myModal" class="modal" v-on:click="closeModal()">
      <!-- The Close Button -->
      <span class="close" v-on:click="closeModal()">&times;</span>

      <!-- Modal Content (The Image) -->
      <div id="modal-content"></div>

      <!-- Modal Caption (Image Text) -->
      <div id="caption"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false
    };
  },
  methods: {
    showModal(imageId) {
      this.modal = true;
      let modal = document.getElementById("myModal");
      let modalImg = document.getElementById(imageId);
      let captionText = document.getElementById("caption");
      let content = document.getElementById("modal-content");
      let span = document.getElementsByClassName("close")[0];
      console.log("modal: ", modal);
      console.log("modalImg: ", modalImg);
      console.log("captionText: ", captionText);
      console.log("span: ", span);
      modal.style.display = "block";
      modalImg.src = document.getElementById(imageId).src;
      captionText.innerHTML = document.getElementById(imageId).alt;
      content.innerHTML = '<img class="myImg" style="max-width: 75%;" src=' + modalImg.src + ">";
      console.log("content:", content);
    },
    closeModal() {
      this.modal = false;
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&display=swap");

#shadow {
  box-shadow: 3px 3px 3px #565756;
  font-family: "Quicksand", sans-serif;
}
.grid-height {
  height: 35vh;
  flex-grow: 1;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.gallery-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
figure {
  margin: 0;
  overflow: hidden;
  position: relative;
}
figcaption {
  position: absolute;
  display: block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  background: #d6930d;
  padding: 0.5vw;
  z-index: 100;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  left: 0;
  -moz-transform: translate3d(-100%, -50%, 0);
  -webkit-transform: translate3d(-100%, -50%, 0);
  transform: translate3d(-100%, -50%, 0);
  opacity: 0;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.push-up img {
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.push-up figcaption {
  top: 100%;
  opacity: 1;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.push-up:hover figcaption {
  -moz-transform: translate3d(0, -100%, 0);
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  box-shadow: 0px -2px 28px rgba(0, 0, 0, 0.3);
  overflow: visible;
}
figcaption p {
  color: white;
  text-align: center;
  font-size: 85%;
}
.custom-link {
  border-radius: 5px;
  cursor: pointer;
  /*transition: 0.3s;*/
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
#modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
#g1 {
  background-image: url(../assets/chidera.jpg);
}
#g2 {
  background-image: url(../assets/chimaobi.jpg);
}
#g3 {
  background-image: url(../assets/cynthia.jpg);
}
#g4 {
  background-image: url(../assets/danjuma.jpg);
}
#g5 {
  background-image: url(../assets/Handover.jpg);
}
#g6 {
  background-image: url(../assets/nnamdi.jpg);
}
#g7 {
  background-image: url(../assets/obi_twins.jpg);
}
#g8 {
  background-image: url(../assets/favour.jpg);
}
#g9 {
  background-image: url(../assets/jane.jpg);
}
@media (max-width: 1024px) {
figcaption{
  display: none;
}
}
</style>