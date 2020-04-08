<template>
  <div id="app">
    {{user}}
    <button @click="handleClick">Clique aqui</button>
    <User />
    <Curso />
  </div>
</template>

<script>
import User from "@/components/User.vue";
import Curso from "@/components/Curso.vue";

export default {
  name: "App",
  components: {
    User: User,
    Curso: Curso
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    handleClick() {
      this.$store.commit("changeUser");
    }
  }
};
</script>

<style>
</style>
