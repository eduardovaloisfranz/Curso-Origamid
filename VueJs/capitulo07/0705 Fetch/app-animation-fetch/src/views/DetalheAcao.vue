<template>
  <div>
    <h1>Teste</h1>
    <p v-if="carregando">Carregando ação</p>
    <p v-else>{{Acao}}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "DetalheAcao",
  props: ["Simbolo"],
  data() {
    return {
      Acao: {},
      carregando: true
    };
  },
  methods: {
    puxarAcao() {
      this.Acao = {};
      this.carregando = true;
      const URL_TO_FETCH = `https://cloud.iexapis.com/stable/stock/${this.Simbolo}/quote?token=sk_4130f0a706a240139c2b6092d28cfad6`;
      fetch(URL_TO_FETCH)
        .then(res =>
          res.json().then(r => {
            this.Acao = r;
            this.carregando = false;
          })
        )
        .catch(res => console.log(res));
    }
  },
  beforeRouteEnter(to, from, next) {
    to;
    from;
    next(vm => {
      vm.puxarAcao();
    });
  },
  beforeRouteLeave(to, from, next) {
    to;
    from;
    let sair = confirm("Deseja Sair?");
    if (sair) {
      next();
    }
  }

  // beforeRouteUpdate(to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   this.puxarAcao();
  //   next();
  // }
  /*watch: {
    Simbolo() {
      this.puxarAcao();
    }
  }*/
};
</script>

<style>
</style>