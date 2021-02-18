<template src="./CreateArticle.html"></template>
<script>

import SidebarComponent from "./SidebarComponent";
import Article from "../models/Article.js";
import Global from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "CreateArticle",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      urlApi: Global.urlApi,
      submited: false,
      file: "",
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
  mounted() {},
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },

    saveArticle() {
      this.submited = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.urlApi + "save/", this.article)
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

                let articleId = res.data.article._id;
                axios
                  .post(this.urlApi + "upload-image/" + articleId, formData)
                  .then((res) => {
                    if (articleId) {
                      swal(
                        'Articulo creado',
                        'El articulo se ha creado correctamente',
                        'success'
                      );
                      this.article = res.data.article;
                      this.$router.push("/blog");
                    } else {
                      //Mostrar alerta de error
                      swal(
                        'Articulo no creado',
                        'El articulo no se ha creado correctamente',
                        'error'
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal(
                  'Articulo creado',
                  'El articulo se ha creado correctamente',
                  'success'
                );
                this.article = res.data.article;
                this.$router.push("/blog");
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