//Aqui es donde se inicializan los paquetes que hemos instalado a travez de npm
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';

//Debemos importar los componentes que se cargaran a traves del router
import LastArticlesComponent from './components/LastArticlesComponent.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search';
import Redirect from './components/Redirect';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

Vue.config.productionTip = false

//configuracion del router
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, {
  moment
});

const routes = [
  {path: '/', component: LastArticlesComponent},
  {path: '/home', component: LastArticlesComponent},
  {path: '/hola-mundo', component: HelloWorld},
  {path: '/ultimos-articulos', component: LastArticlesComponent},
  {path: '/mi-componente/:parametro?', component: MiComponente},
  {path: '/peliculas', name: "peliculas", component: Peliculas},
  {path: '/blog', component: Blog},
  {path: '/redirect/:searchString', component: Redirect},
  {path: '/blog/buscador/:searchString', component: Search},
  {path: '/blog/articulo/:id', name: 'article', component: Article},
  {path: '/blog/crear-articulo', name: 'create', component: CreateArticle},
  {path: '/blog/editar-articulo/:id', name: 'edit', component: EditArticle},
  {path: '/formulario', component: Formulario},
  {path: '/pagina-de-pruebas/:id?', name: 'pagina', component: Pagina}, //Se le indica el nombre para luego hacer enlaces
  {path: '*', component: ErrorComponent}
];

const router = new VueRouter({ //Damos de alta el Router
  routes,
  mode: 'history' //Modo de funcionamiendo history es el clasico
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
