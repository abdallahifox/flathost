import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import router from './routes';

/* MATERIAL */

Vue.use(VueMaterial);



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
