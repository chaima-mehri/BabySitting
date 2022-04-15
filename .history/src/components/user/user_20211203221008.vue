<template lang="">
  <div>
    <Header />
    <AddEvent />
    <AddParent />
    <AddTeacher />
    <AddChild />
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";

import AddEvent from "@/components/user/addEvent.vue";
import AddParent from "@/components/user/addParent.vue";
import AddTeacher from "@/components/user/addTeacher.vue";
import AddChild from "@/components/user/addChild.vue";

export default {
  components: {
    Header,
    AddEvent,
    AddParent,
    AddTeacher,
    AddChild,
  },
};
</script>
<style lang=""></style>
