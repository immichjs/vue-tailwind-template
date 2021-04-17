import Vue from 'vue'
import App from './App.vue'
import title from './assets/mixins/title'

import './assets/css/index.css'
import 'tailwindcss/tailwind.css'

Vue.mixin(title)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
