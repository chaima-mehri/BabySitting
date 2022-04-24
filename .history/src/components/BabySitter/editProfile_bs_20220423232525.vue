<template>
  <div>
    <Header />
    <div class="inside">
      <div class="container-xl px-4 mt-4">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />

        <hr class="mt-0 mb-4" />
        <div class="row">
          <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">Profile Picture</div>
              <div class="card-body text-center">
                <!-- Profile picture image-->
                 <img
                  class="img-account-profile rounded-circle mb-2"
                  src="blob:http://localhost:3000/ce5dc236-3a2f-4601-b9af-d293046acb5a"
                  alt=""
                  id="myImg"
                />
                <!-- Profile picture help block-->
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <!-- Profile picture upload button-->
               <input
            type="file"
            accept="image/*"
            ref="file"
           
           @change="uploadFile"
          />
           <button v-on:click ="changeImage" class="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <form>
                  <!-- Form Row-->
                  <div class="row gx-3 mb-3">
                    <div class="mb-3">
                      <label class="small mb-1" for="inputEmailAddress"
                        >username</label
                      >
                      <input
                        class="form-control"
                        id="inputEmailAddress"
                        type="email"
                        v-model="editProfileForm.username"
                        placeholder="Enter your email address"
                        value="name@example.com"
                      />
                    </div>
                    <!-- Form Group (first name)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName"
                        >First name</label
                      >
                      <input
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        v-model="editProfileForm.firstName"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <!-- Form Group (last name)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName"
                        >Last name</label
                      >
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        v-model="editProfileForm.lastName"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <!-- Form Row        -->
                  <div class="row gx-3 mb-3">
                    <!-- Form Group (zip code )-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputZipCode"
                        >Zip code
                      </label>
                      <input
                        class="form-control"
                        id="inputZipCode"
                        type="text"
                        v-model="editProfileForm.zipCode"
                        placeholder="Enter your zip code"
                      />
                    </div>
                    <!-- Form Group (address)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputAddress"
                        >Address</label
                      >
                      <input
                        class="form-control"
                        id="inputAddress"
                        type="text"
                        v-model="editProfileForm.adress"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  <!-- Form Group (email address)-->
                  <div class="mb-3">
                    <label class="small mb-1" for="inputEmailAddress"
                      >Email address</label
                    >
                    <input
                      class="form-control"
                      id="inputEmailAddress"
                      type="email"
                      v-model="editProfileForm.email"
                      placeholder="Enter your email address"
                      value="name@example.com"
                    />
                  </div>
                  <!-- Form Row-->
                  <div class="row gx-3 mb-3">
                    <!-- Form Group (phone number)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">Hourly</label>
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="tel"
                        v-model="editProfileForm.hourly"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <!-- Form Group (birthday)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday"
                        >Birthday</label
                      >
                      <input
                        class="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        v-model="editProfileForm.bithday"
                        placeholder="Enter your birthday"
                      />
                    </div>
                  </div>
                  <!-- Save changes button-->
                  <button
                    v-on:click="editProfile"
                    class="btn btn-primary"
                    type="button"
                  >
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import axios from "axios";
export default {
  name: "editProfile",
  components: { Header },
  data() {
    return {
      editProfileForm: {},
    };
  },

  methods: {
    uploadFile(event) {
      
        this.Images = event.target.files[0]
     //  const reader = new FileReader()

  //const rawImg = reader.readAsDataURL(this.Images)
  console.log(URL.createObjectURL(this.Images))
  document.getElementById("myImageId").src
 
      },
    changeImage(){
      const formData = new FormData();
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
      axios.post("http://localhost:5000/uploadImage/"+localStorage.getItem('user'),formData, { headers })
      .then((response) => {
        
        console.log(response)
        
      })
      .catch((error) => {
        console.log(error);
      });
      
      axios.get("http://localhost:5000/downloadImage/"+localStorage.getItem('user')).then((response) => {
        
        console.log(response)
       
        
      })
      .catch((error) => {
        console.log(error);
      });

    },
    editProfile() {
      console.log("test");
    },
  },
};
</script>
<style scoped>
body {
  margin-top: 40px;
  background-color: #f2f6fc;
}
.inside {
  position: relative;
  top: 70px;
}
.img-account-profile {
  height: 10rem;
}
.rounded-circle {
  border-radius: 50% !important;
}
.card {
  box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
}
.card .card-header {
  font-weight: 500;
}
.card-header:first-child {
  border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
  padding: 1rem 1.35rem;
  margin-bottom: 0;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid rgba(33, 40, 50, 0.125);
  z-index: 2;
}
.form-control,
.dataTable-input {
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c5ccd6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
  color: #0061f2;
  border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
  color: #69707a;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
