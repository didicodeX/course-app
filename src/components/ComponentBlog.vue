<template>
  <!-- <button @click="emit('bigger', props.fontSize, 5)">+</button> -->
  <button @click="emit('bigger', 5)">+</button>
  <button @click="emit('makeSmaller')">-</button>
  <h3>Un titre d'article</h3>
  <p :style="{ fontSize: props.fontSize + 'px' }">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat similique
    ea animi minima ducimus quo blanditiis sequi sed, facere possimus
    reprehenderit id explicabo quaerat aspernatur repellendus rem, consequuntur
    culpa illo.
  </p>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'

// Par defaut les propriete sont en read only
const props = defineProps<{
  fontSize: number
}>()

// console.log(props.fontSize)
// const emit = defineEmits(['bigger']);
// const emit = defineEmits({
//   bigger: (fontSize: number, inc:number) => {
//     console.log(inc,fontSize);

//     return fontSize > 30 ? false : true;
//   },
//   // bigger: (inc:number) => {
//   //   return true;
//   // }
// })

//synatxe plus elegante
const emit = defineEmits<{
  (e: 'bigger', inc: number): void
  (e: 'makeSmaller'): void
}>()

//Choisir ce qui peut etre exposer

const count = ref(15)
const arrTest = reactive([1, 2, 3])
function display() {
  console.log('Display')
}

defineExpose<{ count: Ref<number>; arrTest: number[]; display: () => void }>({
  count,
  arrTest,
  display,
})
</script>

<style scoped lang="scss"></style>
