<template>
  <b-container>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12">
        <h2 class="h2 text-center text-info">👍 Compre ou Venda 👎</h2>
      </b-col>
    </b-row>
    <ProdutoBuscar />
    <ProdutoLista />
  </b-container>
</template>

<script>
import ProdutoBuscar from "@/components/ProdutoBuscar";
import ProdutoLista from "@/components/ProdutoLista";

export default {
  name: "Home",
  components: {
    ProdutoLista,
    ProdutoBuscar,
  },
};
</script>
