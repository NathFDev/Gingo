import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeginnerView from '../views/BeginnerView.vue'
import IntermediateView from '../views/IntermediateView.vue'
import ExpertView from '../views/ExpertView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/beginner',
      name: 'beginner',
      component: BeginnerView
    },
    {
      path: '/intermediate',
      name: 'intermediate',
      component: IntermediateView
    },
    {
      path: '/expert',
      name: 'expert',
      component: ExpertView
    }
  ]
})

export default router
