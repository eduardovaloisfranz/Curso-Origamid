<template>
  <div>
    <p>Essa é a descricao da Aula</p>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
export default {
  name: "CursoDescricao"
};
</script>

<style>
p {
  height: 2000px;
}
</style>