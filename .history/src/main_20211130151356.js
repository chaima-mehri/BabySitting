import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const vueinstance = new Vue({
  render: h => h(App),
})
vueinstance.$mount('#app')