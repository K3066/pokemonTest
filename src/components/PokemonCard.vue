<script setup>
// import {onBeforeMount} from "vue";

import {onMounted} from "vue";

defineProps({
    name: String
})
// onBeforeMount(()=>{
//   console.log(1)
//     }
// )
onMounted(()=>{
  window.a
})
</script>

<template>
  <div class="pokemon-card">
    {{name}}
  </div>
</template>

<style scoped lang="sass">
.pokemon-card
  border: 1px solid var(--color-border)
  border-radius: 8px
  padding: 8px
  display: flex
  align-items: center
</style>