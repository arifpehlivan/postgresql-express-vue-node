import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/professor/courses',
    name: 'Professor courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/professor/Courses.vue')
  },
  ,
  {
    path: '/professor/assignments',
    name: 'Professor assignments',
    component: () => import(/* webpackChunkName: "about" */ '../views/professor/Assignments.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
