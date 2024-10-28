<template>
  <section class="padd content-limit">
    <div>
      <h2>Chapitre 4 : Rendre les composants réactifs</h2>
      <div class="lesson">
        <h3>Leçon 21 : La fonction reactive()</h3>
        <h4>Bonjour {{ user.name }}</h4>
        <p>Count: {{ state.count }}</p>
        <button @click="increment('state')">add (reactive)</button>
      </div>
      <div class="lesson">
        <h3>Leçon 22 : La fonction ref()</h3>
        <p>Count: {{ count }}</p>
        <button @click="increment('count')">add (ref)</button>
      </div>
      <div class="lesson">
        <h3>Leçon 23 : La fonction computed()</h3>
        <p>Price total HT : {{ totalPriceHT }}</p>
        <p>Price total TTC : {{ totalPriceTTC }}</p>
      </div>
      <div class="lesson">
        <h3>Leçon 24 : La directive v-model</h3>
        <div class="range">
          <div class="color-container">
            <p>rgb({{ redRange }},{{ greenRange }},{{ blueRange }})</p>
            <div
              class="color"
              :style="{
                backgroundColor: `rgb(${redRange},${greenRange},${blueRange})`,
              }"
            ></div>
          </div>
          <div class="range-container">
            <div class="range-input">
              <input type="range" v-model="redRange" />
              <span>{{ redRange }}</span>
            </div>
            <div class="range-input">
              <input type="range" v-model="greenRange" />
              <span>{{ greenRange }}</span>
            </div>
            <div class="range-input">
              <input type="range" v-model="blueRange" />
              <span>{{ blueRange }}</span>
            </div>
          </div>
        </div>
        <input type="text" v-model="text" />
        <input type="number" v-model="product.quantity" />
        <p>{{ text }}</p>
      </div>
      <div class="lesson">
        <h3>Leçon 25 : La fonction watch()</h3>
        <input type="number" name="price" v-model="price" />
        <span>{{ price }}</span>
      </div>
      <div class="lesson">
        <h3>Leçon 26 : La fonction watchEffect()</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from 'vue'

// ************  Reactive state with user and count properties *****
const state = reactive({
  user: {
    name: 'Dylane',
    age: 19,
  },
  count: 0,
})

// *********** Ref for count (independent of state) *********
const count = ref(0)

// Combined increment function with conditional logic
function increment(target: 'state' | 'count') {
  if (target === 'state') {
    state.count++
  } else {
    count.value++
  }
}
const { user } = state
console.log(state)

// *************** computed() *****************

interface Product {
  name: string
  quantity: number
  priceHT: number
  nbModif: number
  lastModif?: number | null // le null est optionnelle
}

const product = reactive<Product>({
  name: 'books',
  quantity: 3,
  priceHT: 10,
  nbModif: 0,
})

console.log(product)

// Lorsque c'est computed on peut l'utiliser comme une propriete normal dans le template au lieu de mettre () comme pour un fonction donc en gros en mettant le computed, ma function se coporte maintenant comme une propriete \n ca evite le rechargement de la page si un autre composant est modifier. en generale le computed est utiliser pour retourner une valeur qui depend de d'autre parametre reactif. donc a chaque foi qu'on set(modifie) quantity ou price il vas reexecuter la fonction computed

const totalPriceHT = computed(() => product.priceHT * product.quantity)

const totalPriceTTC = computed(() => {
  return product.priceHT * product.quantity * 1.5
})

console.log(totalPriceHT)

// *************** v-model *****************
const text = ref('')
const redRange = ref(0)
const greenRange = ref(0)
const blueRange = ref(0)

// *************** Watch *****************
// On peut avoir une callback function et une fonction asynchrone dans notre watch    contrairement au computed

// watch(product,(newValue, oldValue) => {
//   console.log("In watch","\n", "newValue : ", newValue, "\n", "oldValue : ", oldValue);
// })

//je

// watch(() => product.quantity,(newValue, oldValue) => {
//   console.log("In watch","\n", "newValue : ", newValue, "\n", "oldValue : ", oldValue, "\n", "nbMidif : ", product.nbModif);
//   product.nbModif++;
// })
const price = ref(0)
//On peut aussi avoir un tableau de dependance le watch est appelle lorsque une des dependance est modifier
// watch([() => product.quantity,price],(newValue, oldValue) => {
//   console.log("In watch","\n", "newValue : ", newValue, "\n", "oldValue : ", oldValue, "\n", "nbMidif : ", product.nbModif);
//   product.nbModif++;
// })

//mettre watch dans une constante la fonction watch retourne une methode et c'est cette methode qu'on veut executer, car elle permet de stopper le watch apres la premiere execution
const unWatch = watch([() => product.quantity, price], (newValue, oldValue) => {
  console.log(
    'In watch',
    '\n',
    'newValue : ',
    newValue,
    '\n',
    'oldValue : ',
    oldValue,
    '\n',
    'nbMidif : ',
    product.nbModif,
  )
  product.nbModif++
  unWatch()
})

// *************** WatchEffect *****************

watchEffect(() => {
  console.log('In watchEffect')
  product.priceHT = price.value // grace a ca j'ai une refence et a chaue fois que je vais modifie mon priceHT il vas se lancer. donc priceHT est considerer comme une dependance
  product.lastModif = Date.now()
  console.log(product)
})
</script>

<style scoped>
.range {
  display: flex;
  gap: 20px;
}
.range-input {
  display: flex;
  align-items: center;
  gap: 20px;
}
input {
  color: #000;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: none;
}
.color {
  width: 120px;
  height: 120px;
}
.color-container {
  display: grid;
}
</style>

<!-- <script setup lang="ts">
let name = 'Jean'

const obj = {
  name: 'Jean',
  age: '23',
}
const proxy = new Proxy(obj, {})

console.log(proxy);

setTimeout(() => {
  name = 'Paul'
  console.log(name)
}, 3000)
</script> -->
