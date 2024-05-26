<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemonData = ref({
  sprites: {
    front_default: '',
    stats: [],
    base_experience: '',
    abilities: []
  },
})
const pokemonAbilities = ref([])

onBeforeMount(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    .then(response => {
      pokemonData.value = response.data
      pokemonData.value.abilities.forEach(item => {
        axios.get(item.ability.url)
          .then(response => {
            let ability = {}
            ability.name = response.data.name
            ability.description = response.data.effect_entries.find((e) => e.language.name === 'en').effect
            pokemonAbilities.value.push(ability)
          })
          .catch()
          .finally()
      })
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

      <div class="pokemon-info__characteristics">
        <div class="pokemon-info__type info-block">
          <h2>Types:</h2>
          <div v-for="(type, index) in pokemonData.types"
               v-bind:key="index">
            <span>{{type.type.name}}</span>
          </div>
        </div>
        <div class="pokemon-info__states info-block">
          <h2>States:</h2>
          <dl>
            <div v-for="(stat, index) in pokemonData.stats"
                 v-bind:key="index">
              <dt>{{stat.stat.name}}:</dt>
              <dd>{{stat.base_stat}}</dd>
            </div>
            <div>
              <dt>height:</dt>
              <dd>{{pokemonData.height}}</dd>
            </div>
            <div>
              <dt>weight:</dt>
              <dd>{{pokemonData.weight}}</dd>
            </div>
            <div>
              <dt>Base experience:</dt>
              <dd>{{pokemonData.base_experience}}</dd>
            </div>
          </dl>
        </div>
        <div class="pokemon-info__abilities info-block">
          <h2>abilities:</h2>
          <dl>
            <div v-for="(stat, index,) in pokemonAbilities"
                 v-bind:key="index">
              <dt>{{stat.name}}:</dt>
              <dd>{{stat.description}}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.pokemon-info
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  &__name
    width: 100%
    text-transform: capitalize
  &__content
    width: 100%
    display: flex
    column-gap: 16px
  &__image
    height: 300px
    border-radius: 8px
    border: 1px solid var(--color-border)
    background: var(--color-background-soft)

  &__characteristics
    display: flex
    flex-direction: column
    width: 100%
    gap: 8px
    background: var(--color-background-mute)
    border-radius: 8px
    padding: 8px
    border: 1px solid var(--color-border)
    dt, dd
      margin-right: 8px
      display: inline
  .info-block
    display: flex
    column-gap: 16px
    background: var(--color-background-soft)
    border-radius: 8px
    padding: 8px
    border: 1px solid var(--color-border)
  dl
    display: flex
    flex-direction: column
    gap: 8px
  dt
    background: var(--color-background-mute)
    padding: 4px
    border-radius: 4px
</style>