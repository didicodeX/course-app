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
import FormulaireVue from '@/views/FormulaireVue.vue'
import HTTPSRequest from '@/views/HTTPSRequest.vue'
import ComposantsNatifs from '@/views/ComposantsNatifs.vue'
import ComposablesDirectivesPlugins from '@/views/ComposablesDirectivesPlugins.vue'
import AnimationsVue from '@/views/AnimationsVue.vue'
import VueRouter from '@/views/VueRouter.vue'
import PiniaVue from '@/views/PiniaVue.vue'
import MiseEnProduction from '@/views/MiseEnProduction.vue'
import AuthentificationJWT from '@/views/AuthentificationJWT.vue'

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
    {
      path: '/courses/Formulaires',
      name: 'Formulaires',
      component: FormulaireVue
    },
    {
      path: '/courses/HTTP',
      name: 'HTTP',
      component: HTTPSRequest
    },
    {
      path: '/courses/Composants-natifs',
      name: 'Composants-natifs',
      component: ComposantsNatifs
    },
    {
      path: '/courses/Composables-directives-plugins',
      name: 'Composables-directives-plugins',
      component: ComposablesDirectivesPlugins
    },
    {
      path: '/courses/Animations',
      name: 'Animations',
      component: AnimationsVue
    },
    {
      path: '/courses/Vue-router',
      name: 'Vue-router',
      component: VueRouter
    },
    {
      path: '/courses/Pinia',
      name: 'Pinia',
      component: PiniaVue
    },
    {
      path: '/courses/Mise-en-production',
      name: 'Mise-en-production',
      component: MiseEnProduction
    },
    {
      path: '/courses/Authentification-JWT',
      name: 'Authentification-JWT',
      component: AuthentificationJWT
    },
  ],
})

export default router
