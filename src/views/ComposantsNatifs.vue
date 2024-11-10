<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 13 : Composants natifs</h2>
      <div class="lesson">
        <h3>Leçon 86 : Introduction aux composants natifs</h3>
        <div class="butttons">
          <button @click="selectedComponent.value = components.PageA">
            Page A
          </button>
          <button @click="selectedComponent.value = components.PageB">
            Page B
          </button>
        </div>

        <KeepAlive exclude="PageA">
          <component :is="selectedComponent.value" />
        </KeepAlive>
      </div>
      <div class="lesson">
        <h3>Leçon 87 : Le composant KeepAlive</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 88 : Le composant Teleport</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 89 : Le composant Suspense</h3>
        <Suspense>
          <template #default>
            <!-- <UsersListe /> -->
            <LazyList />
          </template>
          <template #fallback>
            <p>Chargement...</p>
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageA from '@/components/ComposantNatif/PageA.vue'
import PageB from '@/components/ComposantNatif/PageB.vue'

//=================================================
// import UsersListe from '@/components/UsersListe.vue'
import { ref, type Component as C } from 'vue'

//=================================================
import { defineAsyncComponent } from 'vue';

const LazyList = defineAsyncComponent(() => import('../components/UsersListe.vue'));

const components: { [s: string]: C } = {
  PageA,
  PageB,
}

const selectedComponent = ref(PageA)
</script>

<style scoped lang="scss">
.butttons {
  display: flex;
  gap: 10px;
}
</style>
