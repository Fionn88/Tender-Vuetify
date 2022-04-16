import Vue from 'vue'
import VueRouter from 'vue-router'
import TenderSelect from '../views/TenderSelect.vue'
import TenderDetail from '../views/TenderDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TenderSelect',
    component: TenderSelect,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tenderdetail',
    name: 'TenderDetail',
    props: true,
    component: TenderDetail
  }
]

const router = new VueRouter({
  routes
})


export default router
