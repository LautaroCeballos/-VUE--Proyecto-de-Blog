<template>
  <div>
    <div class="center">
      <section id="content">
        
        <h2 class="subheader">Peliculas</h2>

        <!-- Aca hacemos uso de los filtros/tuberias/pipes -->
        <p>{{'aplicando pipes' | mayusculas('Un mensaje desde el filtro')}}</p>

        <div class="favorita" v-if="peliculaFavorita">
          <p>Pelicula favorita: <strong>{{peliculaFavorita.title}}</strong></p>

        </div>
        <div id="articles">
          <div v-for="pelicula in peliculasMayus" :key="pelicula.title">
            <Pelicula 
              :pelicula="pelicula"
              @peliculaFavorita="marcarFavorita"
            ></Pelicula>
          </div>
        </div>
      </section>
    </div>
    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>
//Importamos los componentes que resultan hijos del componente padre
import Pelicula from './Pelicula.vue';
import SidebarComponent from "./SidebarComponent.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    SidebarComponent,
  },
  methods: {
    marcarFavorita(favorita){
      //Recibiendo datos desde el hijo
      this.peliculaFavorita = favorita;  }
  },
  //  Las propiedades computadas s0n funciones que ejecutan una logica
  //  con una funcion determinada para aislar los procedimientos de la 
  //  vista
  computed: {
    peliculasMayus(){
      var pelisMod = this.peliculas;
      for(var i = 0; i < this.peliculas.length; i++){
        pelisMod[i].title = this.peliculas[i].title.toUpperCase();
      }
      return pelisMod;
    }
  },

//  Los filtros de Vue vienen a ser las pipes de Angular, hay muchas 
//  de filtros pero vue tiene los suyos propios. se pueden añadir 
//  parametros ademas del parametro del valor que se quiere modificar
  filters: {
    mayusculas(value, message){
      return value.toUpperCase() +  ' ' + message;
    }
  },

  data() {
    return {
      peliculaFavorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-113098552-large.jpg",
        },
        {
          title: "Intensamente",
          year: 2015,
          image:
            "https://mx.web.img3.acsta.net/pictures/17/08/07/21/43/466493.jpg",
        },
        {
          title: "6 Grandes Heroes",
          year: 2010,
          image:
            "https://1.bp.blogspot.com/-nV4Lo5hH-F0/VNGkYkj0z5I/AAAAAAAAHPo/pnGguGSPDrM/s1600/big%2Bhero%2B6%2Bwallpaper.jpg",
        },
      ],
    };
  },
};
</script>