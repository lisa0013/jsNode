import { createApp } from 'vue'
//import App from './App.vue'
import App from './components/CommonComponent.vue';
import router from './router'

createApp(App).use(router).mount('#app')
