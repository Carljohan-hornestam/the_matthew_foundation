import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue, IconsPlugin, DropdownPlugin, TablePlugin, FormPlugin, FormInputPlugin, FormSelectPlugin,
  FormCheckboxPlugin, FormDatepickerPlugin, FormGroupPlugin, InputGroupPlugin , ButtonPlugin, 
  CalendarPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue, IconsPlugin, DropdownPlugin, TablePlugin, FormPlugin, FormInputPlugin, FormSelectPlugin,
  FormCheckboxPlugin, FormDatepickerPlugin, FormGroupPlugin, InputGroupPlugin , ButtonPlugin, 
  CalendarPlugin, $)


library.add(faGlobe);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
