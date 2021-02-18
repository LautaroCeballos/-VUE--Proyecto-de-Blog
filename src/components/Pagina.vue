<template>
    <section id="content">
        <h2 class="subheader">Pagina de Pruebas</h2>
        <h3>{{id_desde_url}}</h3>
        <!-- Directiva de eventos: Dentro de Vue los eventos se definen con @... -->
        {{nombre}}
        <button @click="actualizarNombre()">Actualizar Nombre</button> <!-- Ciclo de vida -->
        <button @click="redirigirAlBlog()">Redirigime</button> <!-- Redireccion del Router -->

    </section>
</template>

<script>
export default {
    name: "Pagina",
    
    //Hay 4 metodos del ciclo de vida (Hooks) en Vue
    created(){
        console.log("El componente se crea pero no ha terminado de cargarse");
    },
    mounted(){
        //Recogemos los datos que vienen por la ruta, los mandamos a data() y los mostramos en la vista
        this.id_desde_url = this.$route.params.id;
        console.log("Se ejecutara apenas se termine de cargar el componente");
    },
    updated(){
        console.log("Se ejecuta cuando el componente se actualiza o se actualizan sus datos");
    },
    destroyed(){
        console.log("Se ejecuta cuando el componente se destruye o de desmonte");
    },
    data(){
        return({
            id_desde_url: null,
            nombre: 'Lautaro Ceballos'
        });
    },

    //Los Metodos personalizados deben ser inicializados dentro de la funcion methods
    methods: {
        actualizarNombre(){
            this.nombre = 'Lautaro Ceballos Actualizado';
            console.log(this.nombre);
        },
        redirigirAlBlog(){ //Hacer redirecciones con el Router
            this.$router.push('/blog');
        }
    }
    
}
</script>