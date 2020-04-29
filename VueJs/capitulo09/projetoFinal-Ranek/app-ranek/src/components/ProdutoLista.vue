<template>
  <b-row class="mt-3" v-if="produtos && produtos.length > 0">
    <b-col
      cols="12"
      sm="5"
      md="4"
      lg="3"
      v-for="(produto, idx) in produtos"
      :key="produto.id + idx"
    >
      <div
        @mouseenter="ativarShadow(idx)"
        @mouseleave="desativarShadow(idx)"
        :class="{ 'shadow-lg p-3 mb-5 bg-white rounded': produto.ativo}"
      >
        <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo" />
        <h3 class="text-left h3 text-warning">{{ produto.preco }}</h3>
        <h2 class="text-left h2">{{ produto.nome }}</h2>
        <p>{{ produto.descricao }}</p>
      </div>
    </b-col>
  </b-row>
  <b-row v-else-if="produtos && produtos.length == 0">
    <b-col md="12" class="justify-content-center">
      <h1 class="display-4">O item buscado não existe, tente buscar outro</h1>
    </b-col>
  </b-row>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "ProdutoLista",
  data() {
    return {
      produtos: [],
      produtosPorPagina: 9
    };
  },
  methods: {
    getProdutos() {
      //const URL_TO_FETCH = `/produto/${this.url.q}`;
      //const URL_TO_FETCH = "/produto";
      api.get(this.url).then(r => {
        this.produtos = r.data;
        console.log(this.produtos.length);
      });
    },
    ativarShadow(idx) {
      //this.sombra = "shadow-lg p-3 mb-5 bg-white rounded";
      let produto = this.produtos[idx];

      produto.ativo = true;
      this.$set(this.produtos, idx, produto);
    },
    desativarShadow(idx) {
      let produto = this.produtos[idx];

      produto.ativo = false;

      this.$set(this.produtos, idx, produto);
    }
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?limit_${this.produtosPorPagina}= + ${query}`;
    }
  },
  watch: {
    url() {
      this.getProdutos();
      console.log(this.url);
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style>
</style>
