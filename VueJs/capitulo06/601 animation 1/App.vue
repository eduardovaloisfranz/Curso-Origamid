<template>
  <div>
    <button @click="ativo = !ativo">Clique</button>
    <transition name="fade">
      <h1 v-if="ativo">Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ativo: false
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-enter-leave {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
opacity: 0;
}</style>