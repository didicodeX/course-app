<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 15 : Composables, directives et plugins</h2>
      <div class="lesson">
        <h3>Leçon 96 : Introductions aux composables</h3>
        <p>
          Temps d'inactivité : {{ secondes }} secondes
          <br />
          Temps d'inactivité total : {{ totalIddleTime }} secondes
        </p>
      </div>
      <div class="lesson">
        <h3>Leçon 97 : Utilisation d'un composable asynchrone</h3>
        <div>
          <h1>Liste des 10 premiers posts</h1>
          <div v-if="error">
            <p style="color: red">
              Erreur lors de la récupération des posts: {{ error }}
            </p>
          </div>
          <ul v-else-if="data">
            <li v-for="(post, i) in data" :key="post.id">
              <h3>{{ i + 1}}. {{ post.title }}</h3>
              <p>{{ post.body }}</p>
            </li>
          </ul>
          <p v-else>Chargement...</p>
        </div>
      </div>
      <div class="lesson">
        <h3>Leçon 98 : Création de directives personnalisées</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 99 : Les plugins</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIddleTime } from '@/useIddleTime'

const { secondes, totalIddleTime } = useIddleTime()

//>Leçon 97 : Utilisation d'un composable asynchrone<
import { useFetch } from '@/users.service'
import type { Post } from '@/interfaces/Post.interface';

const { data, error } = useFetch<Post[]>(
  'https://jsonplaceholder.typicode.com/posts?_limit=15',
)
console.log(data)
</script>

<style scoped lang="scss"></style>
