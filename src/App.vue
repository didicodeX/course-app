<script setup lang="ts">
// import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './assets/base.css'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <HelloWorld msg="BADAM GROUPE" />
  <RouterView />
</template>

<style scoped>

/* nav a.router-link-exact-active {
  color: #fff;
} */

/* nav a.router-link-exact-active:hover {
  color: var(--text-color);
} */

</style>
