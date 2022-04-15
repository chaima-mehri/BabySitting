import Home from "./components/Home/home.vue";
import Login from "./components/login/login.vue";
import {createRouter ,createWebHistory}from "vue_router";
const  routes = [
    {
        name:'Home',
        components:Home,
        path:'/'
    },
    {
        name:'Login',
        components:Login,
        path:'/login'
    }
]
const router =createRouter({
    history:createWebHistory(),
    routes,
});