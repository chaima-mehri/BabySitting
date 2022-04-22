<template>
  <div id="app">
    <router-view :isAdmin="isAdmin" />
  </div>
</template>
<script>
import "./script";
export default {
  data() {
    return {
      isAdmin: true,
    };
  },
};
</script>
<style src="./app.css"></style>
