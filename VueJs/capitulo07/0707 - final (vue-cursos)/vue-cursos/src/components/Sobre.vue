<template>
  <div>
    <h2 class="text-center pb-3 pt-3">Sobre a Techno</h2>
    <p class="text-center pt-3">{{descricao}}</p>
    <div class="justify-content-center d-flex">
      <b-button variant="success" :to="{name: 'cursos'}">Cursos</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sobre",
  props: {
    descricao: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>