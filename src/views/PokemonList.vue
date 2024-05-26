<script setup>
import {onBeforeMount, ref, onMounted} from "vue";
import PokemonCard from "@/components/PokemonCard.vue";
import axios from "axios";

const pokemonsArray = ref([])
const offset = ref(0);
const containerList = ref(null)
const pokemonList = ref(null)
const pokemonCard = ref(null)
function init(){
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset.value}`)
    .then(response => {
      pokemonsArray.value.push(...response.data.results)
      offset.value += 25
    })
    .catch()
    .finally()
}

function getMorePokemons(){
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset.value}`)
    .then(response => {
      pokemonsArray.value.push(...response.data.results)
    })
    .catch()
    .finally()
  offset.value += 15
}

onBeforeMount(()=>{
  init()
});

onMounted(()=>{
  containerList.value.addEventListener("scroll", handleScroll);
});


const handleScroll = () => {
  if(pokemonList.value.getBoundingClientRect().bottom - 200 <= (window.innerHeight)){
    getMorePokemons()
  }
}
</script>

<template>
  <div ref="containerList"
       class="pokemon-list__container">
    <div ref="pokemonList"
         class="pokemon-list">
      <pokemon-card v-for="(pokemon) in pokemonsArray"
                    v-bind:key="pokemon.name"
                    :url="pokemon.url"/>
    </div>
  </div>
</template>

<style scoped lang="sass">
.pokemon-list
  width: fit-content
  display: flex
  flex-direction: column
  align-items: center
  margin: 0 auto
  padding-right: 8px
.pokemon-list__container
  max-height: calc(100vh - 64px)
  height: 100%
  overflow: auto

@media (min-width: 1024px)
  .pokemon-list
    display: grid
    grid-gap: 8px
    grid-template-columns: repeat(3, 1fr)
</style>