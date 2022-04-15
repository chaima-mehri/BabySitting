<template lang="">
  <div>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="icon" href="./assets/img/vueLogo.png" type="image/png" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />
    <link href="./assets/style/style.css" rel="stylesheet" />
    <link href="./assets/style/chat.css" rel="stylesheet" />

    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img :src="logo" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li v-if="true">
            <router-link :to="{ name: 'user' }">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <i class="fas fa-heart"></i>
            <span id="nav-not"></span>
          </li>
          <li>
            <router-link :to="{ name: 'Chat' }">
              <i class="fas fa-comment-alt"></i>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'login' }">
              <i class="fas fa-sign-out-alt"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import logo from "@/assets/log.jpg";
export default {
  props: {
    // isAdmin: Boolean,
  },
  data() {
    return {
      logo: logo,
      isAdmin: false,
    };
  },
};
</script>
<style lang="css">
nav {
  padding: 0.8rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
  top:0;
}
nav .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  margin: 0 auto;
 

}
nav .nav-container #logo {
  height: 32px;
  width: 66%;
}
nav .nav-container #logo img {
  height: 100%;
}
nav .nav-container #icons {
  display: flex;
  font-size: 24px;
  width: 34%;
  justify-content: flex-end;
}
nav .nav-container #icons li {
  margin-left: calc(35% + 8px);
}
nav .nav-container #icons li a {
  position: relative;
}
nav .nav-container #icons #nav-not {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #ff2929;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: 0.6s;
  transform: translate(-4px, -1px);
}
nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}
nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}
#logo{</style>
