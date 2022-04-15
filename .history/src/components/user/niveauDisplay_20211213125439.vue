<template lang="">
  <div>
    <div class="container">
      <h3 class="p-3 text-center">List of niveau</h3>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>label</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Niveau in Niveau" :key="Niveau.id">
            <td>mm{{ Niveau.id }}</td>
            <td>{{ Niveau.label }}</td>

            <td>
              <button v-on:click="delete1(Niveau.id)" class="button2">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      Niveau: [],
    };
  },
  methods: {
    delete1(id) {
      axios
        .delete("http://localhost:8086/deleteniv/" + id)
        .then(console.log("deleted"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:8086/niveaux")
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
