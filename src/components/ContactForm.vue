<template>
  <div class="container pt-5 d-flex justify-content-center" id="contact_form">
    <div class="bg-white pb-3 w-75" id="shadow">
      <b-form class="px-5" @reset="onReset" @submit="onSubmit" v-if="this.$store.state.isSwedish">
        <b-form-group
          class="pt-3 pb-2 pb-sm-4 text-left"
          id="input-group-2"
          name="name"
          label="Namn"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            :state="nameValidation"
            required
            placeholder="Skriv ditt namn:"
          ></b-form-input>
          <b-form-invalid-feedback
            :state="nameValidation"
            v-if="this.form.name.length > 45"
          >Fältet får ej innehålla fler än 45 tecken.</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="text-left pb-2 pb-sm-4" id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
            name="email"
            v-model="form.email"
            :state="mailValidation"
            type="email"
            required
            placeholder="Skriv din email:"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-left pb-2 pb-sm-4"
          id="input-group-1"
          label="Meddelande"
          label-for="input-1"
        >
          <b-form-textarea
            id="textarea"
            name="msg"
            v-model="form.message"
            :state="this.form.message.length < 500 && this.form.message.length > 10"
            placeholder="Skriv ditt meddelande:"
            required
            rows="8"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>

        <div class="buttons mt-3 pb-2">
          <b-button id="reset_btn" class="mr-2" type="reset">Rensa</b-button>
          <b-button id="confirm_btn" class="ml-2" type="submit">Skicka</b-button>
        </div>
      </b-form>
      <b-form
        class="px-5"
        @reset="onReset"
        @submit="onSubmit"
        v-if="!this.$store.state.isSwedish"
      >
        <b-form-group
          class="pt-3 pb-2 pb-sm-4 text-left"
          id="input-group-2"
          name="name"
          label="Name"
          label-for="input-2"
        >
          <b-form-input id="input-2" v-model="form.name" :state="nameValidation" required placeholder="Enter your name:"></b-form-input>
          <b-form-invalid-feedback
            :state="nameValidation"
            v-if="this.form.name.length > 45"
          >The field can not contain more than 45 characters.</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group class="text-left pb-2 pb-sm-4" id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
            name="email"
            v-model="form.email"
            :state="mailValidation"
            type="email"
            required
            placeholder="Enter your email:"
          ></b-form-input>
        </b-form-group>

        <b-form-group class="text-left pb-2 pb-sm-4" id="input-group-1" label="Message" label-for="input-1">
          <b-form-textarea
            id="textarea"
            name="msg"
            v-model="form.message"
            :state="this.form.message.length < 500 && this.form.message.length > 10"
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
          <div v-if="!formValidation">
            <p v-if="this.$store.state.isSwedish">Vänligen fyll i fälten korrekt</p>
            <p v-if="!this.$store.state.isSwedish">Please fill out the fields correctly</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const querystring = require("querystring");

export default {
  data() {
    return {
      sent: false,
      formValidation: true,
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
      console.log(querystring.stringify(this.form));
      if (this.nameValidation && this.mailValidation && this.messageValidation) {
        this.formValidation = true
      axios
        .post("contactaction.php", querystring.stringify(this.form))
        .then((this.sent = true));
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      }
      else {
        this.formValidation = false
        this.sent = false
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
    }
  },
  computed: {
    nameValidation() {
      return this.form.name.length < 45 && this.form.name.length > 0;
    },
    mailValidation() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.form.email) && this.form.email.length < 45;
    },
    messageValidation() {
      return this.form.message.length < 500 && this.form.message.length > 10;
    }
  }
};
</script>
<style scoped>
#contact_form {
  font-family: "Quicksand", sans-serif;
}
#shadow {
  box-shadow: 3px 3px 3px #565756;
}
#reset_btn {
  background-color: #8a1216;
}
#confirm_btn {
  background-color: #138032;
}
@media (max-width: 600px) {
#confirm_btn{
  font-size: 15px;
}
#reset_btn{
  font-size: 15px;
}
}
</style>