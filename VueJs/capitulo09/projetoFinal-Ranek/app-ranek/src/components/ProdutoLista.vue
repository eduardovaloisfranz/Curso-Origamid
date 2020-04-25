<template>
  <b-row class="mt-3">
    <b-col
      cols="12"
      sm="5"
      md="4"
      lg="3"
      v-for="(produto, idx) in produtos"
      :key="produto.id + idx"
    >
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <h1>{{ produto.id }}</h1>
      <p>{{ produto.nome }}</p>
      <p>{{ produto.fk_usuario }} - id usuario que publicou a compra</p>
      <p>{{ produto.preco }}</p>
      <p>{{ produto.vendido }}</p>
      <p>{{ produto.descricao }}</p>
    </b-col>
  </b-row>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ProdutoLista",
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    getProdutos() {
      const URL_TO_FETCH = "/produto";
      api.get(URL_TO_FETCH).then((r) => {
        this.produtos = r.data;
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
