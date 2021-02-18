<template>
  <div id="slider" :class="{
    'slider-big': !showBtn,
    'slider-small': showBtn
  }">
    <h1>{{texto}}</h1>
    <router-link to="/blog" class="btn-white" v-if="!showBtn">Ir al blog</router-link>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: [
    'texto',
    'showBtn'
  ]
};
</script>