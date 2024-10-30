<template>
  <!-- <input :value="modelValue" @input="updateValue" type="text"> -->
  <h4>Question ?</h4>
  <button @click="updateValue($event, true)" :class="{ active: agree }">
    Oui !
  </button>
  <button @click="updateValue($event, false)" :class="{ active: !agree }">
    Non !
  </button>
  <hr />
  <input
  :value="name"
    @input="emit('update:name', ($event.target as HTMLInputElement).value)"
    type="text"
    placeholder="Votre nom"
  />
</template>

<script setup lang="ts">
//repreduire le comportement du v-model
// defineProps<{
//   modelValue: string
// }>()

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string):void
// }>()

// function updateValue(event:Event):void {
//   const target = event.target as HTMLInputElement;
//   emit('update:modelValue',target.value)
// }

//==============================================
defineProps<{
  agree: boolean
  name: string
}>()
const emit = defineEmits<{
  (e: 'update:agree', value: boolean): void
  (e: 'update:name', value: string): void
}>()

function updateValue(event: MouseEvent, value: boolean): void {
  emit('update:agree', value)
}

//===============lesson 58 =============
</script>

<style scoped lang="scss">
.active {
  background-color: red;
}
input {
  color: #333;
}
</style>
