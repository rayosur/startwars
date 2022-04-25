<template>
  <div>
      <Personajes/>
     <img class="star" alt="start logo" src="../assets/dar.png" />
    <h1>Nombre: {{this.$store.state.darth.name}}</h1> 
    <h1>Altura: {{this.$store.state.darth.height}}</h1> 
    <h1>color de pelo: {{this.$store.state.darth.hair_color}}</h1> 
     <h1>Género: {{this.$store.state.darth.gender}}</h1> 
    
  </div>
</template>
<script>



import Personajes from '../components/Personajes.vue'
export default ({
    components: {
     Personajes
  }
})
</script>

<script>

</script>

<style>

</style>