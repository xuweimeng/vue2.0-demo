import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import About from '../components/About'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/hello', component: Hello
  }, {
    path: '/about', component: About
  }, {
    path: '*', redirect: '/Hello'
  }]
})
export default router
