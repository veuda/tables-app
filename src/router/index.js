import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table/:id',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
  },
  {
    path: '/exercice/:id',
    name: 'Exercice',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercice.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
