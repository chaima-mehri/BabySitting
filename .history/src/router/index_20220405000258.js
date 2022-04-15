import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/home.vue';
import Chat from '@/components/chat/chat.vue';
import User from '@/components/user/user.vue';
import Login from '@/components/login/login.vue';
import signup from '@/components/signup/signup.vue'
import 
import { profile } from 'console';



Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'Home',props : true },
  { path: '/signup', component: signup, name: 'signup',props : true },
  { path: '/profile', component: , name: 'profile',props : true },
  { path: '/user', component: User, name : 'user',props : true },
  { path: '/chat', component: Chat, name: 'Chat',props : true },
  { path: '/login', component: Login, name: 'login',props : true },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
