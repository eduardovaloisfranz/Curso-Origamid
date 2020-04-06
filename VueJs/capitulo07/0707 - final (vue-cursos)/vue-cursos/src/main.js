import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.prototype.$http = axios
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueAxios)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
