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
    component: () => import(/* webpackChunkName: "table" */ '../views/Table.vue')
  },
  {
    path: '/exercice/:id',
    name: 'Exercice',
    component: () => import(/* webpackChunkName: "exercice" */ '../views/Exercice.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
