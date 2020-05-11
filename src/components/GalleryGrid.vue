<template>
  <div class="container pt-5 d-flex justify-content-center">
    <div class="bg-white pb-3 w-75 p-5" id="shadow">
      <div class="row mb-2">
        <figure class="col grid-height push-up custom-link" id="g1" v-on:click="showModal('img1')">
          <img id="img1" src="../assets/chidera.jpg" alt="Pojken har kämpat mot bland annat hjärtproblem sen födseln. Fått vårdstöd." style="display:none;" v-if="this.$store.state.isSwedish">
          <img id="img1" src="../assets/chidera.jpg" alt="The boy has been fighting heart condition since he was born. Been given economic support for healthcare." style="display:none;" v-if="!this.$store.state.isSwedish">
          <figcaption>
            <p>Chidera</p>
          </figcaption>
        </figure>
        <figure class="col grid-height mx-2 push-up custom-link" id="g2" v-on:click="showModal('img2')">
          <img id="img2" src="../assets/chimaobi.jpg" alt="Chimaobi" style="display:none;">
          <figcaption>
            <p>Chimaobi</p>
          </figcaption>
        </figure>
        <figure class="col grid-height push-up custom-link" id="g3" v-on:click="showModal('img3')">
          <img id="img3" src="../assets/cynthia.jpg" alt="Fått kapitalstöd för att kunna avsluta sin utbildning. Hon läser filosofi." style="display:none;" v-if="this.$store.state.isSwedish">
          <img id="img3" src="../assets/cynthia.jpg" alt="Recieved economic support in order to finish her education. She is currently studying philosophy." style="display:none;" v-if="!this.$store.state.isSwedish">
          <figcaption>
            <p>Cynthia</p>
          </figcaption>
        </figure>
      </div>
      <div class="row mb-2">
        <figure class="col grid-height push-up custom-link" id="g4" v-on:click="showModal('img4')">
          <img id="img4" src="../assets/danjuma.jpg" alt="Danjuma" style="display:none;">
          <figcaption>
            <p>Danjuma</p>
          </figcaption>
        </figure>
        <figure class="col grid-height mx-2 push-up custom-link" id="g5" v-on:click="showModal('img5')">
          <img id="img5" src="../assets/Handover.jpg" alt="Chinasa" style="display:none;">
          <figcaption>
            <p>Chinasa</p>
          </figcaption>
        </figure>
        <figure class="col grid-height push-up custom-link" id="g6" v-on:click="showModal('img6')">
          <img id="img6" src="../assets/nnamdi.jpg" alt="Fått kapitalstöd för att kunna avsluta sin utbildning. Läser internationella relationer." style="display:none;" v-if="this.$store.state.isSwedish">
          <img id="img6" src="../assets/nnamdi.jpg" alt="Recieved economic support in order to finish his education. He is currently studying international relations." style="display:none;" v-if="!this.$store.state.isSwedish">
          <figcaption>
            <p>Nnamdi</p>
          </figcaption>
        </figure>
      </div>
      <div class="row mb-2">
        <figure class="col grid-height push-up custom-link" id="g7" v-on:click="showModal('img7')">
          <img id="img7" src="../assets/obi-twins.jpg" alt="Obi tvillingarna, Jane och Joy" style="display:none;">
          <figcaption>
            <p>Obi tvillingarna, Jane och Joy</p>
          </figcaption>
        </figure>
        <figure class="col grid-height mx-2 push-up custom-link" id="g8" v-on:click="showModal('img8')">
          <img id="img8" src="../assets/favour.jpg" alt="Favour" style="display:none;">
          <figcaption>
            <p>Favour</p>
          </figcaption>
        </figure>
        <figure class="col grid-height push-up custom-link" id="g9" v-on:click="showModal('img9')">
          <img id="img9" src="../assets/jane.jpg" alt="Jane" style="display:none;">
          <figcaption>
            <p>Jane</p>
          </figcaption>
        </figure>
      </div>
    </div>
    <div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close" v-on:click="closeModal()">&times;</span>

  <!-- Modal Content (The Image) -->
  <div id="modal-content">hej</div>

  <!-- Modal Caption (Image Text) -->
  <div id="caption">hej</div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
    showModal(imageId) {
      let modal = document.getElementById("myModal")
      let modalImg = document.getElementById(imageId)
      let captionText = document.getElementById("caption")
      let content = document.getElementById("modal-content")
      let span = document.getElementsByClassName("close")[0]
            console.log("modal: ", modal)
            console.log("modalImg: ", modalImg)
            console.log("captionText: ", captionText)
            console.log("span: ", span)
      modal.style.display = "block";
      modalImg.src = document.getElementById(imageId).src
      captionText.innerHTML = document.getElementById(imageId).alt
      content.innerHTML = "<img class=\"myImg\" src=" + modalImg.src + ">"
      console.log("content:", content)
      
    },
    closeModal() {
      let modal = document.getElementById("myModal")
      modal.style.display = "none";
    }
  }
};
</script>

<style scoped>
#shadow {
  box-shadow: 3px 3px 3px #565756;
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
    height:100%;
    width:100%;
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
  font-size: 120%;
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
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
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
#modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
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
</style>