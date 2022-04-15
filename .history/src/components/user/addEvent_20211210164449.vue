<template lang="">
  <div>
    <h1>Add an event</h1>

    <div class="container">
      <label for="title"><b>Event title</b></label>
      <input
        type="text"
        v-model="addEventForm.title"
        placeholder="Enter Event title"
        name="title"
        required
      />

      <label for="Description"><b>Event Description</b></label>
      <input
        type="text"
        v-model="addEventForm.Description"
        placeholder="Enter Event Description"
        name="Description"
        required
      />
      <label for="date_event"><b>Event Date</b></label>
      <input
        type="date"
        v-model="addEventForm.date_event"
        placeholder="Enter Event Date"
        name="date_event"
        required
      />
      <label for="event_start_heure"><b>Event start hour</b></label>
      <input
        type="time"
        v-model="addEventForm.event_start_heure"
        placeholder="Enter Event start hour"
        name="event_start_heure"
        required
      />
      <label for="event_fin_heure"><b>Event end hour</b></label>
      <input
        type="time"
        v-model="addEventForm.event_fin_heure"
        placeholder="Enter Event end houre"
        name="event_fin_heure"
        required
      />
      <label for="nbr_Place"><b>place numbers</b></label>
      <input
        type="number"
        v-model="addEventForm.nbr_Place"
        placeholder="Enter Event place number"
        name="nbr_Place"
        required
      />
      <label for="entry_price"><b>Entry prices</b></label>
      <input
        type="number"
        v-model="addEventForm.entry_price"
        placeholder="Enter Event entry price"
        name="entry_price"
        required
      />

      <button v-on:click="createEvent" class="button1">Add</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddEvent",
  data() {
    return {
      addEventForm: {},
    };
  },
  methods: {
    createEvent() {
      axios
        .post("http://localhost:8086/add-event/", this.addEventForm)
        .then(() => console.log("hi :"));
    },
    getevent() {
      console.log("blabla", this.addEventForm);
    },
  },
};
</script>
<style lang=""></style>
