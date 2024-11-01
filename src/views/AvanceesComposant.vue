<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 9 : Les fonctionnalités avancées des composants</h2>
      <div class="lesson">
        <h3>Leçon 57 : Utilisation de la directive v-model sur des composants</h3>
        <Article v-model:agree="content" v-model:name="name"/>
        <p>{{ content }}</p>
        <p>{{ name }}</p>
      </div>
      <div class="lesson">
        <h3>Leçon 58 : Cascade d'attributs</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 59 : Présentation des slots</h3>
        <!-- <Article>
          <h1>Titre de l'article</h1>
          <strong>Author : {{ author }}</strong>
          <AppButton>Lire</AppButton>
          <AppButton/>
        </Article> -->
        <Article>
          <template v-slot:header>
            <h1>Titre de l'article</h1>
            <strong>Author : {{ author }}</strong>
          </template>
          <template #content>
            <p>Lorem ipsum dolor sit amet.</p>
          </template>
          <!-- <template v-slot:[bottom]>
            <AppButton>Lire</AppButton>
          </template> -->
          <template #[bottom]>
            <AppButton>Lire</AppButton>
          </template>
        </Article>
      </div>
      <div class="lesson">
        <h3>Leçon 60 : Portées des slots</h3>

      </div>
      <div class="lesson">
        <h3>Leçon 61 : Provide et Inject</h3>
        <input type="text" v-model="mangaka.name">
        <AuthorMangas></AuthorMangas>
      </div>
      <div class="lesson">
        <h3>Leçon 62 : Utilisation des symboles avec provide et inject</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 63 : Les fonctions utilitaires de l'API réactivité</h3>
        <button @click="compteur++">{{ compteur }}</button>
        <button @click="count++">{{ count }}</button>
        <pre>
          {{ state }}
        </pre>
        <p>{{ user.name }}</p>
      </div>
      <div class="lesson">
        <h3>Leçon 64 : Les composants asynchrones</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {provide, reactive, readonly, ref, toRef} from "vue"
import Article from "@/components/ComponentArticle.vue";
import AppButton from "@/components/AppButton.vue";
import AuthorMangas from "@/components/AuthorMangas.vue";
import { mangakaKey } from "@/provideKeys";

// const content = ref("");
const content = ref(true);
const name = ref("");

//========= losson 59 =======
const author = ref("Jean de la tour")
const bottom = "cta";

//============= 61 ====================


//============= 61 ====================
export interface MangakaInterface{
  name: string;
  birthday: number;
}

const mangaka = reactive({
  name: "Dylane",
  birthday:2005
})

function updateBirthday(){
  mangaka.birthday = 2000;
}

// provide('mangaka',readonly(mangaka))
// ==> consulter la balise script plus haut

//recommander
provide(mangakaKey,{
  mangaka: readonly(mangaka),
  updateBirthday
})

//pas tres recommandable
// provide('mangaka',{
//   mangaka: readonly(mangaka),
//   updateBirthday
// })


console.log(mangaka);


//=========== 63 ============

const {compteur, user} = reactive({
  compteur: 0,
  user: {name: "Dylane"}
})

const state = reactive({
  count:0,
  user:{}
})

const count = toRef(state,'count');

</script>

<style scoped lang="scss"></style>


<!-- Faire réparer votre iPhone au Canada n'était pas une solution a cause
du prix de réparation jusqu'à aujourd'hui. Nous ne sommes pas Apple et
vous ne paierez pas aussi chère que chez Apple -->
