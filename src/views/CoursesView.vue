<script setup lang="ts">
import '../assets/base.css'
</script>

<template>
  <section class="padd content-limit">
    <div>
      <h3>This is an Courses page</h3>
      <ul>
        <li><RouterLink to="/courses/DOM">Chapitre 3 : Intéragir avec le DOM</RouterLink></li>
        <li><RouterLink to="/courses/style-et-classe">Chapitre 5 : Le style et les classes</RouterLink></li>
      </ul>
      
    </div>
  </section>
</template>

<style scoped>
a {
  font-size: 18px;
}
</style>
