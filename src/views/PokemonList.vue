<script setup>
import {onBeforeMount, ref} from "vue";
import PokemonCard from "@/components/PokemonCard.vue";
import axios from "axios";
onBeforeMount(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`).then(response => {
    pokemonsArray.value = response.data.results
  })
})
const pokemonsArray = ref([])
</script>

<template>
  <div class="pokemon-list">
    <template v-for="(pokemon) in pokemonsArray"
              v-bind:key="pokemon.name">
      <pokemon-card :name="pokemon.name"/>
    </template>
  </div>
</template>

<style scoped lang="sass">
.pokemon-list
  margin: 0 auto
  overflow: auto
  max-height: calc(100vh - 96px)
  display: grid
  grid-template-columns: repeat(1 ,1fr)
  grid-gap: 8px
@media (min-width: 1024px)
  .pokemon-list
      grid-template-columns: repeat(3 ,1fr)
</style>