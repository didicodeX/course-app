<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 16 : Les animations</h2>
      <div class="lesson">
        <h3>Leçon 100 : Introduction aux animations</h3>
        <div class="p-20">
          <button class="mb-10" @click="show = !show">
            Afficher / Masquer
          </button>
          <transition @transitionend="transitionEnd" appear name="fade">
            <p v-if="show">Je suis un paragraphe</p>
          </transition>
        </div>
      </div>
      <div class="lesson">
        <h3>Leçon 101 : Les bases des transitions</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 102 : Transitions entre plusieurs éléments</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 103 : Le composant TransitionGroup</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)

const transitionEnd = () => {
  console.log('Transition terminée')
}
</script>

<style scoped lang="scss">
// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
// .fade-enter-to,
// .fade-leave-from {
//   opacity: 1;
// }
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease-in-out;
// }

.fade-enter-active {
  animation: smallToBig 1s ease-in-out;
}

@keyframes smallToBig {
  from {
    opacity: 0;
    font-size: 5px;
  }
  to {
    opacity: 1;
    font-size: 40px;
  }
}
</style>
