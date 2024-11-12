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
        <div
          class="mb-20 d-flex w100 justify-content-center align-items-center"
        >
          <input
            v-model="input"
            @keydown.enter="addItem"
            type="text"
            class="flex-fill mr-20"
          />
          <button class="btn btn-primary mr-20" @click="addItem">
            Ajouter
          </button>
        </div>
        <div class="container">
          <TransitionGroup tag="ul">
            <li
              :style="`--i:${index}`"
              class="w-100 card mb-10"
              v-for="(item, index) in items"
              @click="removeItem(index)"
              :key="item"
            >
              {{ item }}
            </li>
          </TransitionGroup>
        </div>
      </div>

      <div class="p-20">
    <div class="mb-20 d-flex w100 justify-content-center align-items-center">
      <button class="btn btn-primary mr-20" @click="add">Ajouter</button>
      <button class="btn btn-primary" @click="remove">Enlever</button>
    </div>
    <div class="container">
      <TransitionGroup name="list" tag="ul">
        <li class="mb-10 card" v-for="number in numbers" :key="number">
          {{ number }}
        </li>
      </TransitionGroup>
    </div>
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
//=======================================================
const input = ref('')
const items = ref<string[]>(['Pomme', 'Fraise', 'Poire'])

function addItem() {
  items.value.push(input.value)
  input.value = ''
}

function removeItem(index: number) {
  items.value.splice(index, 1)
}

//=======================================================

const nextNum = ref(10);
const numbers = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

function randomIndex() {
  return Math.floor(Math.random() * items.value.length);
}

function add() {
  numbers.value.splice(randomIndex(), 0, nextNum.value++);
}

function remove() {
  numbers.value.splice(randomIndex(), 1);
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
//===================================
ul{
  margin-bottom: 100px;
}
li {
  cursor: pointer;
  background-color: #f1f1f1;
  color: #333;
  padding: 10px 12px;
  border-radius: 5px;
}
.container {
  position: relative;
}

.v-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}

.v-leave-active {
  width: 100%;
  transition: all .4s;
  position: absolute;
}

.v-move,
.v-enter-active {
  transition: all 0.4s;
  // transition-delay: calc(var(--i) * 0.2s);
}

.v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
//===================================
li {
  cursor: pointer;
  width: 100%;
}

.container {
  position: relative;
  padding: 0;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-active {
  position: absolute;
}
</style>
