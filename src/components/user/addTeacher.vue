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
      <label for="niveau"><b>niveau</b></label>
      <br />
      <input
        type="number"
        v-model="niveauteach.niveau"
        placeholder="Enter niveau"
        name="niveau"
        required
      />
      <br />
      <label for="Email"><b>Email</b></label>
      <br />
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
      <br />

      <button v-on:click="addTeacher(niveauteach.niveau)" class="button1">
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
      niveauteach: {},
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
