import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "@/router";
import store from './store'
import { sync } from 'vuex-router-sync'


Vue.config.productionTip = false
const unsync = sync(store, router)
new Vue({
  vuetify,
  router,
  store,
  unsync,
  render: h => h(App)
}).$mount('#app')
