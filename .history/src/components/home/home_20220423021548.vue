<template lang="">
  <div>
    <Header />
       <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <div class="home-container">
    
   <h1>search for BabySitters</h1>
      <!-- search display -->
      <input
        v-model="searchKey"
        id="search"
        type="search"
        placeholder=" address..."
        autocomplete="off"
      />
      <span v-if="searchKey && filteredList.length >= 1">
        {{ filteredList.length }} resultat<span v-if="filteredList.length >= 2"
          >s</span
        >
      </span>
      <!-- cards display -->
      <div class="card-cart-container">
        <div class="card-container">
          <div v-for="(BabySitters, index) in filteredList" :key="index" class="card">
            <div class="img-container">
              <img v-bind:src="BabySitters.image_name" />
            </div>
            <div class="card-text">
              <h3>{{ BabySitters.username }} </h3>
              <h4>{{ BabySitters.city }}</h4>
              
              <span>{{ BabySitters.hourly }}dt/1hour</span>
            </div>
            <div class="card-icons">
              <div class="like-container">
                <input
              
                  
                />
               
                  <i v-on:click="seeProfile()" class="fa fa-eye"></i>
                  
              
              </div>
              <div class="add-to-cart">
                <button v-on:click="addToCart(BabySitters)">
                  <i class="fas fa-calendar"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- no result message -->
          <div v-if="filteredList.length == []" class="no-result">
            <h3>Désolé</h3>
            <p>Aucun résultat trouvé</p>
          </div>
        </div>
        <!-- {{liked}} -->
        <!-- cart display -->
        <transition name="cart-anim">
          <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
            <h2> Desired BabySitter  </h2>
            <transition-group name="item-anim" tag="div" class="item-group">
              <div
                v-for="(BabySitters, id) in cart"
                class="item"
                v-bind:key="BabySitters.id"
              >
                <div class="img-container">
                  <img v-bind:src="BabySitters.image_name" />
                </div>
                <div class="item-description">
                  <h4>{{ BabySitters.username }} </h4>
                   
                  <span class="birthdatepicker-toggle-button"></span>
                    <input type="birthdate" id="start"
                    name="trip-start"
                    v-model=" OfferForm.birthdate"
                    required>
                  <p>{{ BabySitters.hourly }}dt</p>
                </div>
                <div class="item-quantity">
                
              
                  <h6>durartion : {{ BabySitters.nbr_heures }}h </h6><br>
                  
                  <div class="cart-icons">
                    <button v-on:click="cartPlusOne(BabySitters)">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button v-on:click="cartMinusOne(BabySitters, id)">
                      <i class="fa fa-minus"></i>
                    </button>
                    <button v-on:click="cartRemoveItem(id)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
     
                 </div>
                
        
              </div>
            </transition-group>
              <div class="grand-total">
                <div class="total">
                  
                  <h2>Total</h2>
                  <h2>{{ cartTotalAmount }} dt</h2>

                  </div>
                  <div class="total">
                <label for="label"><b>Add note</b></label>
                  <input
                    type="text"
                    v-model="OfferForm.note"
                    placeholder="note"
                    name="label"
                    required
                  />
                       

                    </div>  
                     <button v-on:click="sendOffer" class="button1">Add</button>
              </div>
          </div>
          
        </transition>

      </div>
    </div>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">Company Name © 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
   

  </div>
  
</template>
<script>
import Header from "@/components/header/header.vue";
//import img1 from "@/assets/test.jpg";
//import img2 from "@/assets/test1.jpg";
//import axios from "axios";



export default {
  name:"sendOffer",
  components: {
    Header,
  },
  data: () => {
    return {
     // BabySitters: [],
      OfferForm:{},
      BabySitters: [
        {
       
          
        }
      ],
      searchKey: "",
      liked: [],
      cart: [],
      users:[],
    };
  },
  computed: {
    
   filteredList() {
      return this.BabySitters
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total =
          total + this.cart[item].nbr_heures * this.cart[item].hourly;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].nbr_heures;
      }
      return itemTotal;
    },
  },
  methods: {
 
    seeProfile(){
     
     this.$router.push({
    name: 'check_profile', 
    params: { username: "fmlllllllll"}
}) 
    },

   
    setLikeCookie() {
      document.addBabySittersListener("input", () => {
        setTimeout(() => {
          this.$cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse(this.$cookies.get("like"));
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    },
    addToCart(BabySitters) {
      // check if already in array
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === BabySitters.id) {
          return this.cart[i].nbr_heures++;
        }
      }
      this.cart.push({
        birthdate: BabySitters.birthdate,
        city: BabySitters.city,
        id: BabySitters.id,
        username:BabySitters.username,
        
        image_name: BabySitters.image_name,
        
        hourly: BabySitters.hourly,
        nbr_heures: 1,
      });
    },
    cartPlusOne(BabySitters) {
      BabySitters.nbr_heures = BabySitters.nbr_heures + 1;
    },
    cartMinusOne(BabySitters, id) {
      if (BabySitters.nbr_heures == 1) {
        this.cartRemoveItem(id);
      } else {
        BabySitters.nbr_heures = BabySitters.nbr_heures - 1;
      }
    },
    cartRemoveItem(id) {
      this.$delete(this.cart, id);
    },

       sendOffer(){
   console.log('fml');
    
    location.reload()
  },
  },
  
  upbirthdated() {
    // this.getLikeCookie();
  },
};
</script>
<style lang="css">






.footer-clean {
  padding:50px 0;
  background-color:#fff;
  color:#4b4c4d;
}

.footer-clean h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-clean ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-clean ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-clean ul a:hover {
  opacity:1;
}

.footer-clean .item.social {
  text-align:right;
}

@media (max-width:767px) {
  .footer-clean .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align:center;
  }
}

.footer-clean .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color:inherit;
  opacity:0.75;
}

.footer-clean .item.social > a:hover {
  opacity:0.9;
}

@media (max-width:991px) {
  .footer-clean .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  .footer-clean .item.social > a {
    margin-top:10px;
  }
}

.footer-clean .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}










input[type="birthdate"]::-webkit-clear-button {
  height: 35px;
  margin: 0 auto;
  width: 100%;
  font-family: arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: lighten(#2f2f2f,40%);
  outline: none;
  border: 0;
  border-radius: 3px;
  padding: 0 3px;
  color: #fff;
}

input[type="birthdate"]::-webkit-inner-spin-button {
  height: 30px;
}

input[type="birthdate"]::-webkit-calendar-picker-indicator {
  font-size: 15px;
}
</style>
