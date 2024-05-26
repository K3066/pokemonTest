<script setup lang="ts">
import MenuPoint from './MenuPoint.vue'
const menuList = [
  {name: "Pokemon's list", link: '/pokemonList'},
]
</script>

<template>
  <nav>
    <menu-point v-for="point in menuList"
                :name="point.name"
                :link="point.link"/>
  </nav>
</template>

<style lang="sass" scoped>
nav
  display: flex
</style>