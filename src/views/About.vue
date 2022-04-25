<template>
  <div>
    <Personajes />

    <a href="http://localhost:8080/walker"><h1>{{ this.$store.state.luke.name }}</h1></a>
    <a href="http://localhost:8080/c3po"><h1>{{ this.$store.state.c3po.name }}</h1></a>
    <a href="http://localhost:8080/r2"><h1>{{ this.$store.state.r2.name }}</h1></a>
    <a href="http://localhost:8080/darth"><h1>{{ this.$store.state.darth.name }}</h1></a>
    <a href="http://localhost:8080/leila"><h1>{{ this.$store.state.leila.name }}</h1></a>
    <a href="http://localhost:8080/owen"><h1>{{ this.$store.state.owen.name }}</h1></a>
    <a href="http://localhost:8080/beru"><h1>{{ this.$store.state.beru.name }}</h1></a>
    <a href="http://localhost:8080/r5"><h1>{{ this.$store.state.r5.name }}</h1></a>
    <a href="http://localhost:8080/biggs"><h1>{{ this.$store.state.biggs.name }}</h1></a>
    <a href="http://localhost:8080/obiwan"><h1>{{ this.$store.state.obiwan.name }}</h1></a>
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