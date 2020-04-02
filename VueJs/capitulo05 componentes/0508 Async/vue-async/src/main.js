import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('FormularioContato', function () {
  return import('./components/FormularioContato')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
