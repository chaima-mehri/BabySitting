<template lang="">
  <div>
    <h1>Add a Teacher</h1>
    <div class="container">
      <label for="niveau"><b>niveau</b></label>
      <br />
      <input
        type="number"
        v-model="addTeacherForm.niveau"
        placeholder="Enter niveau"
        name="niveau"
        required
      />
      <br />
      <label for="role"><b>role</b></label>
      <br />
      <input
        type="text"
        v-model="addTeacherForm.Role"
        placeholder="Enter role"
        name="role"
        required
      />
      <br />

      <br />

      <button v-on:click="addTeacher(addTeacherForm.niveau)" class="button1">
        Add
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "addTeacher",
  data() {
    return {
      addTeacherForm: {},
    };
  },
  methods: {
    addTeacher(niv) {
      axios
        .post("http://localhost:8086/add-Teacher/" + niv, this.addTeacherForm)
        .then(() => console.log("hi teacher:"));
    },
  },
};
</script>
<style lang=""></style>
