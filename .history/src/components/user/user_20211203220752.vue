<template lang="">
  <div>
    <AddEvent />
    <AddParent />
    <AddTeacher />
    <AddChild />

    <script>
      import AddEvent from "@/components/user/addEvent.vue";
      import AddParent from "@/components/user/addParent.vue";
      import AddTeacher from "@/components/user/addTeacher.vue";
      import AddChild from "@/components/user/addChild.vue";

      export default {
        components: {
          AddEvent,
          AddParent,
          AddTeacher,
          AddChild,
        },
      };
    </script>
    <style lang=""></style>
  </div>
</template>

<script>
import AddEvent from "@/components/user/addEvent.vue";
import AddParent from "@/components/user/addParent.vue";
import AddTeacher from "@/components/user/addTeacher.vue";
import AddChild from "@/components/user/addChild.vue";

export default {
  components: {
    AddEvent,
    AddParent,
    AddTeacher,
    AddChild,
  },
};
</script>
<style lang=""></style>
