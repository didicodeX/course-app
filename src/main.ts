import "./assets/base.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vFocus } from "./shared/directives/vFocus"

const app = createApp(App)

app.directive('focus', vFocus)
 
app.use(router)

app.mount('#app')
