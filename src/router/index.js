import Vue from 'vue'
import VueRouter from 'vue-router'
import collections from '../views/collections.vue'
import men from '../views/men.vue'
import women from '../views/women.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/collection',
    name: 'collectionComponent',
    component: collections
  },
  {
    path: '/men',
    name: 'menComponent',
    component: men
  },
  {
    path: '/women',
    name: 'womenComponent',
    component: women
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
