import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
