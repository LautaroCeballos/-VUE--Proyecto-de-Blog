<template>
  <div>
    <section id="content">
      <h2 class="subheader">Formulario</h2>

      <!-- 
          Para utilizar los formularios en vue debemos incluir a nuestra etiqueta from
          el evento '@submit' o 'v-on:submit' para llamar a una funcion que nos enviara los datos.
          El .prevent cumple la funcion del preventDefault() para evitar que nuestro formulario recargue la pagina
          Cada elemento input del fomulario lleva un atributo binding 'v-model' para poder actualizar los datos en
          la variable que sera enviada.
      -->
      <form class="mid-form" @submit.prevent="enviarUsuario()">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" v-model="user.nombre" />
          <div v-if="submited && !$v.user.nombre.required">Este campo es requerido</div>
          <div v-if="submited && !$v.user.nombre.minLength">Cantidad minima de caracteres es de 2</div>
        </div>

        <div class="form-group">
          <label for="apellidos">Apellidos</label>
          <input type="text" name="apellidos" v-model="user.apellidos" />
          <div v-if="submited && !$v.user.apellidos.required">Este campo es requerido</div>
          <div v-if="submited && !$v.user.apellidos.minLength">Cantidad minima de caracteres es de 2</div>
        </div>

        <div class="form-group">
          <label for="bio">Biografia</label>
          <textarea name="bio" v-model="user.bio"></textarea>
          <div v-if="submited && !$v.user.bio.required">Este campo es requerido</div>
          <div v-if="submited && !$v.user.bio.minLength">Cantidad minima de caracteres es de 10</div>
        </div>

        <div class="form-group radibuttons">
          <input type="radio" name="genero" v-model="user.genero" value="hombre" checked /> Hombre
          <input type="radio" name="genero" v-model="user.genero" value="mujer" /> Mujer
          <input type="radio" name="genero" v-model="user.genero" value="otro" /> Otro
        </div>

        <div class="clearfix"></div>

        <input type="submit" value="Enviar" class="btn btn-success" />
      </form>

      <div class="datos" v-if="user.nombre && user.apellidos">
        <h1>{{user.nombre + ' ' + user.apellidos + ' ' + user.bio}}</h1>
      </div>
    </section>

    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>
// Validator para Vue
import { required, minLength } from "vuelidate/lib/validators";

import SidebarComponent from "./SidebarComponent.vue";

export default {
  name: "Formulario",
  components: {
    SidebarComponent,
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellidos: {
        required,
        minLength: minLength(2),
      },
      bio: {
        required,
        minLength: minLength(10),
      }
    }
  },
  data() {
    return {
      submited: false,
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    enviarUsuario() {
      console.log(this.user);
      this.submited = true;

      this.$v.$touch();
      if(this.$v.$invalid){
        return false;
      }
      alert("Validacion pasada");
    },
  },
};
</script>