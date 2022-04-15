<template lang="">
   
        <div>
    <h1>Add niveau</h1>
    <div class="container">
      <label for="id"><b>id</b></label>
      <input
        type="number"
        v-model="addNiveauForm.id"
        placeholder="Enter id"
        name="id"
        required
      />
      <label for="label"><b>label</b></label>
      <input
        type="text"
        v-model="addNiveauForm.label"
        placeholder="Enter label"
        name="label"
        required
      
      <button v-on:click="addNiveau" class="button1">Add</button>
    </div>
  </div>
   
</template>
<script>
import axios from "axios";
export default {
  name: "AddNiveau",
  data() {
    return {
      addNiveauForm: {},
    };
  },
  methods: {
    addNiveau() {
      axios
        .post("http://localhost:8086/add-niveau", this.addNiveauForm)
        .then(() => console.log("hi Niveau"));
    },
  },
};
</script>
<style lang="">
    
</style>