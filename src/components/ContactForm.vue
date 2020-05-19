<template>
  <div class="container pt-5 d-flex justify-content-center" id="contact_form">
    <div class="bg-white pb-3 w-75" id="shadow" >
      <b-form class= "px-5" @reset="onReset" @submit="onSubmit" v-if="this.$store.state.isSwedish">
        <b-form-group
          class="pt-3 pb-4 text-left"
          id="input-group-2"
          name="name"
          label="Namn"
          label-for="input-2"
        >
          <b-form-input id="input-2" v-model="form.name" required placeholder="Skriv ditt namn:"></b-form-input>
        </b-form-group>
        <b-form-group class="text-left pb-4" id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
            name="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Skriv din email:"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-left pb-4"
          id="input-group-1"
          label="Meddelande"
          label-for="input-1"
        >
          <b-form-textarea
            id="textarea"
            name="msg"
            v-model="form.message"
            placeholder="Skriv ditt meddelande:"
            rows="8"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>

        <div class="buttons mt-3 pb-2">
          <b-button id="reset_btn" class="mr-2" type="reset">Rensa</b-button>
          <b-button id="confirm_btn" class="ml-2" type="submit">Skicka</b-button>
        </div>
      </b-form>
      <b-form class= "px-5" @reset="onReset" action="contactaction.php" v-if="!this.$store.state.isSwedish">
        <b-form-group
          class="pt-3 pb-4 text-left"
          id="input-group-2"
          name="name"
          label="Name"
          label-for="input-2"
        >
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter your name:"></b-form-input>
        </b-form-group>
        <b-form-group class="text-left pb-4" id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
            name="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter your email:"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-left pb-4"
          id="input-group-1"
          label="Message"
          label-for="input-1"
        >
          <b-form-textarea
            id="textarea"
            name="msg"
            v-model="form.message"
            placeholder="Enter your message"
            rows="8"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>

        <div class="buttons mt-3 pb-2">
          <b-button id="reset_btn" class="mr-2" type="reset">Reset</b-button>
          <b-button id="confirm_btn" class="ml-2" type="submit">Submit</b-button>
        </div>
      </b-form>
      <div>
      <transition name="fade" mode="out-in">
          <div v-if="sent">
              <p v-if="this.$store.state.isSwedish">Tack för ditt meddelande!</p>
              <p v-if="!this.$store.state.isSwedish">Thank you for your message!</p>
          </div>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const querystring = require("querystring");

export default {
    data() {
        return {
          sent: false,
          form: {
              name: "",
              email: "",
              message: ""
          }
        };
    },
    methods: {
      onSubmit(e) {
          e.preventDefault();
          console.log(querystring.stringify(this.form))
          axios
             .post(
                 "contactaction.php",
                  querystring.stringify(this.form)
             )
             .then(this.sent = true);
             
      },
      onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
    }
  }
};
</script>
<style scoped>
#contact_form {
  font-family: "Quicksand", sans-serif;
}
#shadow{
  box-shadow: 3px 3px 3px #565756;
}
#reset_btn {
  background-color: #8a1216;
}
#confirm_btn {
  background-color: #138032;
}
</style>