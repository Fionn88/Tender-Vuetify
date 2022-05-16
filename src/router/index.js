import Vue from 'vue'
import VueRouter from 'vue-router'
import TenderSelect from '../views/TenderSelect.vue'
import TenderDetail from '../views/TenderDetail.vue'
import CertificateSelect from '../views/CertificateSelect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TenderSelect',
    component: TenderSelect,
    props: true,
  },
  {
    path: '/TenderDetail',
    name: 'TenderDetail',
    props: true,
    component: TenderDetail
  },
  {
    path: '/CertificateSelect',
    name: 'CertificateSelect',
    props: true,
    component: CertificateSelect

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
  routes
})


export default router
