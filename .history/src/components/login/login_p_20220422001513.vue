<template lang="">
  <div>
 

    <div class="container">
      
      
      <div class="row">
        
        <div class="col-md-2">
         
        </div>

     </div>
      <div class="row">
        
        <div class="col-md-6">
         <div id="logo">
          <div>
              <img :src="log" alt="log" />
          </div>
        </div>
      <label for="uname"><b>Username</b></label>
      <input
        type="text"
        v-model="loginForm.username"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        v-model="loginForm.password"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button v-on:click="getLogin" class="button1">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    </div>

    <div class="container" style="background-color: #f1f1f1">
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Don't have an account ?
        <router-link :to="{ name: 'signup' }">
         <a href="#">Sign up</a>
         </router-link>
         </span>
    </div>
  </div>
</div>
</div>
</template>
<script>
import log from "@/assets/log.jpg"
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      log : log,
      loginForm: {
        
      },
    };
  },
  methods: {
    getLogin() {
      if (!this.Auth)
         
    {
        axios.post("http://localhost:5000/user/login",this.loginForm).then((response) => {
      localStorage.setItem('user',this.loginForm.username);
      localStora
      this.$cookies.set("acess_token",response.data);
      this.$router.push('/');
      
      
     
    })
     .catch((error) => {
        console.log('erreur is ',error,this.loginForm);
    });
    
    }
      
    },
  },
};
</script>
<style scoped  lang="css">
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #ffffff;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
img{
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
