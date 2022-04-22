import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/home.vue';
import Chat from '@/components/chat/chat.vue';
import User from '@/components/user/user.vue';
import Login from '@/components/login/login.vue';
import signup from '@/components/signup/signup.vue';
import editProfile from '@/components/BabySitter/editProfile.vue';
import profile_bs from '@/components/BabySitter/profile_bs.vue';
import profile_p from '@/components/Parent/profile_p.vue';
import signup_p from '@/components/signup/signup_p.vue';
import signup_bs from '@/components/signup/signup_bs.vue';
import editProfile_p from '@/components/Parent/editProfile_p.vue';
import editProfile_p from '@/components/Parent/editProfile_p.vue';



Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'Home',props : true },
  { path: '/signup', component: signup, name: 'signup',props : true },
  { path: '/signup_bs', component: signup_bs, name: 'signup_bs',props : true },
  { path: '/signup_p', component: signup_p, name: 'signup_p',props : true },
  { path: '/editProfile', component: editProfile , name: 'editProfile',props : true },
  { path: '/editProfile', component: editProfile , name: 'editProfile',props : true },
  { path: '/editProfile', component: editProfile , name: 'editProfile',props : true },
  { path: '/ProfileBS', component: profile_bs , name: 'profile_bs',props : true },
  { path: '/ProfileP', component: profile_p , name: 'profile_p',props : true },
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
