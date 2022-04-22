<template lang="">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div id="logo">
            <div>
              <img :src="log" alt="log" />
            </div>
          </div>
           <label for="personType"><b>You are :</b></label>
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">Parent</label>
            <br />
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">BabySitter</label>
            <br />

          <button v-on:click="getsignup" class="button1">signup</button>
                 </div>

        <div class="container" style="background-color: #f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
      </div>
    </div>
  </div>
  <
</template>
<script>
import log from "@/assets/log.jpg";
export default {
  name: "signup",
  data() {
    return {
      log: log,
       picked:null,
      signupForm: {
        username: null,
        password: null,
       
      },
    };
  },
  methods: {
    getsignup() {
      console.log("blabla", this.picked);
    },
  },
};
</script>
<style scoped lang="css">
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #ffffff;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


img {
  max-width: 350px;
  margin-left: 36px;
}
.button1 {
  background-color: #83b39b;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.button1:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
  max-width: 500px;
  margin: auto;
}

span.psw {
  float: right;
  padding-top: 16px;
}



  label {
      float: left;
      clear: none;
      display: block;
      padding: 0px 1em 0px 8px;
    }
    
    input[type=radio],
    input.radio {
      float: left;
      clear: none;
      margin: 2px 0 0 2px;
    }

</style>
