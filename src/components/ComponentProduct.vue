<template>
  <h4>{{ title }}</h4>
  <ul>
    <li>Prix : {{ prix }}</li>
  </ul>
  <button @click="count++">Ajouter au panier</button>
  <p>Vous avez ajoute {{ count }} {{ name }}</p>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/product.interface'
import { computed, ref } from 'vue'
const count = ref(0)

//Les props permet de faire passer l'information du composant parent au composant enfant
// const props = defineProps(['nameProduct'])
// const props = defineProps({
//   name: {
//     type: String,
//     // required:true, pas de required parceque j'ai une valeur par defaut
//     default: 'Pomme',
//     validator(value: string): boolean {
//       return value.length > 10 ? false : true;
//     },
//   },
//   prix: {
//     type: Number,
//     // required:true,
//     default: 2000,
//   },
//   name2: {
//     type: Object, //quand la valeur par default c'est un object, tableau,fonction on doit utiliser default comme une fonction
//     default() {
//       return {
//         name2: 'Moto',
//       }
//     },
//   },
//   available: Boolean
//   // prix: Number,
// })

// const props = defineProps<{
//   prix?: number,
//   name: string,
//   available: boolean,
// }>();
// avec cette nouvelle methode, par defaut tote les propriete sont required, pour la rendre facultative il faut rajouter un point d'interrogation
// console.log(props.available);

//interface

// interface Product {
//   available: boolean,
//   prix: number
//   name: string

// }

const props = defineProps<{
  product: ProductInterface
}>()

// la syntace ci-dessous nous permet d'utiliser le v-bind dans le parent et d'acceder au propriete une par une
// const props = defineProps<{
//   available: boolean,
//   prix: number
//   name: string
// }>()

// const title = computed(() => props.nameProduct)
const title = computed(() => props.product.name.toUpperCase())
const { name, prix } = props.product

// const title = computed(() => props.name)

// console.log(name,prix);
</script>

<style scoped lang="scss"></style>
