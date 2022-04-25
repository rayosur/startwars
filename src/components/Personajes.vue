<template>
  <section>
  
 <img class="star" alt="Vue logo" src="../assets/Lego.png" />

    <div class="characters">
     
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: {},
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
};
</script>

<style>
 .star{
  width: 160px;
}
</style>