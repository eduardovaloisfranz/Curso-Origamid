<template>
  <div id="app">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'cursos'}">Cursos</router-link>
    <router-view></router-view>
    <br />
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>
