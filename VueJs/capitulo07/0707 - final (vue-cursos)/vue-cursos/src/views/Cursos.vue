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
        <b-row class="pt-3">
          <b-col cols="12" sm="6" md="6" lg="6">
            <h2 class="text-left h2">{{titulo}}</h2>
            <p class="text-left">{{descricao}}</p>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6">
            <div v-for="curso in cursos" :key="curso.id" @click="handleClick(curso)">
              <ItemLista :curso="curso"></ItemLista>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ItemLista from "../components/ItemLista";

export default {
  name: "Cursos",
  data() {
    return {
      titulo: "",
      descricao: "",
      cursos: [],
      loading: true
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        const URL_TO_FETCH = "http://localhost:3000/cursos";
        fetch(URL_TO_FETCH).then(res =>
          res
            .json()
            .then(r => {
              this.titulo = r.titulo;
              this.descricao = r.descricao;
              this.cursos = r.cursos;
              this.loading = false;
            })
            .catch(res => console.log(res))
        );
      }, 1500);
    },
    handleClick(curso) {
      this.$router.push({ name: "curso", params: { curso: curso.id } });
    }
  },
  components: {
    Navbar: Navbar,
    ItemLista: ItemLista
  },
  created() {
    this.fetchData();
  },
  beforeRouteUpdate(to, from, next) {
    to;
    from;
    next();
  }
};
</script>

<style>
</style>