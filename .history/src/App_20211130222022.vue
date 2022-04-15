<template>
  <div id="app">
    <login></login>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home/home.vue"
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style src="./app.css">

</style>
