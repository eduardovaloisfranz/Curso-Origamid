import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import Livros from '@/components/Livros'

Vue.config.productionTip = false
Vue.component('Livros', Livros)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
