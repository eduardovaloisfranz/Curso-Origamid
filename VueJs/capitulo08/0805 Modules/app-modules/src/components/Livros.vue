<template>
  <div>
    <h2>Lista de livros</h2>
    <ul>
      <li v-for="(livro, idx) in livros" :key="livro+idx">
        {{livro}}
        <button @click="lerLivro(livro)">Ler livro</button>
      </li>
    </ul>
    <h1>Livros os quais ja foram lidos!</h1>
    <ul>
      <li v-for="(livro, idx) in livrosLidos" :key="livro+idx">{{livro}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "livros",
  data() {
    return {
      livros: [
        "Harry Potter",
        "Nao lembro o nome",
        "volta dos que não foram",
        "seila cara"
      ]
    };
  },
  methods: {
    lerLivro(livro) {
      this.$store.commit("ADICIONAR_LIVRO_LIDO", livro);
    }
  },
  computed: {
    livrosLidos() {
      return this.$store.state.livrosLidos;
    }
  }
};
</script>

<style>
</style>