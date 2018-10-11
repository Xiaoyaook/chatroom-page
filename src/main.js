import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import api from './http/index'

// 引入Vuetify的css文件
import 'vuetify/dist/vuetify.min.css'
// 包含Material Design图标
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.config.productionTip = false

Vue.use(Vuetify)

// 可以直接在 Vue 原型上调用 $api
Vue.use(api)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
