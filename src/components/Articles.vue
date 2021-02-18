<template>
  <div id="article-list">
    <div id="articles" v-if="articles && articles.length > 0">
      <article class="article-item" v-for="article in articles" :key="article._id">
        <div class="image-wrap">
          <img
            :src="urlApi + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img src="../assets/default.jpg" :alt="article.title" v-if="!article.image" />
        </div>

        <h2>{{article.title}}</h2>
        <span class="date">{{article.date | moment("from", "now")}}</span>
        <!-- Links a reemplazados con router-link para pasarle datos y llamar rutas especificas -->
        <router-link :to="{name: 'article', params: {id: article._id}}">Leer mas</router-link>
        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length > 1">
      <p>No existes articulos para mostrar</p>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import Global from "../Global";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      urlApi: Global.urlApi,
    };
  },
};
</script>