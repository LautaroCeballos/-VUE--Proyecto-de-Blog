<template>
  <article class="article-item">
    <div class="image-wrap">
      <!-- 
            Se conoce como v-bind:atributo cuando quiero hacer un binding por interpolacion de un atributo.
            funciona de la misma manera en ambos casos (tambien cuando quiero indicar la key de un v-for)
      -->
      <img :src="pelicula.image" v-bind:alt="pelicula.title" />
    </div>

    <h2>{{pelicula.title}}</h2>

    <!-- 
          v-bind con condicional para insertar clases en dependiendo de una condicion
          se le debe pasar un JSON identificando primero la clase y luego la condicion a cumplir
    -->
    <span
      class="date"
      :class="{
            yeargreen: pelicula.year > 2015,
            yearred: pelicula.year <=2015
          }"
    >{{pelicula.year}}</span>

    <a href="article.html">Leer mas</a>
    
    <!-- Tambien se puede asi v-on:click="pasarFavoritaAlPadre(pelicula)" -->
    <input type="button" value="Marcar como favorita"
      @click="pasarFavoritaAlPadre(pelicula)"
    >
    <div class="clearfix"></div>
  </article>
</template>
<script>
export default {
  name: "Pelicula",
  props: [
      'pelicula'
  ],
  methods: {
    // Pasar datos al padre mediante eventos
    pasarFavoritaAlPadre(favorita){
      this.$emit('peliculaFavorita', favorita);
    }
  }
};
</script>