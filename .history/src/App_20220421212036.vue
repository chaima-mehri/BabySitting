<template>
  <div id="app">
    <router-view :isA="isA" />
  </div>
</template>
<script>
import "./script";
export default {
  data() {
    return {
      isA: true,
    };
  },
};
</script>
<style src="./app.css"></style>
