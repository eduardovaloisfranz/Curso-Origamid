<template>
  <div>
    <Navbar />
    <div v-if="loading" class="pt-3 d-flex justify-content-center">
      <b-button variant="primary" disabled>
        <b-spinner small type="grow"></b-spinner>Carregando...
      </b-button>
    </div>
    <div v-else>
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 class="h2">Contato</h2>
            <p>{{descricao}}</p>
            <ul>
              <li v-for="(valor, chave) in contato" :key="chave">
                {{chave}}:
                <small class="text-muted">{{valor}}</small>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "contato",
  data() {
    return {
      loading: true,
      descricao: "",
      contato: {}
    };
  },
  components: {
    Navbar: Navbar
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        const URL_TO_FETCH = "http://localhost:3000/contato";
        fetch(URL_TO_FETCH).then(r =>
          r.json().then(r => {
            this.descricao = r.descricao;
            this.contato = r.contato;
            this.loading = false;
          })
        );
      }, 1500);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
</style>