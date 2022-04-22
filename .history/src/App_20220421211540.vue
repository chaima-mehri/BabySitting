<template>
  <div id="app">
    <router-view :isAy="isAy" />
  </div>
</template>
<script>
import "./script";
export default {
  data() {
    return {
      isAy: true,
    };
  },
};
</script>
<style src="./app.css"></style>
