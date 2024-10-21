<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Fonction pour fermer le menu si la fenêtre est redimensionnée au-dessus de 500px
const handleResize = () => {
  if (window.innerWidth > 500) {
    isOpen.value = false;
  }
};

// Ajouter l'écouteur d'événements lors du montage du composant
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

// Supprimer l'écouteur d'événements lors de la destruction du composant
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="wrapper">
    <img class="logo" src="../assets/logo.svg" alt="" />
    <div class="nav-left" :class="{ active: isOpen }">
      <nav>
        <RouterLink to="/" @click="toggleMenu()">Home</RouterLink>
        <RouterLink to="/about" @click="toggleMenu()">About</RouterLink>
        <RouterLink to="/courses" @click="toggleMenu()">Courses</RouterLink>
      </nav>
      <div class="button-container">
        <button class="sign-in-btn">Sign in</button>
        <button class="get-started-btn">Get started</button>
      </div>
    </div>
    <button @click="toggleMenu()" class="burger-menu" :class="{ active: isOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>


<style scoped>

.logo {
  width: 30px;
  height: 50px;
}
.nav-left {
  display: flex;
}
.burger-menu{
  display: none;
  position: relative;
  height: 30px;
  width: 30px;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
}
.burger-menu span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
  transition: 0.2s ease-out;
}
span:nth-child(1){
/* background-color: rgb(25, 5, 123); */
transform: translateY(-7px);
}
/* span:nth-child(2){
background-color: rgb(5, 123, 17);

} */
span:nth-child(3){
/* background-color: rgb(99, 123, 5); */
transform: translateY(7px);

}
 .active span:nth-child(1){
  transform: rotate(45deg);
}
.active span:nth-child(2){
opacity: 0;
}
.active span:nth-child(3){
transform: rotate(-45deg);
}
nav {
  width: 200px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.button-container {
  display: flex;
  gap: 20px;
}

button {
  padding: 10px 10px;
  border-radius: 8px;
  border: 0;
  color: var(--text-color);
  cursor: pointer;
  width: 100px;
  /* height: 50px; */
}

.get-started-btn{
  background-color: var(--primary-color);
}
.sign-in-btn{
  background-color: var(--secondary-color);
}

@media screen and (max-width:500px){
  button,a {
    font-size: 1rem;
  }
  button {
    width: 200px;
    height: 50px;
  }
  .nav-left{
    display: none;
  }
  .burger-menu {
    display: block;
  }
  .nav-left.active{
    display: flex;
    position: absolute;
    inset: 0;
    background-color: #16181d;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  .nav-left.active nav {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
}
</style>