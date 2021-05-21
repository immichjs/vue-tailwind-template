import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import Vuex from 'vuex'

import store from './store'

import './assets/css/index.css'

Vue.use(Vuex)
Vue.use(VueMeta, { refreshOnceOnNavegation: true })
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
