<script setup>
import AppLogo from "@/components/AppLogo.vue";
</script>

<template>
  <div class="folder-header">
    <app-logo/>
    <div class="wrapper"/>
  </div>
</template>

<style lang="sass" scoped>
.folder-header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 32px
  svg use
    stroke: red
</style>