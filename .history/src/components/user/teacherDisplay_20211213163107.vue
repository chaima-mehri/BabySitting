<template lang="">
  <div class="container">
    <h3 class="p-3 text-center">List of Teachers</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <button v-on:click="delete1(9)" class="button2">delete</button>
          <th>id</th>
          <th>first name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>phone number</th>
          <th>niveau</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="Teacher in Teacher" :key="Teacher.id">
          <td>{{ Teacher.id }}</td>
          <td>{{ Teacher.firstName }}</td>
          <td>{{ Teacher.lastName }}</td>
          <td>{{ Teacher.email }}</td>
          <td>{{ Teacher.tel }}</td>
          <td>{{ Teacher.Niveau }}</td>
          <td>
            <button v-on:click="delete1(Teacher.id)" class="button2">
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
      Teacher: [],
    };
  },
  methods: {
    delete1(id) {
      axios
        .delete("http://localhost:8086/deleteuser/" + id)
        .then(console.log("deleted"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:8086/teachers")
      .then((response) => {
        this.Teacher = response.data;
      })
      .catch((reason) => {
        console.log(reason);
      });
  },
};
</script>
<style lang=""></style>
