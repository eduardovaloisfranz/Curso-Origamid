<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button
            size="sm"
            class="my-2 my-sm-0 text-white"
            variant="link"
            :to="{name: 'home'}"
          >Techno</b-button>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              size="sm"
              class="my-2 my-sm-0 text-white"
              variant="link"
              :to="{name: 'cursos'}"
            >Cursos</b-button>
            <b-button
              size="sm"
              class="my-2 my-sm-0 text-white"
              variant="link"
              :to="{name: 'contato'}"
            >Contato</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
.router-link-exact-active {
  color: #84e !important;
}
</style>