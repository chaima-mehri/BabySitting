<template lang="">
  <div>
    <h1>Add a Teacher</h1>
    < class="container">
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
      <label for="tel"><b>telephone number</b></label>
      <input
        type="number"
        v-model="addTeacherForm.tel"
        placeholder="Enter telephone number"
        name="tel"
        required
      />
      <br />
      <label for="dateNaissance"><b>date Naissance</b></label>
      <input
        type="date"
        v-model="addTeacherForm.dateNaissance"
        placeholder="Enter date Naissance"
        name="dateNaissance"
        required
      />
      <label for="Password"><b>Password</b></label>
      <input
        type="Password"
        v-model="addTeacherForm.Password"
        placeholder="Enter Password"
        name="Password"
        required
      />
      <label for="Niveau"><b>Niveau</b></label>
      <input
        type="Niveau"
        v-model="addTeacherForm.Niveau"
        placeholder="Enter Niveau"
        name="Niveau"
        required
      />

      <button v-on:click="getTeacher" class="button1">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTeacher",
  data() {
    return {
      addTeacherForm: {},
    };
  },
  methods: {
    getTeacher() {
      console.log("blabla", this.addTeacherForm);
    },
  },
};
</script>
<style lang=""></style>
