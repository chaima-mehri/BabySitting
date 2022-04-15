<template lang="">
  <div>
    <h1>Add a Teacher</h1>
    <div class="container">
      <label for="firstName"><b>firstName</b></label>
      <input
        type="text"
        v-model="addTeacherForm.firstName"
        placeholder="Enter first Name"
        name="firstName"
        required
      />
      <label for="lastName"><b>lastName</b></label>
      <input
        type="text"
        v-model="addTeacherForm.lastName"
        placeholder="Enter Last Name"
        name="lastName"
        required
      />
      <label for="Email"><b>Email</b></label>
      <input
        type="text"
        v-model="addTeacherForm.Email"
        placeholder="Enter Email"
        name="Email"
        required
      />
      <br />
      <label for="Password"><b>Password</b></label>
      <input
        type="Password"
        v-model="addTeacherForm.Password"
        placeholder="Enter Password"
        name="Password"
        required
      />
      <label for="tel"><b>telephone number</b></label>
      <br />
      <input
        type="number"
        v-model="addTeacherForm.tel"
        placeholder="Enter telephone number"
        name="tel"
        required
      />
      <br />
      <label for="dateNaissance"><b>date Naissance</b></label>
      <br />
      <input
        type="date"
        v-model="addTeacherForm.dateNaissance"
        placeholder="Enter date Naissance"
        name="dateNaissance"
        required
      />

      <label for="Niveau"><b>Niveau</b></label>
      <br />
      <input
        type="Niveau"
        v-model="addTeacherForm.Niveau"
        placeholder="Enter Niveau"
        name="Niveau"
        required
      />

      <button v-on:click="addTeacher" class="button1">Add</button>
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
    addTeacher() {
      axios
        .post("http://localhost:8086/add-Teacher/{id}", this.addTeacherForm)
        .then(() => console.log("hi teacher:"));
    },
  },
};
</script>
<style lang=""></style>
