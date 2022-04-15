<template lang="">
  <div>
    <Header />
    <div class="home-container">
      <h1>Search BabySitters</h1>
      <!-- search display -->
      <input
        v-model="searchKey"
        id="search"
        type="search"
        heureholder="Rechercher..."
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
              <img v-bind:src="BabySitters.photo" />
            </div>
            <div class="card-text">
              <h3>{{ BabySitters.firstName }} {{BabySitters.lastName}}</h3>
              <h4>{{ BabySitters.category }}</h4>
              
              <span>{{ BabySitters.price }}dt/1hour</span>
            </div>
            <div class="card-icons">
              <div class="like-container">
                <input
                  type="checkbox"
                  :value="BabySitters.idBabySitters"
                  name="checkbox"
                  v-bind:id="BabySitters.idBabySitters"
                  v-model="liked"
                  @click="setLikeCookie"
                />
                <label v-bind:for="BabySitters.idBabySitters">
                  <i class="fas fa-heart"></i>
                </label>
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
            <h2>Going BabySitterss</h2>
            <transition-group name="item-anim" tag="div" class="item-group">
              <div
                v-for="(BabySitters, idBabySitters) in cart"
                class="item"
                v-bind:key="BabySitters.idBabySitters"
              >
                <div class="img-container">
                  <img v-bind:src="BabySitters.photo" />
                </div>
                <div class="item-description">
                  <h4>{{ BabySitters.title }}</h4>
                  <h4>{{ BabySitters.date_BabySitters }}</h4>
                  <p>{{ BabySitters.price }}€</p>
                </div>
                <div class="item-quantity">
                
                <div>
                  <h6>nombre heure : {{ BabySitters.nbr_heures }}</h6><br>
                  
                  <div class="cart-icons">
                    <button v-on:click="cartPlusOne(BabySitters)">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button v-on:click="cartMinusOne(BabySitters, idBabySitters)">
                      <i class="fa fa-minus"></i>
                    </button>
                    <button v-on:click="cartRemoveItem(idBabySitters)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                  </div>
                <div>
                  dfg
                </div>


                </div>
                
              </div>
            </transition-group>
            <div class="grand-total">
              <div class="total">
                <h2>Total</h2>
                <h2>{{ cartTotalAmount }} €</h2>
              </div>
              <h6>Total articles : {{ itemTotalAmount }}</h6>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
//import img1 from "@/assets/test.jpg";
//import img2 from "@/assets/test1.jpg";
//import axios from "axios";

export default {
  components: {
    Header,
  },
  data: () => {
    return {
     // BabySitters: [],
       BabySitters: [
        {
          idBabySitters: 1,
          firstName:"sarah",
          lastName:"ksr",
          title: "party",
          price: 12,
          address:'mestir',
          
        },
        {
          idBabySitters: 2,
          firstName:"lamis",
          lastName:"ksr",
          title: "party",
          price: 17,
          address:'mahdia',
        },
      ],
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    checkbox() {
      return document.getElementsByTagName("input");
    },
    notif() {
      return document.getElementById("nav-not");
    },
    filteredList() {
      return this.BabySitters.filter((sendbackBabySitters) => {
        return sendbackBabySitters.title
          ?.toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total =
          total + this.cart[item].nbr_heures * this.cart[item].price;
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
    checkboxCheck: () => {
      for (let i = 0; i < this.checkbox.length; i++) {
        if (this.checkbox[i].checked) {
          return true;
        }
      }
      return false;
    },
    setNotif: () => {
      if (this.checkboxCheck()) {
        // console.log('true');
        this.notif.style.visibility = "visible";
        this.notif.style.opacity = "1";
      } else {
        // console.log('false');
        this.notif.style.visibility = "hidden";
        this.notif.style.opacity = "0";
      }
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
        if (this.cart[i].idBabySitters === BabySitters.idBabySitters) {
          return this.cart[i].nbr_heures++;
        }
      }
      this.cart.push({
        date_BabySitters: BabySitters.date_BabySitters,
        category: BabySitters.category,
        idBabySitters: BabySitters.idBabySitters,
        photo: BabySitters.Photo,
        title: BabySitters.title,
        price: BabySitters.price,
        nbr_heures: 1,
      });
    },
    cartPlusOne(BabySitters) {
      BabySitters.nbr_heures = BabySitters.nbr_heures + 1;
    },
    cartMinusOne(BabySitters, idBabySitters) {
      if (BabySitters.nbr_heures == 1) {
        this.cartRemoveItem(idBabySitters);
      } else {
        BabySitters.nbr_heures = BabySitters.nbr_heures - 1;
      }
    },
    cartRemoveItem(idBabySitters) {
      this.$delete(this.cart, idBabySitters);
    },
  },
 /* mounted() {
    axios
      .get("http://localhost:8086/retriveallBabySitters")
      .then((response) => {
        this.BabySitters = response.data;
      })
      .catch((reason) => {
        console.log(reason);
      });
    this.setNotif();
    document.addBabySittersListener("click", this.setNotif);
  },*/
  updated() {
    // this.getLikeCookie();
  },
};
</script>
<style lang=""></style>
