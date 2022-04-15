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
          <label for="firstName"><b>First name</b></label>
          <input
            type="text"
            v-model="signupForm.firstname"
            placeholder="Enter first name"
            name="firstName"
            required
          />
          <label for="lastName"><b>Last name</b></label>
          <input
            type="text"
            v-model="signupForm.lastname"
            placeholder="Enter last name"
            name="lastName"
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
          <label for="zip"><b>Address</b></label>
          <input
            type="text"
            v-model="signupForm.adress"
            placeholder="Enter address"
            name="address"
            required
          />
          <label for="address"><b>Address</b></label>
          <input
            type="text"
            v-model="signupForm.adress"
            placeholder="Enter address"
            name="address"
            required
          />

          <label for="cin"><b>CIN</b></label>
          <input
            type="number"
            v-model="signupForm.cin"
            placeholder="Enter cin"
            name="cin"
            required
          />

          <input type="radio" id="one" value="One" v-model="picked" />
          <label for="one">One</label>
          <br />
          <input type="radio" id="two" value="Two" v-model="picked" />
          <label for="two">Two</label>
          <br />
          <span>Picked: {{ picked }}</span>

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
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
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
export default {
  name: "signup",
  data() {
    return {
      log: log,
      signupForm: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    getsignup() {
      console.log("blabla", this.signupForm);
    },
  },
};
</script>
<style lang="css">
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
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
</style>
