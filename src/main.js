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
import Admin from "./page/Admin.vue";
import GoodsList from "./page/GoodsList.vue";
import CategoryList from "./page/CategoryList.vue";
import Order from "./page/Order.vue";
import GoodsAdd from "./page/GoodsAdd.vue";
import GoodsEdit from "./page/GoodsEdit.vue";

// 全局注册组件
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter)

var routes=[
  {
    path:"/",
    redirect:"/admin/goods-list",
    meta:"首页"
  },
  {
    path:"/login",
    component:Login,
    meta:"登录"
  },
  {
    path:"/admin",
    component:Admin,
    meta:"后台管理",
    children:[
      {
        path:"goods-list",
        component:GoodsList,
        meta:"商品列表"
      },
      {
        path:"goods-add",
        component:GoodsAdd,
        meta:"添加商品"
      },
      {
        path:"goods-edit/:id",
        component:GoodsEdit,
        meta:"编辑商品"
      },
      {
        path:"category-list",
        component:CategoryList,
        meta:"栏目列表"
      },
      {
        path:"order-list",
        component:Order,
        meta:"订单管理"
      }
    ]
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
