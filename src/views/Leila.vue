<template>
  <div>
       <img class="star" alt="start logo" src="../assets/organa.png" />
    <Personajes />
    <h1>Nombre: {{ this.$store.state.leila.name }}</h1>
    <h1>Altura: {{ this.$store.state.leila.height }}</h1>
    <h1>color de pelo: {{ this.$store.state.leila.hair_color }}</h1>
    <h1>Género: {{ this.$store.state.leila.gender }}</h1>
  </div>
</template>
<script>
import Personajes from "../components/Personajes.vue";
export default {
  components: {
    Personajes,
  },
};
</script>

<script>
</script>

<style>
</style>