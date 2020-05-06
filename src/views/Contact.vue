<template>
  <div class="container pt-5 d-flex justify-content-center" id="contact_form">
    <div class="bg-white pb-3 w-75" id="shadow" >
      <b-form @submit="onSubmit" @reset="onReset" class= "px-5">
        <b-form-group
          class="pt-3 pb-4 text-left"
          id="input-group-2"
          label="Namn"
          label-for="input-2"
        >
          <b-form-input id="input-2" v-model="form.name" required placeholder="Skriv ditt namn:"></b-form-input>
        </b-form-group>
        <b-form-group class="text-left pb-4" id="input-group-1" label="Email" label-for="input-1">
          <b-form-input
            id="input-1"
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
            v-model="form.message"
            placeholder="Skriv ditt meddelande:"
            rows="8"
            max-rows="8"
          ></b-form-textarea>
        </b-form-group>

        <div class="buttons mt-3 pb-2">
          <b-button id="reset_btn" class="mr-2" type="reset">Reset</b-button>
          <b-button id="confirm_btn" class="ml-2" type="submit">Submit</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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