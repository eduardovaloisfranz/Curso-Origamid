<template>
  <div>
    <h2 class="heartBeat animated">Bem vindo ao Curso de: {{curso}}</h2>
    <router-link :to="{name: 'cursoAulas'}">Aulas</router-link>
    <router-link :to="{name: 'cursoDescricao'}">Descricao</router-link>
    <transition enter-active-class="fadeInRight animated" mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: ["curso"]
};
</script>

<style scoped>
@import url("../assets/animate.css");
/* @import */
</style>