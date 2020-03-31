<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

    <br />
    <br />
    <br />

    <select v-model="componenteEmpresa">
      <option value="SobreEmpresa">Sobre a Empresa</option>
      <option value="ServicosEmpresa">Serviços Prestados pela Empresa</option>
      <option value="FormularioContato">Formulario de Contato da Empresa</option>
    </select>
    <keep-alive>
      <component :is="componenteEmpresa"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDownload from "./components/AulaDownload";
import AulaDescricao from "./components/AulaDescricao";
import SobreEmpresa from "./components/SobreEmpresa";
import ServicosEmpresa from "./components/ServicosEmpresa";
import FormularioContato from "./components/FormularioContato";

export default {
  name: "App",
  data() {
    return {
      componenteAtivo: "",
      componenteEmpresa: ""
    };
  },
  components: {
    AulaDownload: AulaDownload,
    AulaDescricao: AulaDescricao,
    SobreEmpresa: SobreEmpresa,
    ServicosEmpresa: ServicosEmpresa,
    FormularioContato: FormularioContato
  }
};
</script>

<style>
</style>
