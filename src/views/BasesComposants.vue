<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 7 : Les bases des composants</h2>
      <div class="lesson">
        <h3>Leçon 36 : Introduction aux composants</h3>
        <!-- <Product/> -->
        <!-- <Product /> -->
      </div>
      <div class="lesson">
        <h3>Leçon 37 : Composants locaux et globaux</h3>
      </div>
      <div class="lesson">
        <!-- <Product :name-product="product"/> -->
        <h3>Leçon 38 : Les props</h3>
        <!-- <Product :prix="1800" :name="product"/> -->
        <!-- <Product /> -->
      </div>
      <div class="lesson">
        <h3>Leçon 39 : Validation des props et utilisation de TypeScript</h3>
        <!-- <Product :prix="1800" :name="product" available/>
        <Product :prix="500" :name="product2" available /> -->
        <Product :product="product" />
        <!-- <product v-bind="product"/> -->
      </div>
      <div class="lesson">
        <h3>Leçon 40 : Les événements</h3>
        <!-- <Blog @bigger="incSize" :fontSize="fontSize" /> -->
        <Blog @bigger="incSize" @make-smaller="decrease" :fontSize="fontSize" />
      </div>
      <div class="lesson">
        <h3>Leçon 41 : Le cycle de vie d'un composant</h3>
      </div>
      <div class="lesson">
        <h3>Leçon 42 : Les références de template</h3>
        <h4>Form</h4>
        <input type="text" placeholder="Nom" ref="input" />
        <ul>
          <li ref="fruitsRef" v-for="fruit in fruits" :key="fruit">
            {{ fruit }}
          </li>
        </ul>
      </div>
      <div class="lesson">
        <h3>
          Leçon 43 : Utilisation des liaisons et des directives sur les
          composants
        </h3>
        <Blog @bigger="incSize" @make-smaller="decrease" :fontSize="fontSize" class="parent" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Product from '@/components/ComponentProduct.vue'
import type { ProductInterface } from '@/interfaces/product.interface'
import { onMounted, reactive, ref } from 'vue'

// const product = ref("Voiture")
// const product2 = ref("Banane")

const product = reactive<ProductInterface>({
  available: true,
  prix: 1500,
  name: 'Moto',
})
// ========================
import Blog from '@/components/ComponentBlog.vue'

const fontSize = ref(16)

// function incSize(f:number,inc:number){
//   fontSize.value += inc;
// }
function incSize(inc: number) {
  fontSize.value += inc
}
function decrease() {
  fontSize.value--
}
//==================================

const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  console.log(input.value?.focus())
  console.log(fruitsRef)
})
const fruits = reactive(['pomme', 'banane', 'orange'])
const fruitsRef = ref<HTMLLIElement[] | []>([])

const blogRef = ref<InstanceType<typeof Blog> | null>(null)

onMounted(() => {
  console.log(input.value?.focus)
  console.log(fruitsRef.value)
  console.log(blogRef.value?.count)
  console.log(blogRef.value?.arrTest)
  blogRef.value?.display()
})
</script>

<style scoped lang="scss">
input {
  padding: 1rem;
}
</style>
