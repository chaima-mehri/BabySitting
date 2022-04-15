<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/home/home.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style src="./app.css"></style>
