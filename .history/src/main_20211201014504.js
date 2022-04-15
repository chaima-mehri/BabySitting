import Vue from 'vue'
import App from './App.vue'
import vueCookies from 'vue-cookies';


Vue.config.productionTip = false
Vue.use(vueCookies);
const vueinstance = new Vue({
  
  render: h => h(App)
})
vueinstance.$mount('#app')