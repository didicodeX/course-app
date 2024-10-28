<template>
  <Navbar />
  <HelloWorld msg="BADAM GROUPE" />
  <RouterView />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import './assets/base.css'
import Navbar from './components/NavBar.vue'
</script>

<style scoped lang="scss">
/* nav a.router-link-exact-active {
  color: #fff;
} */

/* nav a.router-link-exact-active:hover {
  color: var(--text-color);
} */
</style>
