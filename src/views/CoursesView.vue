<template>
  <section class="padd content-limit">
    <div>
      <h3>This is an Courses page</h3>
      <ul class="chapter-list">
        <li>
          <RouterLink to="/courses/DOM">
            Chapitre 3 : Intéragir avec le DOM
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/Composants-reactifs">
            Chapitre 4 : Rendre les composants réactifs
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/style-et-classe">
            Chapitre 5 : Le style et les classes
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  font-size: 18px;
}
.chapter-list {
  display: grid;
  gap: 20px;
}
</style>
