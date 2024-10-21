<script setup lang="ts">
import '../assets/base.css'
defineProps<{
  msg: string
}>()
</script>

<template>
  <section class="padd limit-content">
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
    </div>
  </section>
</template>

<style scoped>

.green{
  font-family: var(--font-special);
}
h3 {
  font-size: 1.2rem;
}
.greetings {
padding: 100px 0;
  display: flex;
  flex-direction: column;
}
</style>
