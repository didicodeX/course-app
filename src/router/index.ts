import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import AboutView from '../views/AboutView.vue'
import StyleVue from '@/views/StyleVue.vue'
import InteractionDom from '@/views/InteractionDom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView,
    },
    {
      path: '/courses/style-et-classe',
      name: 'style-en-Vuejs',
      component: StyleVue
    },
    {
      path: '/courses/DOM',
      name: 'DOM',
      component: InteractionDom
    },

  ],
})

export default router
