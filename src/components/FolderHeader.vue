<script setup>
import AppLogo from "@/components/AppLogo.vue";
import MainMenu from '@/components/mainMenu/MainMenu.vue'
</script>

<template>
  <div class="folder-header">
    <app-logo/>
    <main-menu/>
    <div class="wrapper"/>
  </div>
</template>

<style lang="sass" scoped>
.folder-header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 16px
</style>