<template>
  <div class="home">
    <Personajes />
    <button @click="sortaltura()">Ordenar por altura</button>
    <button @click="sortnombre()">Ordenar por Alfabeticamente</button>
    <div v-for="character in characters" :key="character.id">
     
      <h1 class="letra">nombre: {{ character.name }}</h1>
      
      <h1 class="letra">Altura: {{ character.height }}</h1>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";



import Personajes from "../components/Personajes.vue";

export default {
  name: "Home",
  components: {
    
    Personajes,
  },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });

    return {
      characters,
    };
  },
  methods: {
    sortnombre: function () {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return this.characters.sort(compare);
    },
    sortaltura: function () {
      function compare(a, b) {
        if (a.height < b.height) return -1;
        if (a.height > b.height) return 1;
        return 0;
      }

      return this.characters.sort(compare);
    },
  },
};
</script>
<style scoped>
.letra {
  color: #42b983;
  font-size: 39px;
  font-family: cursive;
}
.home {
  background-color: black;
}
</style>