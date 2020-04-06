<template>
  <div id="app">
    <router-link :to="{name: 'Acao'}">Acoes</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>
