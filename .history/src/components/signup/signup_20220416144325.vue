<template lang="">
<div>

  <div class="container">
    
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        
  <div class="row">
    <label for="choice" style="">You are :</label>
  
    <div class="col-lg-6">
         
            <div>
              
              <img :src="parent" alt="parent" style="width:135%" />
               <div class="overlay">
    <div class="text">Hello World</div>
  </div>
            </div>
            
     
          
    </div>

    <div class="col-lg-6">
     
      
            <div>
                 
              <img :src="babysitter" alt="babysitter" style="width:125%" />
               <div class="overlay">
    <div class="text">Hello World</div>
  </div>
            </div>
        
         
    </div>
  
  </div>
</div>
</div>
</template>
<script>
import log from "@/assets/log.jpg";
import babysitter from "@/assets/babysitter.jpg";
import parent from "@/assets/parent.jpg";
export default {
  name: "signup",
  data() {
    return {
      parent:parent,
      babysitter:babysitter,
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

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
.col-lg-6:hover .overlay {
  opacity: 1;
}


label[for=choice] {
text-align:center;
 padding-right: 0px;
 padding-left: 130px ;
 padding-bottom: 50px;
 font-weight: 900;
 font-size: 170%;

}

/*old css*/
body {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

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
  max-width: 50%;
 padding-top: 120px;
 padding-right: 150px;
 padding-left: 0px;
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
