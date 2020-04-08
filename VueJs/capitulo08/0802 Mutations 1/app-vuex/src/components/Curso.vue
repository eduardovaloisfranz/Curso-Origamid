<template>
  <div>
    <p>Curso:</p>
    <button @click="handleClick">Trocar nome</button>
    <Aula />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Aula from "@/components/Aula.vue";

export default {
  name: "Curso",
  components: {
    Aula: Aula
  },
  computed: {
    ...mapState(["user", "aulasCompletas"])
  },
  methods: {
    handleClick() {
      const novoNome = prompt("Informe o novo Nome");
      this.$store.commit("changeUserName", {
        name: novoNome,
        totalAulas: 8001
      });
    }
  }
};
</script>

<style>
</style>