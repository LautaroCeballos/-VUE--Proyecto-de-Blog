<template>
  <div>
    <SliderComponent
      texto="Bienvenido al Curso de Vuejs"
    ></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>

        <div id="articles" v-if="articles">
          <Articles
            :articles="articles"
          ></Articles>
        </div>

      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";

import Articles from "./Articles.vue";

import Global from '../Global';

//Peticiones Ajax
import axios from "axios";

export default {
  name: "LastArticlesComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    Articles
  },
  mounted() {
    this.urlApi = Global.urlApi;
    this.getArticles();
  },

  data() {
    return {
      articles: [],
      urlApi: ''
    };
  },
  methods: {
    //Peticiones Ajax
    getArticles() {
      axios.get(this.urlApi + "articles/" + "true").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>