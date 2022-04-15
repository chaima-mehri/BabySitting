<template>
  <div>
    <Header />
    <div class="container">
      <div class="main-body">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />

        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar8.png"
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                    border-radius="50%"
                  />

                  <div class="mt-3">
                    <h4>John Doe</h4>
                    <p class="text-secondary mb-1">student</p>
                   

                    <button class="btn btn-outline-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">Kenneth Valdez</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">fip@jukmuh.al</div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <router-link :to="{ name: 'editProfile' }">
                      <a class="btn btn-info" target="__blank">Edit</a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <h5>Reviews</h5>
            <div class="row gutters-sm">

              <div class="col-sm-12 mb-2">
                
                <div class="card h-100">
                  
                  <div class="card-body">
                    <div class="media g-mb-30 media-comment">
                      
                      <div
                        class="media-body u-shadow-v18 g-bg-secondary g-pa-30"
                      >
                      
                        <div class="g-mb-15">
                          <h5 class="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                          <span class="g-color-gray-dark-v4 g-font-size-12"
                            >5 days ago</span
                          >
                        </div>

                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus ras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                        </p>

                        <ul class="list-inline d-sm-flex my-0">
                          <li class="list-inline-item g-mr-20">
                            <a
                              class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                              href="#!"
                            >
                              <i
                                class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"
                              ></i>
                              178
                            </a>
                          </li>
                          <li class="list-inline-item g-mr-20">
                            <a
                              class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                              href="#!"
                            >
                              <i
                                class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"
                              ></i>
                              34
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    
                        <div>
                        <input name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">
                        Hey... say something!
                        </input>
                       
                        <button class="button1">send</button>
                      </div>
                    </div>
                  </div>

                </div>
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
export default {
  name: "profile",
  components: { Header },
   data: () => {
    return {
      reviews:[],
      reviewsForm:{}
    }
},};
</script>
<style scoped>
body {
  margin-top: 20px;

  text-align: left;
}
textarea{
 width: 350px;
 height: 200px;
padding: 10px; 
border:3px 
dashed indigo;
background-color:aliceblue
}
.container {
  position: relative;
  top: 70px;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
body {
  margin-top: 20px;
  background: #eee;
}
@media (min-width: 0) {
  .g-mr-15 {
    margin-right: 1.07143rem !important;
  }
}
@media (min-width: 0) {
  .g-mt-3 {
    margin-top: 0.21429rem !important;
  }
}

.g-height-50 {
  height: 50px;
}

.g-width-50 {
  width: 50px !important;
}

@media (min-width: 0) {
  .g-pa-30 {
    padding: 2.14286rem !important;
  }
}

.g-bg-secondary {
  background-color: #fafafa !important;
}

.u-shadow-v18 {
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
}

.g-color-gray-dark-v4 {
  color: #777 !important;
}

.g-font-size-12 {
  font-size: 0.85714rem !important;
}

.media-comment {
  margin-top: 20px;
}
</style>
