<template>
  <section class="padd content-limit">
    <div>
      <h2></h2>
      <div class="lesson">
        <h3>Leçon 82 : Introduction et requête AJAX</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 83 : Requêtes POST</h3>
        <div class="container">
          <div>
            <h3>Formulaire</h3>
            <form action="" @submit="mySubmit">
              <input v-model="nameValue" type="text" placeholder="name">
              <input v-model="emailValue" type="email" placeholder="email">
              <button>Save</button>
            </form>
          </div>
          <div>
            <h3>Liste des utilisateurs</h3>
          </div>
        </div>
      </div>
      <div class="lesson">
        <h3>Leçon 84 : Requêtes GET et DELETE</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 85 : Requêtes PATCH</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useForm, useField} from 'vee-validate';

const {handleSubmit} = useForm();
const mySubmit = handleSubmit((value) => {
  console.log(value);

})

const {value: nameValue} = useField('name');
const {value: emailValue} = useField('email');
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
