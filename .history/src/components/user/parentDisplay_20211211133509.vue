<template lang="">
  <div class="container">
    <h3 class="p-3 text-center">List of parents</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>first name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Parent in Parent" :key="Parent.id">
          <td>{{ Parent.id }}</td>
          <td>{{ Parent.firstName }}</td>
          <td>{{ Parent.lastName }}</td>
          <td>{{ Parent.email }}</td>
          <td>{{ Parent.tel }}</td>
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
      Parent: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8086/parents")
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
