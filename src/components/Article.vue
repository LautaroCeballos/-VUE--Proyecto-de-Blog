<template>
  <div>
    <div class="center">
      <section id="content">
        <div v-if="!article">
          <p>Cargando...</p>
        </div>
        <article class="article-item article-detail" v-else>
          <div class="image-wrap" v-if="article.image">
            <img :src="urlApi + 'get-image/' + article.image" :alt="article.title" />
          </div>
          <h1 class="subheader">{{article.title}}</h1>

          <span class="date">{{article.date | moment('from', 'now')}}</span>
          <p>{{article.content}}</p>

          <div class="clearfix"></div>
          <router-link :to="'/blog/editar-articulo/' + article._id" class="btn btn-warning">Editar</router-link>
          <a @click="deleteArticle(article._id)" class="btn btn-danger">Borrar</a>
        </article>
      </section>
    </div>
    <SidebarComponent></SidebarComponent>
  </div>
</template>
<script>
import SidebarComponent from "./SidebarComponent.vue";
import Global from "../Global";
import swal from "sweetalert";
//Peticiones Ajax
import axios from "axios";

export default {
  name: "Article",
  components: {
    SidebarComponent,
  },
  mounted() {
    let articleId = this.$route.params.id;
    this.getArticle(articleId);
  },

  data() {
    return {
      urlApi: Global.urlApi,
      article: null,
    };
  },
  methods: {
    //Peticiones Ajax
    getArticle(articleId) {
      axios
        .get(this.urlApi + "article/" + articleId)
        .then((res) => {
          if (res.data.status == "sucess") {
            this.article = res.data.article;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteArticle(articleId) {
      swal({
        title: "¿Quieres borrar el archivo?",
        text:
          "Una vez eliminado no podras recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.urlApi + "article/" + articleId).then((res) => {
            swal(
              "Articulo borrado",
              "El articulo se ha borrado correctamente",
              "success"
            );
            console.log(res);
            this.$router.push("/blog");
          });
        } else {
          swal("Casi!", "Tus archivos estan a salvo", "error");
        }
      });
    },
  },
};
</script>