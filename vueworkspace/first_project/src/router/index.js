import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 컴포넌트 추가 2) 페이지 단위로 호출
import DataBinding from '@/views/DataBinding.vue'
import ListBinding from '@/views/ListBinding.vue'
import ifBinding from '@/views/ifBinding.vue'
import IfBinding from '@/views/ifBinding.vue'

const routes = [
  {
    path: '/', // 접속경로
    name: 'home', // 라우트 이름
    component: HomeView // 출력할 컴포넌트
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/dataBinding',
    name : 'dataBind',
    component :  DataBinding
  },
  {
    path : '/ListBinding',
    name : 'listBind',
    component : ListBinding
  },
  {
    path : '/ifBinding',
    name : 'ifBind',
    component : IfBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
