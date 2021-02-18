<template>
  <div>
    <SliderComponent
      texto="Mi Componente"
    ></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">{{titulo}}</h2>
        <div id="mi-componente">
          <hr />
          <h1>Este es Mi Componente</h1>
          <h2>{{ subtitulo }}</h2>
          <h3>{{parametro_por_url}}</h3>

          <hr />

          <h2>Reactividad</h2>
          <!-- Los campos cambian dinamicamente gracias a la directiva de binding v-model -->
          <input type="text" v-model="nombre" />
          <p>
            Mi nombre es
            <strong>{{nombre}}</strong>
          </p>
          <pre>
            {{$data}}
          </pre>

          <!-- Condicionales en Vue v-if v-else-if v-else -->
          <h2>Directivas Condicionales</h2>
          <input type="number" v-model="edad" />
          Mi edad es:
          <strong>{{edad}}</strong>
          <br />
          <strong style="color: red; font-weight: bold;" v-if="edad && edad<18">Eres menor de edad!</strong>
          <strong
            style="color: green; font-weight: bold;"
            v-else-if="edad && edad>=18 && edad<65"
          >Eres mayor de edad!</strong>
          <strong style="color: purple; font-weight: bold;" v-else>Eres de edad avanzada!</strong>

          <!-- Directivas de bulces en Vue (iteraciones) v-for -->
          <!-- (Requiere una key al igual que React) -->
          <h2>Directivas de Bucles</h2>
          <ol>
            <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
          </ol>
        </div>
      </section>
    </div>
    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";

export default {
  name: "MiComponente", //Corresponde al nombre de la etiqueta
  mounted() {
    this.parametro_por_url = this.$route.params.parametro;
  },
  components: {
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      //Aqui devuelvo los datos que voy a tener disponibles en las vistas
      titulo: "Mi Componente",
      subtitulo: "Soy el subtitulo de mi componente. Hola Mundo!",
      parametro_por_url: null,
      nombre: "", //Ejemplo de reactividad
      edad: 24, //Ejemplo de directiva de condicional
      peliculas: ["Batman vs Superman", "El Señor de los Anillos", "Spiderman"], // Ejemplo de directivas de bucles
    };
  }
};
</script>