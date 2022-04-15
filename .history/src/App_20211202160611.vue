<template>
  <div id="app">
    <router-view :isAdmin="isAdmin" />
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
