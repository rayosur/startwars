<template>
  <section>
      <div class="characters">
        
            <h1>{{this.$store.state.owen}}</h1>
           <a  href="http://localhost:8080/walker"><h1 class="letra"> {{this.$store.state.luke.name}} </h1></a>
             <a  href="http://localhost:8080/cha"><h1 class="letra"> {{this.$store.state.luke.name}} </h1></a>
          </div>
    
  </section>
</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
 import CardCharacter from '../components/CardCharacter.vue'

import LukeWalker from '../components/LukeWalker.vue'
export default {
    components:{
        CardCharacter,
        LukeWalker,
    },
setup(){
    const store = useStore()
    const characters = computed(() => {
        return store.state.charactersFilter
    })
    onMounted(() => {
        store.dispatch('getCharacters')
    })
    return {
        characters
    }
}
}
</script>

<style>

</style>