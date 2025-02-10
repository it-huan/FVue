import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from '../views/LayOut/LayOut.vue'

//路由配置
const routes = [
  {
    path: '/',
    name: 'layout',
    component: LayOut,
    // redirect:"/index",
    //子路由 或 嵌套路由
    children:[
      {
        path:'/roles',
        name:'roles',
        component:()=>import("../views/pages/rolesList.vue")  //懒加载
      },
      {
        path:'/user',
        name:'user',
        component:()=>import("../views/pages/usersList.vue")  //懒加载
      },
      {
        path:'/goods',
        name:'goods',
        component:()=>import("../views/pages/goodsList.vue")  //懒加载
      }
    ]
  }
]
//生成hash路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
