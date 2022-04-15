<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home/home.vue"
import Header from "./components/header.vue"


export default {
  name: 'App',
  components: {
    Home,
    Header

  }
}
</script>

<style src="./app.css">

</style>
