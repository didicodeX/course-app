<template>
  <section class="padd content-limit">
    <div>
      <h2>This is an Courses page</h2>
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
        <li>
          <RouterLink to="/courses/Directives-structurelles">
            Chapitre 6 : Les directives structurelles
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/Bases-des-composants">
            Chapitre 7 : Les bases des composants
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/Fonctionnalités-avancées-des-composants">
            Chapitre 9 : Les fonctionnalités avancées des composants
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/Formulaires">
            Chapitre 11 : Les formulaires avec Vee-validate et Zod
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/HTTP">
            Chapitre 12 : HTTP
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/Composants-natifs">
            Chapitre 13 : Composants natifs
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  font-size: 18px;
}
.chapter-list {
  margin: 5rem 0;
  display: grid;
  gap: 20px;
}
</style>
