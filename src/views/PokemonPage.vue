<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemonData = ref({
  sprites: {
    front_default: '',
    stats: []
  },
})

onBeforeMount(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    .then(response => {
      pokemonData.value = response.data
    })
    .catch()
    .finally()
})
</script>

<template>
  <div class="pokemon-info">
    <h1 class="pokemon-info__name">
      {{pokemonData.id}} {{pokemonData.name}}
    </h1>
    <div class="pokemon-info__content">
      <img class="pokemon-info__image"
           :src="pokemonData.sprites.front_default"
           alt="Image not found">
      <div class="pokemon-info__stats">
        <h2>States:</h2>
        <dl>
          <div v-for="(stat, index) in pokemonData.stats"
               v-bind:key="index">
            <dt>{{stat.stat.name}}:</dt>
            <dd>{{stat.base_stat}}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.pokemon-info
  display: flex
  flex-direction: column
  align-items: center
  width: 900px
  &__name
    width: 100%
    text-transform: capitalize
  &__content
    width: 100%
    display: flex
    justify-content: space-between
  &__image
    height: 300px
    border-radius: 8px
    border: 1px solid var(--color-border)
  &__stats
    dt, dd
      margin-right: 8px
      display: inline
</style>