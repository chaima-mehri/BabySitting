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
              <img :src="parent" alt="parent" />
            </div>
          </div>
          <label for="username"><b>First name</b></label>
          <input
            type="text"
            v-model="signupForm.username"
            placeholder="Enter first name"
            name="username"
            required
          />
        
          <label for="email"><b>Email</b></label>
          <input
            type="email"
            v-model="signupForm.email"
            placeholder="Enter email"
            name="email"
            required
          />
          
          
           
         

          <label for="psw"><b>Password</b></label>
          <input
            type="password"
            v-model="signupForm.password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <label for="cpsw"><b>Confirm Password</b></label>
          <input
            type="password"
            v-model="signupForm.confirmPassword"
            placeholder="confirm Password"
            name="cpsw"
            required
          />

         

          <button v-on:click="getsignup" class="button1">signup</button>
                 </div>

        <div class="container" style="background-color: #f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import log from "@/assets/log.jpg";
import babysitter from "@/assets/babysitter.jpg";
import parent from "@/assets/parent.jpg";
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
             parent: parent,
      babysitter: babysitter,
      log: log,
      
      signupForm: {
        username: null,
        password: null,
        email: null,
       
      },
    };
  },
  methods: {
    getsignup() {
       axios.post("https://reqres.in/api/users", signupForm).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
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
