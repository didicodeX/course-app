<template>
  <Navbar />
  <HelloWorld msg="BADAM GROUPE" />
  <RouterView />
</template>

<script setup lang="ts">
// import {provide, readonly} from "vue"
import HelloWorld from './components/HelloWorld.vue'
import './assets/base.css'
import Navbar from './components/NavBar.vue'

// //============= 61 ====================
// export interface MangakaInterface{
//   name: string;
//   birthday: number;
// }

// const mangaka = {
//   name: "Dylane",
//   birthday:2005
// }

// provide('mangaka',readonly(mangaka))
</script>

<style scoped lang="scss">
/* nav a.router-link-exact-active {
  color: #fff;
} */

/* nav a.router-link-exact-active:hover {
  color: var(--text-color);
} */
</style>
