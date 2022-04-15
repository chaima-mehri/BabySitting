<template lang="">
  <div>
    <h1>Add a Parent</h1>
    <div class="container">
      <label for="firstName"><b>firstName</b></label>
      <input
        type="text"
        v-model="addParentForm.firstName"
        placeholder="Enter first Name"
        name="firstName"
        required
      />
      <label for="lastName"><b>lastName</b></label>
      <input
        type="text"
        v-model="addParentForm.lastName"
        placeholder="Enter Last Name"
        name="lastName"
        required
      />
      <label for="Email"><b>Email</b></label>
      <input
        type="text"
        v-model="addParentForm.Email"
        placeholder="Enter Email"
        name="Email"
        required
      />
      <br />
      <label for="Password"><b>Password</b></label>
      <input
        type="Password"
        v-model="addParentForm.Password"
        placeholder="Enter Password"
        name="Password"
        required
      />
      <label for="tel"><b>telephone number</b></label>
      <br />
      <input
        type="number"
        v-model="addParentForm.tel"
        placeholder="Enter telephone number"
        name="tel"
        required
      />
      <br />
      <label for="dateNaissance"><b>date Naissance</b></label>
      <br />
      <input
        type="date"
        v-model="addParentForm.dateNaissance"
        placeholder="Enter date Naissance"
        name="dateNaissance"
        required
      />

      <button v-on:click="createParent" class="button1">Add</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddParent",
  data() {
    return {
      addParentForm: {},
    };
  },
  methods: {
    createParent() {
      axios
        .post("http://localhost:8086/add-Parent/", this.addParentForm)
        .then(() => console.log("hi parent:"));
    },
    getParent() {
      console.log("blabla", this.addParentForm);
    },
  },
};
</script>
<style lang=""></style>
