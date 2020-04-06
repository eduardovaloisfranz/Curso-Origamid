<template>
  <div>
    <h1>Essa é a Pagina de Cursos</h1>
    <p>O curso Ativo é :{{curso}}</p>
    <router-link :to="{name: 'curso', params: { curso: 'javascript'}}">Javascript</router-link>
    <router-link to="/cursos/javascript">html</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  props: ["curso"], //Vem o curso como parametro
  created() {
    console.log("Esse Componente foi Criado");
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Router atualizado");
    console.log(to);
    next();
  },
  computed: {}
};
</script>

<style>
</style>