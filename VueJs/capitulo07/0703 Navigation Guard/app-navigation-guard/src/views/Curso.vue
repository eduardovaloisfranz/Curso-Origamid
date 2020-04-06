<template>
  <div>
    <h1>Curso atual {{Curso}}</h1>
    <router-link :to="{name: 'DescricaoAulas'}">Descricao</router-link>
    <router-link :to="{name: 'ListaAulas'}">Lista de Aulas</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["Curso"],
  methods: {
    puxarDados() {
      console.log("Puxei Api");
    }
  },
  beforeRouteEnter(to, from, next) {
    //antes de entrar NESTE componente
    //this.puxarDados();
    next(vm => {
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    //this.puxarDados();
    console.log(this), next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    const sair = confirm("Voce deseja Sair");
    if (sair) {
      next();
    }
  }
};
</script>

<style>
</style>