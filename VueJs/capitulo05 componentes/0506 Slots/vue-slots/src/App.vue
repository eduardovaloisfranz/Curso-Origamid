<template>
  <div id="app">
    <ModalPrincipal>
      <template #header>
        <h1>Header do slot</h1>
      </template>
      <template v-slot:default>
        <p>Esse é um teste</p>
        <button>Comprar</button>
      </template>
      <template #footer="{logo}">
        <p>Esse é o footer do slot</p>
        <p>{{logo}}</p>
      </template>

      <template #prop="{ user }">
        <p>{{user.nome}}</p>
      </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    ModalPrincipal: ModalPrincipal
  }
};
</script>

<style>
</style>
