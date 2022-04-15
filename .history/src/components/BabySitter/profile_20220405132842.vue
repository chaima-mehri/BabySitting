<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          /><span class="font-weight-bold">Edogaru</span
          ><span class="text-black-50">edogaru@mail.com.my</span><span> </span>
        </div>
      </div>
      <div class="col-md border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Name</label
              ><input
                type="text"
                class="form-control"
                placeholder="first name"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels">Surname</label
              ><input
                type="text"
                class="form-control"
                value=""
                placeholder="surname"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Mobile Number</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter phone number"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address Line 1</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address line 1"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address Line 2</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address line 2"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Postcode</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address line 2"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">State</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address line 2"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Area</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter address line 2"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Email ID</label
              ><input
                type="text"
                class="form-control"
                placeholder="enter email id"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Education</label
              ><input
                type="text"
                class="form-control"
                placeholder="education"
                value=""
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">Country</label
              ><input
                type="text"
                class="form-control"
                placeholder="country"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels">State/Region</label
              ><input
                type="text"
                class="form-control"
                value=""
                placeholder="state"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary profile-button" type="button">
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 py-5">
          <div
            class="d-flex justify-content-between align-items-center experience"
          >
            <span>Edit Experience</span
            ><span class="border px-3 p-1 add-experience"
              ><i class="fa fa-plus"></i>&nbsp;Experience</span
            >
          </div>
          <br />
          <div class="col-md-12">
            <label class="labels">Experience in Designing</label
            ><input
              type="text"
              class="form-control"
              placeholder="experience"
              value=""
            />
          </div>
          <br />
          <div class="col-md-12">
            <label class="labels">Additional Details</label
            ><input
              type="text"
              class="form-control"
              placeholder="additional details"
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
body{margin-top:20px;
background-color:#f2f6fc;
color:#69707a;
}
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
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
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control, .dataTable-input {
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
