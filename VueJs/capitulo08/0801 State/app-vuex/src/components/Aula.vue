<template>
  <div>
    <p>Aula {{totalAulas}} esse é o usuario {{user}}</p>
    <p>{{aulasCompletas}}</p>
    <button @click="mostrarConsole">Mostrar Console</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Aula",
  data() {
    return {
      totalAulas: 25,
      nome: "André"
    };
  },
  methods: {
    mostrarConsole() {
      console.log(this.user);
    }
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    }
  }
};
</script>

<style>
</style>