import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/apps', component: () => import('../views/AppsView.vue') },
  { path: '/skills', component: () => import('../views/SkillsView.vue') },
  { path: '/resume', component: () => import('../views/ResumeView.vue') },
  { path: '/contact', component: () => import('../views/ContactView.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
