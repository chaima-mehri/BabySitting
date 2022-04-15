<template lang="">
  <div>
    <h1>Add a Parent</h1>
    <div class="container">
      <label for="firstName"><b>firstName</b></label>
      <input
        type="text"
        v-model="addEventForm.firstName"
        placeholder="Enter first Name"
        name="firstName"
        required
      />
      <label for="lastName"><b>lastName</b></label>
      <input
        type="text"
        v-model="addEventForm.lastName"
        placeholder="Enter Last Name"
        name="lastName"
        required
      />
      <label for="Email"><b>Email</b></label>
      <input
        type="text"
        v-model="addEventForm.Email"
        placeholder="Enter Email"
        name="Email"
        required
      />
      <label for="tel"><b>telephone number</b></label>
      <input
        type="number"
        v-model="addEventForm.tel"
        placeholder="Enter telephone number"
        name="tel"
        required
      />
      <label for="dateNaissance"><b>date Naissance</b></label>
      <input
        type="date"
        v-model="addEventForm.dateNaissance"
        placeholder="Enter date Naissance"
        name="dateNaissance"
        required
      />
      <label for="Password"><b>Password</b></label>
      <input
        type="Password"
        v-model="addEventForm.Password"
        placeholder="Enter Password"
        name="Password"
        required
      />

      <button v-on:click="getParent" class="button1">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddParent",
  data() {
    return {
      addParentForm: {},
    };
  },
  methods: {
    getParent() {
      console.log("blabla", this.addParentForm);
    },
  },
};
</script>
<style lang=""></style>
