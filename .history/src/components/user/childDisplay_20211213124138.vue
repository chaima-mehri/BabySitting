<template lang="">
  <div class="container">
    <h3 class="p-3 text-center">List of Childs</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>first name</th>
          <th>Last name</th>
          <th>niveau</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Child in Child" :key="Child.id">
          <td>{{ Child.id }}</td>
          <td>{{ Child.firstName }}</td>
          <td>{{ Child.lastName }}</td>
          <td>{{ Child.Niveau }}</td>
          <td>
            <button v-on:click="delete1(Child.id)" class="button2">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => {
    return {
      Child: [],
    };
  },
  methods: {
    delete1(id) {
      axios
        .delete("http://localhost:8086/deletechild/" + id)
        .then(console.log("deleted"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:8086/retriveallevent")
      .then((response) => {
        this.Event = response.data;
      })
      .catch((reason) => {
        console.log(reason);
      });
  },
};
</script>
<style lang=""></style>
