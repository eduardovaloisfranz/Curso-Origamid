<template>
  <b-row>
    <b-col cols="12" sm="12" md="12" lg="12">
      <b-input-group class="mt-3">
        <b-form-input v-model="busca" placeholder="Buscar"></b-form-input>
        <b-input-group-append>
          <b-button type="submit" variant="outline-success" @click.prevent="buscarProduto">
            <svg
              class="bi bi-search"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clip-rule="evenodd"
              />
            </svg>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Buscar",
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    buscarProduto() {
      this.$router.push({ query: { q: this.busca } });
    }
  }
};
</script>

<style></style>
