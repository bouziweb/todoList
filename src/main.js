import Vue from 'vue'
import App from './App.vue'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)




new Vue({
  el: '#app',
  VueSwal,
  render: h => h(App)
})
