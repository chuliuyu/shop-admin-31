import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
// 引入axios
import axios from 'axios';

// 引入element-ui
import ElementUI from 'element-ui';
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';

import Login from "./page/Login.vue";
import Index from "./components/Index.vue"

// 全局注册组件
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter)

var routes=[
  {
    path:"/",
    component:Index
  },
  {
    path:"/login",
    component:Login
  }
]
 var router=new VueRouter({
   routes
 })
// 把axios绑定到vue实例的属性$axios
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
