<template lang="">
  <div class="container">
    <h3 class="p-3 text-center">List of Teachers</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
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
