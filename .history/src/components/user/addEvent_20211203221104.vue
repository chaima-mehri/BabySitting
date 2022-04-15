<template lang="">
  <div>
    <h1>Add an event</h1>

    <div class="container">
      <label for="Event_title"><b>Event title</b></label>
      <input
        type="text"
        v-model="addEventForm.Event_title"
        placeholder="Enter Event title"
        name="Event_title"
        required
      />

      <label for="Event_Description"><b>Event Description</b></label>
      <input
        type="text"
        v-model="addEventForm.Event_Description"
        placeholder="Enter Event Description"
        name="Event_Description"
        required
      />
      <label for="Event_Date"><b>Event Date</b></label>
      <input
        type="date"
        v-model="addEventForm.Event_Date"
        placeholder="Enter Event Date"
        name="Event_Date"
        required
      />
      <label for="Event_start_heure"><b>Event start hour</b></label>
      <input
        type="time"
        v-model="addEventForm.Event_start_heure"
        placeholder="Enter Event start hour"
        name="Event_start_heure"
        required
      />
      <label for="Event_fin_heure"><b>Event end hour</b></label>
      <input
        type="time"
        v-model="addEventForm.Event_fin_heure"
        placeholder="Enter Event end houre"
        name="Event_fin_heure"
        required
      />
      <label for="Event_Nbr_Place"><b>place numbers</b></label>
      <input
        type="number"
        v-model="addEventForm.Event_Nbr_Place"
        placeholder="Enter Event place number"
        name="Event_Nbr_Place"
        required
      />
      <label for="Entry_price"><b>Entry prices</b></label>
      <input
        type="number"
        v-model="addEventForm.Entry_price"
        placeholder="Enter Event entry price"
        name="Entry_price"
        required
      />

      <button v-on:click="getevent" class="button1">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEvent",
  data() {
    return {
      addEventForm: {
        Event_title: null,
        Event_Description: null,
        Event_Date: null,
        Event_start_heure: null,
        Event_fin_heure: null,
        Event_Nbr_Place: null,
        Entry_price: null,
      },
    };
  },
  methods: {
    getevent() {
      console.log("blabla", this.addEventForm);
    },
  },
};
</script>
<style lang=""></style>
