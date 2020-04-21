<template>
  <div>
    <ul>
      <li v-for="(aula, idx) in aulas" :key="aula.nome + idx">
        Nome:{{aula.nome}} | duracao: {{aula.duracao}}
        <button
          @click="completarAula(aula)"
        >Completar Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  Name: "Aulas",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 10
        },
        {
          nome: "JavaScript",
          duracao: 15
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ]
    };
  },
  methods: {
    ...mapActions(["completarAula"]),
    completarAula2(aula) {
      //this.$store.commit("COMPLETAR_AULA", aula);
      //this.$store.dispatch("completarAula", aula)
      console.log("naocaiu aqui");
      this.completarAula(aula);
    }
  }
};
</script>

<style>
</style>