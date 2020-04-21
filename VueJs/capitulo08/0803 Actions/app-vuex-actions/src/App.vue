<template>
  <div>
    {{acao}}
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from "@/components/Aluno";
import Curso from "@/components/Curso";

export default {
  name: "App",
  components: {
    Aluno: Aluno,
    Curso: Curso
  },
  created() {
    this.$store.dispatch("fetchAcao");
  },
  computed: {
    acao() {
      return this.$store.state.acao;
    }
  }
};
</script>

<style>
</style>
