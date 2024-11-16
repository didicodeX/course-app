<template>
  <div>
    <input v-model="input" type="text">
    <div class="buttons">
      <button @click="emit('cancel')">Cancel</button>
      <button @click="emit('update',input)">save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  content: string
}>()

const input = ref<string>(props.content)

const emit = defineEmits<{
(e: 'cancel'): void
(e: 'update', editcontent: string): void
}>()

console.log(input, emit);

</script>

<style scoped lang="scss">
button:nth-of-type(2){
  background-color: green;
}
div:nth-of-type(1):not(.buttons){
  display: flex;
  align-items: center;
  padding: 10px;
}
div:first-child{
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  // gap: 20px;
  height: 68px;
}
.buttons {
  margin-left: auto;
}
button{
  // margin-left: 5px;
  height: 40px;
}
</style>
