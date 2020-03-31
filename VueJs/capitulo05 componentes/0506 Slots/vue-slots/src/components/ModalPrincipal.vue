<template>
  <div class="modal">
    <h1>Esse é o modal</h1>
    <h2>{{user.nome}}</h2>

    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot>Fallback se não tiver conteúdo</slot>
    </section>
    <footer>
      <slot name="footer" :logo="logo"></slot>
    </footer>

    <slot name="prop" :user="user"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      user: {
        nome: "Eduardo"
      },
      logo: "Techno"
    };
  }
};
</script>

<style>
</style>