<template>
  <small>{{ mangaka.name }} - {{ mangaka.birthday }}</small>
</template>

<script setup lang="ts">
import { mangakaKey } from '@/provideKeys';
import { inject } from 'vue'

// const mangaka = inject<Readonly<MangakaInterface>>('mangaka')!
// const { mangaka, updateBirthday } = inject<
//   Readonly<{
//     mangaka: MangakaInterface
//     updateBirthday: () => void
//   }>
// >('mangaka')!

//grace au typage et a l'export fait dans le composant parent on plus besoin de typer
const { mangaka, updateBirthday } = inject(mangakaKey)!
//le ! quand vous ete sur que ca ne vas pas etre undefined

setTimeout(() => {
  updateBirthday()
}, 10000)
console.log(mangaka)
</script>

<style scoped lang="scss"></style>
