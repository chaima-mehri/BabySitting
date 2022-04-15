<template lang="">
  <div>
    <h1>Add event</h1>
    <form action="" method="post">
      <div class="container">
        <label for="Event_title"><b>Event title</b></label>
        <input
          type="text"
          placeholder="Enter Event title"
          name="Event_title"
          required
        />

        <label for="Event_Description"><b>Event Description</b></label>
        <input
          type="text"
          placeholder="Enter Event Description"
          name="Event_Description"
          required
        />

        <label for="Event_Date"><b>Event Date</b></label>
        <input
          type="date"
          placeholder="Enter Event Date"
          name="Event_Date"
          required
        /><br />

        <label for="Event_start_heure"><b>Event start hour</b></label>
        <input
          type="time"
          placeholder="Enter Event start houre"
          name="Event_start_heure"
          required
        /><br />

        <label for="Event_fin_heure"><b>Event end hour</b></label>
        <input
          type="time"
          placeholder="Enter Event end houre"
          name="Event_fin_heure"
          required
        /><br />

        <label for="Event_Nbr_Place"><b>place numbers</b></label>
        <input
          type="number"
          placeholder="Enter place number"
          name="Event_Nbr_Place"
          required
        /><br />

        <label for="Entry_price"><b>Entry prices</b></label>
        <input
          type="number"
          placeholder="Enter Entry price"
          name="Entry_price"
          required
        /><br />

        <button type="submit" class="button1">confirm</button>
      </div>

      <script>
        export default {};
      </script>
      <style lang=""></style>
    </form>
  </div>
</template>

<script>
export default {};
</script>
<style lang=""></style>
