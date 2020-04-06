<template>
  <div>
    <router-link :to="{name: 'Simbolo', params: { Simbolo: 'aapl'}}">Apple</router-link>
    <router-link :to="{name: 'Simbolo', params: { Simbolo: 'fb'}}">Facebook</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Acao"
};
</script>

<style>
</style>