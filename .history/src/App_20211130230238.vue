<template>
  <div id="app">
    <Login></Login>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home/home.vue"
import Login from "./components/login/login.vue"


export default {
  name: 'App',
  components: {
    Home,
    Login

  }
}
</script>

<style src="./app.css">

</style>
