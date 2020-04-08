<template>
  <div>
    <p>Aula: {{aulasCompletas}} - Este é o usuario: {{user}}</p>
    <button @click="handleClick">Completar Aula</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Aula",
  computed: {
    ...mapState(["aulasCompletas", "user"])
  },
  methods: {
    handleClick() {
      this.$store.commit("completarAula");
    }
  }
};
</script>

<style>
</style>