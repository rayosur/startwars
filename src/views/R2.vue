<template>
  <div>
    <Personajes />
    <img class="star" alt="start logo" src="../assets/r2.png" />
    <h1>Nombre: {{ this.$store.state.r2.name }}</h1>
    <h1>Altura: {{ this.$store.state.r2.height }}</h1>
    <h1>color de pelo: {{ this.$store.state.r2.hair_color }}</h1>
    <h1>Género: {{ this.$store.state.r2.gender }}</h1>
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