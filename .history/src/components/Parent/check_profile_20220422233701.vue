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
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
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
                    <h4>{{ user.username }}</h4>
                    <p class="text-secondary mb-1">BabySitter</p>

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
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ user.username }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ user.email }}</div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">City</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ user.city }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Hourly</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ user.hourly }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12"></div>
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
                      <div class="col-sm-8">   
               
                	<h3 class="pull-left">New Comment</h3>
                	<button type="submit" class="btn btn-normal pull-right">Submit</button>
                    <fieldset>
                        <div class="row">
                            <div class="col-sm-3 col-lg-2 hidden-xs">
                            	<img class="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                            </div>
                            <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                            </div>
                        </div>  	
                    </fieldset>
                </form>
                      </div>





                        <div
                          class="g-mb-15"
                          v-for="review in review"
                          :key="review.id"
                        >
                          <h5 class="h5 g-color-gray-dark-v1 mb-0">
                            {{ review.nom }}
                          </h5>
                          <span class="g-color-gray-dark-v4 g-font-size-12">{{
                            review.date
                          }}</span>

                          <p>
                            {{ review.content }}
                          </p>
                        </div>
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
import axios from "axios";
export default {
  name: "profile",
  components: { Header },
  data: () => {
    return {
      user: [],
      review: [{}],
      reviewsForm: {},
    };
  },
  mounted() {
    if (localStorage.getItem("user") != "null") {
      axios
        .get(
          "http://localhost:5000/api/babysitter/" + localStorage.getItem("user")
        )

        .then((response) => {
          this.user = response.data[0];
          console.log(response.data[0]);
        })
        .catch((reason) => {
          console.log(reason);
        });

      axios
        .get("http://localhost:5000/api/review/" + localStorage.getItem("user"))
        .then((response) => {
          this.review = response.data;
          console.log(response);
        })
        .catch((reason) => {
          console.log("the error is ", reason);
        });
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    Edit(id) {
      console.log("edit" + id);
    },
  },
};
</script>
<style scoped>
body {
  margin-top: 20px;

  text-align: left;
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

/*commnet css */
body {
  margin-top: 20px;
}

.content-item {
  padding: 30px 0;
  background-color: #ffffff;
}

.content-item.grey {
  background-color: #f0f0f0;
  padding: 50px 0;
  height: 100%;
}

.content-item h2 {
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
  text-transform: uppercase;
  margin: 20px 0;
}

.content-item h3 {
  font-weight: 400;
  font-size: 20px;
  color: #555555;
  margin: 10px 0 15px;
  padding: 0;
}

.content-headline {
  height: 1px;
  text-align: center;
  margin: 20px 0 70px;
}

.content-headline h2 {
  background-color: #ffffff;
  display: inline-block;
  margin: -20px auto 0;
  padding: 0 20px;
}

.grey .content-headline h2 {
  background-color: #f0f0f0;
}

.content-headline h3 {
  font-size: 14px;
  color: #aaaaaa;
  display: block;
}

#comments {
  box-shadow: 0 -1px 6px 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

#comments form {
  margin-bottom: 30px;
}

#comments .btn {
  margin-top: 7px;
}

#comments form fieldset {
  clear: both;
}

#comments form textarea {
  height: 100px;
}

#comments .media {
  border-top: 1px dashed #dddddd;
  padding: 20px 0;
  margin: 0;
}

#comments .media > .pull-left {
  margin-right: 20px;
}

#comments .media img {
  max-width: 100px;
}

#comments .media h4 {
  margin: 0 0 10px;
}

#comments .media h4 span {
  font-size: 14px;
  float: right;
  color: #999999;
}

#comments .media p {
  margin-bottom: 15px;
  text-align: justify;
}

#comments .media-detail {
  margin: 0;
}

#comments .media-detail li {
  color: #aaaaaa;
  font-size: 12px;
  padding-right: 10px;
  font-weight: 600;
}

#comments .media-detail a:hover {
  text-decoration: underline;
}

#comments .media-detail li:last-child {
  padding-right: 0;
}

#comments .media-detail li i {
  color: #666666;
  font-size: 15px;
  margin-right: 10px;
}
</style>
