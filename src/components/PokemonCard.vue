<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from "axios";

const props = defineProps({
  url: String
})

const pokemonData = ref({
  name: '',
  sprites: {
    front_default: ''
  },
  types: []
})

onBeforeMount(() => {
  axios.get(props.url)
    .then(response => {
      pokemonData.value = response.data
    })
    .catch()
    .finally()
})
</script>

<template>
  <router-link :to="{name: 'pokemon_info', params: {name: `${pokemonData.name}`}}">
    <div class="pokemon-card">
      <div class="pokemon-card__header">
        <span class="number">{{pokemonData.id}}</span>
        <span class="name">{{pokemonData.name}}</span>
      </div>
      <div class="pokemon-card__image">
        <img :src="pokemonData.sprites.front_default"
             alt="Image not found">
      </div>
      <div class="pokemon-card__types">
        <span>types:</span>
        <span v-for="type in pokemonData.types"
              :key="type.id">
          {{type.type.name}}
        </span>
      </div>
    </div>
  </router-link>  
</template>

<style scoped lang="sass">
.pokemon-card
  border: 1px solid var(--color-border)
  border-radius: 8px
  padding: 8px 16px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  min-height: 160px
  max-width: 300px
  min-width: 300px
  text-transform: capitalize
  cursor: pointer
  &__header
    font-size: 14pt
    font-weight: 600
  &__image
    display: flex
    align-items: center
    flex-direction: column
    width: 100%
    img
      width: 50%
  &__types
    display: flex
    flex-direction: row
  span:not(:last-child)
    margin-right: 8px
    margin-bottom: 8px
  &:hover
    background-color: hsla(27, 72%, 51%, 0.2)

</style>