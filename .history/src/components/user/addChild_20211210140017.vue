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
      <input
        type="date"
        v-model="addChildForm.dateNaissance"
        placeholder="Enter date Naissance"
        name="dateNaissance"
        required
      />
      <label for="Niveau"><b>Niveau</b></label>
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
export default {
  name: "AddChild",
  data() {
    return {
      addChildForm: {},
    };
  },
  methods: {
    addChild() {
      console.log("blabla", this.addChildForm);
    },
  },
};
</script>
<style lang=""></style>
