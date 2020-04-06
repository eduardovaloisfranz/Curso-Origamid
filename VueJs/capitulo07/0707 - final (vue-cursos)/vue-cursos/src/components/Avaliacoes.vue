<template>
  <div class="pt-3">
    <h3>Avaliações</h3>
    <b-list-group>
      <b-list-group-item v-for="(avaliacao, index) in avaliacoes" :key="avaliacao.nome+index">
        <p>{{avaliacao.nome}}</p>
        {{avaliacao.descricao}}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Avaliacoes",
  props: {
    avaliacoes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>