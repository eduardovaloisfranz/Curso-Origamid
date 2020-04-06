<template>
  <div>
    <Navbar />
    <div v-if="loading" class="pt-3 d-flex justify-content-center">
      <b-button class="pt-3" variant="primary" disabled>
        <b-spinner small type="grow"></b-spinner>Carregando
      </b-button>
    </div>
    <div v-else class="fadeInRight animated faster">
      <b-container>
        <b-row>
          <b-col cols="12" sm="6">
            <Sobre :descricao="descricao"></Sobre>
            <Avaliacoes :avaliacoes="avaliacoes" />
          </b-col>
          <b-col cols="12" sm="6">
            <b-img
              class="pt-3"
              src="https://bingepost.com/wp-content/uploads/2020/02/tmx9ggtlcvursiijl4m3.png"
              fluid-grow
              alt="Fluid-grow image"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sobre from "../components/Sobre";
import Avaliacoes from "../components/Avaliacoes";

export default {
  name: "Home",
  components: {
    Navbar: Navbar,
    Sobre: Sobre,
    Avaliacoes: Avaliacoes
  },
  data() {
    return {
      loading: true,
      descricao: "",
      avaliacoes: []
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      const URL_TO_FETCH = "http://localhost:3000/home";
      setTimeout(() => {
        fetch(URL_TO_FETCH)
          .then(res =>
            res.json().then(r => {
              this.descricao = r.descricao;
              this.avaliacoes = r.avaliacoes;
              this.loading = false;
            })
          )
          .catch(res => console.log(res));
      }, 1500);
    }
  },
  created() {
    this.fetchData();
    console.log("Porque foi criado?");
  },

  beforeRouteUpdate(to, from, next) {
    to;
    from;
    console.log("oi");
    this.fetchData();
    next();
  }
};
</script>

<style>
</style>