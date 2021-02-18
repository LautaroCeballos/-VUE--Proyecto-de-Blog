<template>
  <header id="header">
    <div class="center">
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="logotipo" />
        <span id="brand">
          <strong>Curso</strong>Vuejs
        </span>
      </div>

      <nav id="menu">
        <ul>
          <li>
            <!-- Directiva de atributo para indicar cuando un elemento del menu esta activo con la clase "active" -->
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active">Formulario</router-link>
          </li>
          <li>
            <!-- Este es otro modo de pasar parametros por url (Ver MiComponente.vue para ver como se recibe) -->
            <router-link to="/mi-componente/Este es un parametro desde el header" active-class="active">Mi Componente</router-link>
          </li>
          <li>
            <router-link to="/peliculas" active-class="active">Peliculas</router-link>
          </li>
          <!-- Directivas de atributos para pasar objetos como parametros de url 
          <li>
            <router-link :to="{name: 'pagina', params: {id: 'Soy un valor de los parametros'}}" active-class="active">Pagina 1</router-link>
          </li> -->
        </ul>
      </nav>

      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>