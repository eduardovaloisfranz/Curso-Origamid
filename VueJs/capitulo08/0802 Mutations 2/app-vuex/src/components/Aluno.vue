<template>
  <div>
    <p>Lista de Aulas Concluidas</p>
    <ul>
      <li
        v-for="(aula, idx) in aulasConcluidas"
        :key="aula.nome + idx"
      >Nome: {{aula.nome}} - Duração: {{aula.duracao}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Aluno",
  computed: {
    ...mapState(["aulasConcluidas"])
  }
};
</script>

<style>
</style>