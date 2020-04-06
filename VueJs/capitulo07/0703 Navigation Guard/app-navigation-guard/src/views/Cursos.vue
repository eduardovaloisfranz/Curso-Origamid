<template>
  <div>
    <h1>Essa é a Página de Cursos</h1>
    <p>Curso Atual: {{Curso}}</p>
    <router-link :to="{name: 'Curso', params: { Curso: 'css'}}">Css</router-link>
    <br />
    <router-link :to="{name: 'Curso', params: { Curso: 'javascript'}}">javascript</router-link>
    <br />
    <!-- <router-link :to="{name: 'Cursos', params: { Curso: 'html'}}">html</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  props: ["Curso"],
  created() {
    console.log("esse Componente foi Criado");
  },
  beforeRouteUpdate(to, from, next) {
    console.log("1s antes do router atualizar");
    next();
  }
};
</script>

<style>
</style>