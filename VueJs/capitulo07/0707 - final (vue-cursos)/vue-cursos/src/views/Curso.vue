<template>
  <div>
    <Navbar />
    <div v-if="loading" class="d-flex justify-content-center pt-3">
      <b-button variant="primary" disabled>
        <b-spinner small type="grow"></b-spinner>Carregando..
      </b-button>
    </div>
    <div v-else class="fadeInRight animated faster">
      <b-container>
        <b-row>
          <b-col cols="12" sm="6" md="6" lg="6" class="pt-3">
            <h2 class="h2 text-left">{{aulas.nome}}</h2>
            <p class="text-left pt-3">{{aulas.descricao}} {{curso}}</p>
            <h2 id="text-left h2 pt-3">Aulas</h2>
            <b-button
              v-for="aula in aulas.aulas"
              :key="aula.id"
              block
              variant="link"
              class="text-dark bg-success"
              :to="{name: 'aula', params: { aula: aula.id}}"
            >{{aula.nome}}</b-button>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" class="pt-3">
            <router-view />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Curso",
  props: ["curso"],
  data() {
    return {
      loading: true,
      aulas: []
    };
  },
  components: {
    Navbar: Navbar
  },
  methods: {
    fetchData() {
      this.loading = true;
      const URL_TO_FETCH = `http://localhost:3000/curso/${this.curso}`;
      fetch(URL_TO_FETCH)
        .then(res =>
          res.json().then(r => {
            this.aulas = r;
            this.loading = false;
          })
        )
        .catch(res => console.log(res));
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>