<template>
  <div id="app">
    <h1 @click="mostrarRouter">Logo</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/cursos">Cursos</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    mostrarRouter() {
      console.log(this.$route);
    }
  }
};
</script>

<style >
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}
</style>
