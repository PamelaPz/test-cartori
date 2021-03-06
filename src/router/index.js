import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/LogIn.vue'
import Pacientes from '../views/HomePaciente.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/paciente',
    name: 'HomePaciente',
    component: Pacientes
  },
  {
    path: '/home',
    name: 'HomeDr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeDr.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
