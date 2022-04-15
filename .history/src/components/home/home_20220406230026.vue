<template lang="">
  <div>
    <Header />
    <div class="home-container">
      <h1>Search b</h1>
      <!-- search display -->
      <input
        v-model="searchKey"
        id="search"
        type="search"
        placeholder="Rechercher..."
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
          <div v-for="(event, index) in filteredList" :key="index" class="card">
            <div class="img-container">
              <img v-bind:src="event.photo" />
            </div>
            <div class="card-text">
              <h3>{{ event.title }}</h3>
              <h4>{{ event.category }}</h4>
              <span>{{ event.entry_price }}€</span>
            </div>
            <div class="card-icons">
              <div class="like-container">
                <input
                  type="checkbox"
                  :value="event.idEvent"
                  name="checkbox"
                  v-bind:id="event.idEvent"
                  v-model="liked"
                  @click="setLikeCookie"
                />
                <label v-bind:for="event.idEvent">
                  <i class="fas fa-heart"></i>
                </label>
              </div>
              <div class="add-to-cart">
                <button v-on:click="addToCart(event)">
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
            <h2>Going events</h2>
            <transition-group name="item-anim" tag="div" class="item-group">
              <div
                v-for="(event, idEvent) in cart"
                class="item"
                v-bind:key="event.idEvent"
              >
                <div class="img-container">
                  <img v-bind:src="event.photo" />
                </div>
                <div class="item-description">
                  <h4>{{ event.title }}</h4>
                  <h4>{{ event.date_event }}</h4>
                  <p>{{ event.entry_price }}€</p>
                </div>
                <div class="item-quantity">
                  <h6>nombre place : {{ event.nbr_places }}</h6>
                  <div class="cart-icons">
                    <button v-on:click="cartPlusOne(event)">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button v-on:click="cartMinusOne(event, idEvent)">
                      <i class="fa fa-minus"></i>
                    </button>
                    <button v-on:click="cartRemoveItem(idEvent)">
                      <i class="fa fa-trash"></i>
                    </button>
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
import axios from "axios";

export default {
  components: {
    Header,
  },
  data: () => {
    return {
      Event: [],
      /* Event: [
        {
          idEvent: 1,
          title: "party",
          entry_price: 12,
          photo: img1,
        },
        {
          idEvent: 2,
          title: "blabla",
          entry_price: 20,
          photo: img2,
        },
      ],*/
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
      return this.Event.filter((sendbackEvent) => {
        return sendbackEvent.title
          ?.toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total =
          total + this.cart[item].nbr_places * this.cart[item].entry_price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].nbr_places;
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
      document.addEventListener("input", () => {
        setTimeout(() => {
          this.$cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse(this.$cookies.get("like"));
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    },
    addToCart(event) {
      // check if already in array
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].idEvent === event.idEvent) {
          return this.cart[i].nbr_places++;
        }
      }
      this.cart.push({
        date_event: event.date_event,
        category: event.category,
        idEvent: event.idEvent,
        photo: event.Photo,
        title: event.title,
        entry_price: event.entry_price,
        nbr_places: 1,
      });
    },
    cartPlusOne(event) {
      event.nbr_places = event.nbr_places + 1;
    },
    cartMinusOne(event, idEvent) {
      if (event.nbr_places == 1) {
        this.cartRemoveItem(idEvent);
      } else {
        event.nbr_places = event.nbr_places - 1;
      }
    },
    cartRemoveItem(idEvent) {
      this.$delete(this.cart, idEvent);
    },
  },
  mounted() {
    axios
      .get("http://localhost:8086/retriveallevent")
      .then((response) => {
        this.Event = response.data;
      })
      .catch((reason) => {
        console.log(reason);
      });
    this.setNotif();
    document.addEventListener("click", this.setNotif);
  },
  updated() {
    // this.getLikeCookie();
  },
};
</script>
<style lang=""></style>
