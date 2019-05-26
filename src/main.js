import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faDatabase
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faHome, faDatabase)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')