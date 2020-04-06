<template>
  <div>
    <div v-if="loading === true" class="d-flex justify-content-center">
      <b-button variant="primary" disabled>
        <b-spinner small type="grow"></b-spinner>Carregando..
      </b-button>
    </div>
    <div v-else-if="loading === false" class="fadeInRight animated fast">
      <h2 class="h2 text-left">{{aulaAtual.nome}}</h2>
      <b-embed type="iframe" aspect="4by3" :src="youtubeAulaUrl" allowfullscreen></b-embed>
    </div>
    <div v-else-if="loading === null"></div>
  </div>
</template>

<script>
export default {
  name: "Aula",
  props: ["aula"],
  data() {
    return {
      loading: null,
      aulaAtual: {}
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      const URL_TO_FETCH = `http://localhost:3000/aula/${this.aula}`;
      setTimeout(() => {
        fetch(URL_TO_FETCH).then(res =>
          res.json().then(r => {
            this.aulaAtual = r;
            this.loading = false;
          })
        );
      }, 1500);
    }
  },
  computed: {
    displayNone() {
      return "display: none;";
    },
    youtubeAulaUrl() {
      return `https://www.youtube.com/embed/${this.aulaAtual.youtube}?rel=0`;
    }
  },
  created() {
    this.fetchData();
  },
  beforeRouteUpdate(to, from, next) {
    to;
    from;
    this.fetchData();
    next();
  }
};
</script>

<style>
</style>