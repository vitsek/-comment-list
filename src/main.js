import Vue from 'vue'
import App from './App.vue'
// import Wrapper_comments from './components/Wrapper_comments'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')



