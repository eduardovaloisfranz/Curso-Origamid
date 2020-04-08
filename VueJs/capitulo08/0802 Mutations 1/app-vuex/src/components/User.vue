<template>
  <div>
    <p>User: {{user}}</p>
    <button @click="alterarNome">Alterar Nome</button>
    <button @click="completarAula">Completar Aula</button>
    <button @click="changeUser">Setar nome Ave</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "User",
  computed: {
    ...mapState(["user", "aulasCompletas"])
  },
  methods: {
    ...mapMutations(["changeUserName", "changeUser", "completarAula"]),

    alterarNome() {
      const nomeNovo = prompt("Digite o novo Nome");
      this.changeUserName({
        name: nomeNovo,
        totalAulas: 8001
      });
    },
    completarAulaAux() {
      this.completarAula();
    },
    alterarNomeAve() {
      this.changeUser();
    }
  }
};
</script>

<style>
</style>