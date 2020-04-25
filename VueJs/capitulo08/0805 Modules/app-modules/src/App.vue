<template>
  <div>
    <Livros />
    <h2>Acão</h2>
    <ul>
      <li v-for="(valor, chave) in acao" :key="chave">{{chave}} : {{valor}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    acao() {
      return this.$store.state.acao.acao;
    }
  },
  created() {
    console.log(this.$store);
    this.$store.dispatch("acao/fetchAcao");
  }
};
</script>

<style>
</style>
