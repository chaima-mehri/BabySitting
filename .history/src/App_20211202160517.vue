<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
};
</script>
<style src="./app.css"></style>
