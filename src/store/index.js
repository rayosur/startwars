import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[],
    charactersFilter:[],
    luke:[],
    c3po:[],
    r2:[],
    darth:[],
    leila:[],
    owen:[],
    beru:[],
    r5:[],
    biggs:[],
    obiwan:[],
   
  },
  mutations: {
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    },
    setLuke(state, payload){
      state.luke = payload
    },
    setC3po(state, payload){
      state.c3po = payload
    },
    setR2(state, payload){
      state.r2 = payload
    },
    setDarth(state, payload){
      state.darth = payload
    },
    setLeila(state, payload){
      state.leila = payload
    },
    setOwen(state, payload){
      state.owen = payload
    },
    setBeru(state, payload){
      state.beru = payload
    },
    setR5(state, payload){
      state.r5 = payload
    },
    setBiggs(state, payload){
      state.biggs = payload
    },
    setObiwan(state, payload){
      state.obiwan = payload
    },
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch('https://swapi.dev/api/people/?page=1')
        const data = await response.json()
        console.log(data.results)
        commit('setCharacters' , data.results)
        commit('setCharactersFilter' , data.results)
        commit('setLuke' , data.results[0])
        commit('setC3po' , data.results[1])
        commit('setR2' , data.results[2])
        commit('setDarth' , data.results[3])
        commit('setLeila' , data.results[4])
        commit('setOwen' , data.results[5])
        commit('setBeru' , data.results[6])
        commit('setR5' , data.results[7])
        commit('setBiggs' , data.results[8])
        commit('setObiwan' , data.results[9])
      }
      
      catch (error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
