import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import AboutView from '../views/AboutView.vue'
import StyleVue from '@/views/StyleVue.vue'
import InteractionDom from '@/views/InteractionDom.vue'
import ComposantReactif from '@/views/ComposantReactif.vue'
import AvanceesComposant from '@/views/AvanceesComposant.vue'
import DirectivesStructurelles from '@/views/DirectivesStructurelles.vue'
import BasesComposants from '@/views/BasesComposants.vue'

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
      path: '/courses/DOM',
      name: 'DOM',
      component: InteractionDom
    },
    {
      path: '/courses/Composants-reactifs',
      name: 'Composants-reactifs',
      component: ComposantReactif
    },
    {
      path: '/courses/style-et-classe',
      name: 'style-en-Vuejs',
      component: StyleVue
    },
    {
      path: '/courses/Directives-structurelles',
      name: 'Directives-structurelles',
      component: DirectivesStructurelles
    },
    {
      path: '/courses/Bases-des-composants',
      name: 'Bases-des-composants',
      component: BasesComposants
    },
    {
      path: '/courses/Fonctionnalités-avancées-des-composants',
      name: 'Fonctionnalités-avancées-des-composants',
      component: AvanceesComposant
    },
  ],
})

export default router
