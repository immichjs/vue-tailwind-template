import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'

import './assets/css/index.css'

Vue.use(VueMeta, { refreshOnceOnNavegation: true })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
