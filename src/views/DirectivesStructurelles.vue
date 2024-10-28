<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 6 : Les directives structurelles</h2>
      <div class="lesson">
        <h3>
          Leçon 31 : Affichage conditionnel avec les directives v-if, v-else et
          v-else-if
        </h3>
        <button @click="toggle = !toggle">Toggle</button>
        <p v-if="toggle">Hello World</p>
        <input type="text" v-model="letter" />
        <p v-if="letter === 'A'">A</p>
        <p v-else-if="letter === 'B'">B</p>
        <p v-else>Autre</p>
      </div>
      <div class="lesson">
        <h3>Leçon 32 : Les directives v-show et v-pre</h3>
        <button @click="toggle2 = !toggle2">Toggle</button>
        <P v-show="toggle2">Bonjour</P>
        <p v-pre>{{ toggle }}</p>
      </div>
      <div class="lesson">
        <h3>Leçon 33 : La directive v-for</h3>
        <ul>
          <li v-for="(fruit, i) in fruits" :key="i">
            {{ i + 1 }} - {{ fruit }}
          </li>
        </ul>
        <ul>
          <li v-for="({ name, grades }, i) in users" :key="name">
            {{ i + 1 }} - {{ name }}, grades:
            <span v-for="(grade, i) of grades.join(',\t')" :key="i">{{
              grade
            }}</span>
          </li>
        </ul>
        <ul>
          <span>Car</span>
          <li v-for="(value, key, i) of car" :key="i">
            {{ key }} : {{ value }}
          </li>
        </ul>
        <ul>
          <li v-for="i in 5" :key="i">{{ i }} - Bonjour</li>
        </ul>
      </div>
      <div class="lesson">
        <h3>
          Leçon 34 : Directive v-for, détection des changements et combinaison
          avec v-if
        </h3>
        <ul>
          <!-- template ne sera pas afficher dans le html -->
          <template v-for="{ id, name } of users" :key="id">
            <li v-if="name.toLocaleLowerCase() !== 'tintin'">{{ id }} - {{ name }}</li>
          </template>
        </ul>
      </div>
      <div class="lesson">
        <h3>Leçon 35 : Les directives v-once et v-memo</h3>
        <h4 v-once >{{ title }}</h4>
        <h4 v-memo="[title]">{{ title }}</h4>
        <input type="text" v-model="paragraphe">
        <p>{{ paragraphe }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const letter = ref('')
const toggle = ref(false) // c'est pas seulement true ou false mais quelque chose qui st convertissale en boolean
const toggle2 = ref(false)

// v-for
const fruits = reactive(['Fraises 🍓 ', 'Pomme 🍎 ', 'Kiwi 🥝 '])

const users = reactive([
  { name: 'Tintin', grades: [14, 15, 18], id: 1 },
  { name: 'Bobi', grades: [4, 1, 8], id: 2 },
  { name: 'Joel', grades: [145, 7, 98], id: 3 },
])
const car = reactive({
  wheel: 4,
  price: 3000,
})

//petit rappel de deconstruction
const obj = {
  x: 'y',
  z: 'q',
}
const { x } = obj

console.log(x)

const paragraphe = ref("");
const title = ref("Je suis un titre h4")
</script>

<style scoped>
input {
  color: black;
}
</style>
