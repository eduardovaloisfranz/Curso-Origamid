<template>
  <div id="app">
    <p @click="mostrarRouter">Esse é o app</p>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
    </nav>
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

<style>
a {
  padding: 10px;
}

.router-link-exact-active {
  color: "#84e";
  font-weight: bold;
}
</style>
