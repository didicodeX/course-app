import "./assets/base.css"
import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import { vFocus } from "./shared/directives/vFocus"

const app = createApp(App)
const pinia = createPinia();
app.directive('focus', vFocus)

app.use(router)
app.use(pinia)
app.mount('#app')
