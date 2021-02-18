<template>
  <div>
    <SliderComponent texto="Blog" showBtn="false"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>

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
  name: "Blog",
  components: {
    SliderComponent,
    SidebarComponent,
    Articles
  },
  mounted() {
    this.urlApi = Global.urlApi;
    this.getLastArticles();
  },

  data() {
    return {
      articles: [],
      urlApi: ''
    };
  },
  methods: {
    //Peticiones Ajax
    getLastArticles() {
      axios.get(this.urlApi + "articles")
      .then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>