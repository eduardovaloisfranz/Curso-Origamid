<template>
  <p>{{mensagem}}</p>
</template>

<script>
export default {
  data() {
    return {
      mensagem: "teste"
    };
  },
  created() {
    document.title = "Vue App";
  }
};
</script>

<style>
p {
  color: blue;
}
</style>