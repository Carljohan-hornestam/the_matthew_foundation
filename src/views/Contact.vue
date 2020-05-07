<template>
  <div class="container pt-5 d-flex justify-content-center" id="contact_form">
    <div class="row bg-white py-3 pb-3 w-75" id="shadow">
      <div class="col text-left pl-4 pt-4" id="contact_info">
        <h4 id="contactinfo_text">Kontaktinformation</h4>
        <ul style="list-style: none; padding: 0;">
          <li class="mb-2 mt-4">
            <strong>Matthew Foundation</strong>
          </li>
          <li class="mb-2">XXXX-XX-XX-XX</li>
          <li class="mb-2">Adress-placeholder</li>
          <li class="mb-2">Email-placeholder</li>
        </ul>
      </div>
      <div class="col text-left pl-5 pt-4" id="donate_info">
        <h4 id="donateinfo_text">Hur du donerar</h4>
        <ul style="list-style: none; padding: 0;">
          <li class="mb-2 mt-4">
            <strong>Matthew Foundation</strong>
          </li>
          <li class="mb-2">XXXX-XX-XX-XX</li>
          <li class="mb-2">Adress-placeholder</li>
          <li class="mb-2">Email-placeholder</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
//import ContactForm from '@/components/ContactForm.vue';
export default {
  /*name: 'Contact',
  components: {
    ContactForm,
  
  
}
*/
  data() {
    return {};
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Quicksand:wght@700&family=Noto+Sans&display=swap");


#shadow {
  box-shadow: 3px 3px 3px #565756;
}
#contact_info {
  font-family: "Noto Sans", sans-serif;
}
#donate_info {
  padding-left: 10em;
  border-left: 2px solid #d6930d;
  font-family: "Noto Sans", sans-serif;
}
#donateinfo_text {
  font-family: "Quicksand", sans-serif;
}
#contactinfo_text {
  font-family: "Quicksand", sans-serif;
}
</style>