<template>
  <!-- V-model -->
  <!-- <input :value="modelValue" @input="updateValue" type="text"> -->
  <!-- <h4>Question ?</h4>
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
  /> -->
  <!-- ------------------------------ -->
  <div class="container">
    <div class="title">
      <slot name="header"></slot>
    </div>
    <section>
      <slot name="content"></slot>
    </section>
    <div class="cta">
      <slot name="cta"></slot>
    </div>
  </div>
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

//==========================================
// defineProps<{
//   agree: boolean
//   name: string
// }>()
// const emit = defineEmits<{
//   (e: 'update:agree', value: boolean): void
//   (e: 'update:name', value: string): void
// }>()

// function updateValue(event: MouseEvent, value: boolean): void {
//   emit('update:agree', value)
// }

//===============lesson 58 =============

//================ lesson 59 ==============
//slot
</script>

<style scoped lang="scss">
.active {
  background-color: red;
}
.container {
  border: 1px solid #222;
  border-radius: 9px;
  padding: 20px;
  width: 500px;
  :slotted(h1) {
    color: crimson;
  }
}
input {
  color: #333;
}
</style>
