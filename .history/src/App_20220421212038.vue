<template>
  <div id="app">
    <router-view :isAuth="isAuth" />
  </div>
</template>
<script>
import "./script";
export default {
  data() {
    return {
      isAuth: true,
    };
  },
};
</script>
<style src="./app.css"></style>
