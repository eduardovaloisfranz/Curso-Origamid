<template>
  <div>
    <p>Lista de Aulas:</p>
    <ul>
      <li v-for="(aula, idx) in aulas" :key="aula.nome + idx">
        {{aula.nome}} Duracao: {{aula.duracao}}
        <button @click="concluirAula(aula)">Concluir Aula!</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Aulas",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["CONCLUIR_AULA"]),

    concluirAula(aula) {
      this.CONCLUIR_AULA(aula);
    }
  }
};
</script>

<style>
</style>