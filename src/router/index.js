import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/routerPages/home/Home'
import Label from "../components/routerPages/labels/Label";

Vue.use(Router)
const originalPush=Router.prototype.push
Router.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err=>err)
}
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/label',
    component:Label
  }
]


export default new Router({
  routes:routes,
  mode:'history'

})
