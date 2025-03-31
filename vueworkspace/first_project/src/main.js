// main.js
// Root Vue 객체 생성위해 함수 가져오기
import { createApp } from 'vue' // 여기 import는 노드가 가지고 있는 require이랑 같음
// Root Vue 객체 정의파일 가져오기
import App from './App.vue'
// Vue Rooter 가져오기
import router from './router'

createApp(App).use(router).mount('#app')
