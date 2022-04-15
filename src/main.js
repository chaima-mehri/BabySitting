import Vue from 'vue'
import App from './App.vue'
import vueCookies from 'vue-cookies';
import router from './router'


Vue.config.productionTip = false
Vue.use(vueCookies);
const vueinstance = new Vue({
  router,
  render: h => h(App)
})
vueinstance.$mount('#app')