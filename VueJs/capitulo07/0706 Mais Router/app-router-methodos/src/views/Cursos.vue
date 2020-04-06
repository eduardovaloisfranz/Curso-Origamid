<template>
  <div>
    <router-link :to="{name: 'curso', params: { curso: 'css'}}">Css</router-link>
    <br />
    <router-link :to="{name: 'curso', params: { curso: 'javascript'}}">javascript</router-link>
    <br />
    <router-link :to="{name: 'curso', params: { curso: 'java'}}">java</router-link>
    <br />
    <router-link :to="{name: 'curso', params: { curso: 'php'}}">php</router-link>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cursos"
};
</script>

<style>
</style>