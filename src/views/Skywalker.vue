<template>
  <div>
    <Personajes />
<img class="star" alt="personaje" src="../assets/anakin.png">
    <h1>Nombre: {{ this.$store.state.luke.name }}</h1>
    <h1>Altura: {{ this.$store.state.luke.height }}</h1>
    <h1>color de pelo: {{ this.$store.state.luke.hair_color }}</h1>
    <h1>Género: {{ this.$store.state.luke.gender }}</h1>
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