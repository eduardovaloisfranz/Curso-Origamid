<template>
  <div>
    <h1>Home</h1>
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from "@/components/Aluno.vue";
import Curso from "@/components/Curso.vue";

export default {
  name: "App",
  components: {
    Aluno: Aluno,
    Curso: Curso
  }
};
</script>

<style>
</style>
