<template>
  <div id="app">
    {{livros}}
    <br />
    <br />
    <br />
    <h1>oi</h1>
    {{livrosLidos}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters["livrosLidos"],
    livros() {
      return this.$store.state.livros;
    }
  }
};
</script>

<style>
</style>
