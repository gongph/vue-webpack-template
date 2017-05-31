import Vue from 'vue'
import VueRouter from 'vue-router'

import { router } from './src/router.js'
import App from './src/app.vue'

Vue.use(VueRouter)

new Vue({
  router,
  render: h => {
    return h(App)
  }
}).$mount('#app')

