<template>
  <div>
    <p>User: {{$store.state.user}} - {{aulasCompletas}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    }
  }
};
</script>

<style>
</style>