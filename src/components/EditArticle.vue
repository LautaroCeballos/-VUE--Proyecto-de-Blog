<template src="./CreateArticle.html"></template>
<script>
import SidebarComponent from "./SidebarComponent";
import Article from "../models/Article.js";
import Global from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      urlApi: Global.urlApi,
      submited: false,
      file: "",
      isEdit: true,
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  mounted() {
    let articleId = this.$route.params.id;
    this.getArticle(articleId);
  },

  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },

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

    saveArticle() {
      let articleId = this.$route.params.id;
      this.submited = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.urlApi + "article/" + articleId, this.article)
          .then((res) => {
            if (res.data.status == "success") {
              //subida de archivo
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);

                // let articleId = res.data.article._id;
                axios
                  .post(this.urlApi + "upload-image/" + articleId, formData)
                  .then((res) => {
                    if (articleId) {
                      swal(
                        "Articulo editado",
                        "El articulo se ha editado correctamente",
                        "success"
                      );
                      this.article = res.data.article;
                      this.$router.push("/blog/articulo/" + articleId);
                    } else {
                      //Mostrar alerta de error
                      swal(
                        "Articulo no se ha editado",
                        "El articulo no se ha editado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal(
                  "Articulo editado",
                  "El articulo se ha editado correctamente",
                  "success"
                );
                this.article = res.data.article;
                this.$router.push("/blog/articulo/" + articleId);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>