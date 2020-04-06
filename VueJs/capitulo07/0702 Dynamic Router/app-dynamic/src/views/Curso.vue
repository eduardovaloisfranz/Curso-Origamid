<template>
  <div>
    <h1>{{curso}}</h1>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-link :to="{name: 'descricao'}">Descricao</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: ["curso"], //Vem o curso como parametro
  created() {
    console.log("Esse Componente foi Criado");
    console.log(this.curso);
  }
};
</script>

<style>
</style>