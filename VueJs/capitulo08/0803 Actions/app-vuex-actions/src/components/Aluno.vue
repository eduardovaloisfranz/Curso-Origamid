<template>
  <div>
    <p>Aluno</p>
    <ul>
      <li
        v-for="(aula, idx) in Aulas"
        :key="aula.nome + idx"
      >Nome: {{aula.nome}} | Duracao: {{aula.duracao}} minutos</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Aluno",
  computed: {
    Aulas() {
      return this.$store.state.aulasCompletas;
    }
  }
};
</script>

<style>
</style>