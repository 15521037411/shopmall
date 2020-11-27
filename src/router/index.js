import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=>import('../views/home/home') 
const Category =()=>import('../views/category/category') 
const Shopcar =()=>import('../views/shopcar/shopcar') 
const Me =()=>import('../views/me/me') 

//Vue.use(VueRouter);

const routes = [
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/category',
        component:Category
      },
      {
        path:'/me',
        component:Me
      },
      {
        path:'/shopcar',
        component:Shopcar
      }
    ]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router