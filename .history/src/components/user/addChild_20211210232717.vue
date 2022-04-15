<template lang="">
  <div>
    <h1>Add a Child</h1>
    <div class="container">
      <label for="firstName"><b>firstName</b></label>
      <input
        type="text"
        v-model="addChildForm.firstName"
        placeholder="Enter first Name"
        name="firstName"
        required
      />
      <label for="lastName"><b>lastName</b></label>
      <input
        type="text"
        v-model="addChildForm.lastName"
        placeholder="Enter Last Name"
        name="lastName"
        required
      />
      <label for="dateNaissance"><b>date Naissance</b></label>
      <br />
      <input
        type="date"
        v-model="addChildForm.dateNaissance"
        placeholder="Enter date Naissance"
        name="dateNaissance"
        required
      />
      <br />
      <label for="Niveau"><b>Niveau</b></label>
      <br />
      <input
        type="Niveau"
        v-model="addChildForm.Niveau"
        placeholder="Enter Niveau"
        name="Niveau"
        required
      />
      <button v-on:click="addChild" class="button1">Add</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddChild",
  data() {
    return {
      addChildForm: {},
    };
  },
  methods: {
    addChild() {
      axios
        .post("http://localhost:8086/addchild/{id}", this.addChildForm)
        .then(() => console.log("hi child"));
    },
  },
};
</script>
<style lang=""></style>
