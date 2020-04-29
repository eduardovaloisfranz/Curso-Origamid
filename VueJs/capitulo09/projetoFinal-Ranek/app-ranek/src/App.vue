<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style scoped>
</style>
