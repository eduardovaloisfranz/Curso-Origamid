<template>
  <div>
    <h2 class="h2 text-center">{{titulo}}</h2>
    <p class="text-left">{{curso.descricao}}</p>
  </div>
</template>

<script>
export default {
  name: "ItemLista",
  props: {
    curso: {
      type: Object,
      required: true
    }
  },
  computed: {
    titulo() {
      return `${this.curso.nome} - ${this.curso.totalAulas} aulas | ${this.curso.horas} horas`;
    }
  }
};
</script>

<style>
</style>