import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueSimpleAlert from "vue-simple-alert";
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

Vue.use(VueSimpleAlert);

import * as update from "./update";
import axios from "axios";

axios.interceptors.response.use((response) => {
  update.update_from_cookies();
  return response;
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
