<template>
  <div>
    <Personajes />

    <h1>Nombre: {{ this.$store.state.r5.name }}</h1>
    <h1>Altura: {{ this.$store.state.r5.height }}</h1>
    <h1>color de pelo: {{ this.$store.state.r5.hair_color }}</h1>
    <h1>Género: {{ this.$store.state.r5.gender }}</h1>
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