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
            <img src="assets/wish-logo-800.png" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <i class="fas fa-heart"></i>
            <span id="nav-not"></span>
          </li>
          <li>
            <router-link to="/">
              <i class="fas fa-comment-alt"></i>
            </router-link>
          </li>

          <li>
            <router-link to="/">
              <i class="fas fa-sign-out-alt"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
