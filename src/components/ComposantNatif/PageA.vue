<template>
  <section>
    <div>
      <h2>Page A</h2>
      <textarea name="" id=""></textarea>
      <Modal />
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'PageA' })

import Modal from '../ModalTeleport.vue'
</script>

<style scoped lang="scss">
textarea {
  color: #333;
}
.container {
  position: relative;
}
div{
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
}
</style>
