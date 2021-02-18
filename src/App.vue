<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
      <!-- Componente del router cargado desde el main.js -->
      <router-view></router-view>  
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

// import LastArticlesComponent from "./components/LastArticlesComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    // LastArticlesComponent,
    FooterComponent
  },
};
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

@import "./assets/css/style.css";
</style>
