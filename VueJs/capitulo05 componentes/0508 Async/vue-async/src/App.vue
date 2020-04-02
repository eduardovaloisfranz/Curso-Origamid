<template>
  <div id="app">
    <select v-model="conteudoAtivo">
      <option value="SobreEmpresa">Sobre Empresa</option>
      <option value="ServicosEmpresa">Servicos Empresa</option>
      <option value="FormularioContato">Formulario Contato</option>
    </select>

    <component :is="conteudoAtivo"></component>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      conteudoAtivo: ""
    };
  },
  components: {
    SobreEmpresa: () => import("./components/SobreEmpresa"),
    ServicosEmpresa: () => import("./components/ServicosEmpresa")
  }
};
</script>

<style>
</style>
