import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuer from 'vue-resource'
Vue.use(Vuer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
