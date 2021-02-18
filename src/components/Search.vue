<template>
  <div>
    <SliderComponent :texto="'Busqueda: ' +  searchString" showBtn="false"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Articulos encontrados</h2>

        <div id="articles" v-if="articles">
          <Articles
            :articles="articles"
          ></Articles>
        </div>
        
      </section>
    </div>
    <SidebarComponent></SidebarComponent>
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
  name: "Search",
  components: {
    SliderComponent,
    SidebarComponent,
    Articles
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },

  data() {
    return {
      articles: [],
      urlApi: Global.urlApi,
      searchString: null
    };
  },
  methods: {
    //Peticiones Ajax
    getArticlesBySearch(searchString) {
      axios.get(this.urlApi + "search/" + searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>