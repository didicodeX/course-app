<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 5 : Le style et les classes</h2>
      <div class="lesson">
        <h3>Leçon 27 : Introduction et portée des styles</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 28 : La liaison de classes</h3>
        <p :class="{ hello: h1Class }">Bonjour le monde</p>
        <input
          type="text"
          class="input"
          :class="{ inputOngoing, inputError, inputValid }"
          v-model="input.value"
          @focus="(input.focus = true), (input.touched = true)"
          @blur="input.focus = false"
        />
        <button @click="h1Class = !h1Class">Submit</button>
      </div>
      <div class="lesson">
        <h3>Leçon 29 : La liaison de styles</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 30 : Utilisation de Sass</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
const h1Class = ref(true)

// const input = ref('')
// const focus = ref(false);
// const touched = ref(false)

const input = reactive({
  value: '',
  focus: false,
  touched: false,
})

const inputOngoing = computed(() => input.focus && input.value.length)
const inputError = computed(
  () => !input.focus && input.touched && input.value.length < 5,
)
const inputValid = computed(
  () => input.touched && !input.focus && !inputError.value,
)

console.log(inputOngoing)
</script>

<style scoped>
.hello {
  color: black;
  background-color: aliceblue;
}
.input {
  border: 2px solid #000;
  border-radius: 6px;
  padding: 10px;
  outline: 0;
  color: #000;
}
.inputOngoing {
  border-color: cyan;
}
.inputError {
  border-color: red;
}
.inputValid {
  border-color: green;
}
</style>
