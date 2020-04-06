<template>
  <div>
    <h1 @click="navegarCursos">Essa é a Home</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    navegarCursos() {
      //route - pagina
      //router obj
      //this.$router.push("cursos");
      setTimeout(() => {
        this.$router.push({ name: "cursoDescricao" });
      }, 100);
    }
  }
};
</script>

<style>
</style>