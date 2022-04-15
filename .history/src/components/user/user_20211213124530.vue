<template lang="">
  <div>
    <Header />
    <AddEvent />

    <ParentDisplay />
    <AddParent />

    <NiveauDispaly />
    <AddNiveau />

    <TeacherDisplay />
    <AddTeacher />

    <ChildDisplay />
    <AddChild />
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import ParentDisplay from "@/components/user/parentDisplay.vue";
import TeacherDisplay from "@/components/user/teacherDisplay.vue";
import ChildDisplay from "@/components/user/childDisplay.vue";
import AddEvent from "@/components/user/addEvent.vue";
import AddParent from "@/components/user/addParent.vue";
import AddTeacher from "@/components/user/addTeacher.vue";
import AddChild from "@/components/user/addChild.vue";
import AddNiveau from "@/components/user/addNiveau.vue";
import NiveauDispaly from "@/components/user/niveauDisplay.vue";

export default {
  components: {
    Header,
    AddEvent,
    AddParent,
    AddTeacher,
    AddChild,
    ParentDisplay,
    TeacherDisplay,
    ChildDisplay,
    NiveauDisplay,
    AddNiveau,
  },
};
</script>
<style lang=""></style>
