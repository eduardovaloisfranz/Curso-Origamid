<template>
  <div>
    <p>Curso:</p>
    <Aulas />
  </div>
</template>

<script>
import Aulas from "@/components/Aulas.vue";

export default {
  name: "Curso",
  components: {
    Aulas: Aulas
  }
};
</script>

<style>
</style>