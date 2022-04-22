<template lang="">

  <div class="container">
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
  <div class="row">
    <label for="">you are :</label>
    <div class="col-sm-6">
         <div id="logo">
            <div>
              <img :src="log" alt="log" />
            </div>
          </div>
    </div>
    <div class="col-sm-6">
      twohdfhdfhdf
        <div id="logo">
            <div>
              <img :src="log" alt="log" />
            </div>
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
#wrapper {
    margin-left: auto;
  margin-right: auto;
    width: 500px;
  
    overflow: hidden; /* will contain if #first is longer than #second */
}
#first {
   width: 500px;
    float:left; /* add this */
   
}
#second {
     float:right;
    overflow: visible; /* if you don't want #second to wrap below #first */
}





/*old css*/
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
