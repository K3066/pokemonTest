<script setup>
import { RouterView } from 'vue-router'
import FolderHeader from "@/components/FolderHeader.vue";
</script>

<template>
  <header>
    <folder-header/>
  </header>

  <router-view />
</template>

<style scoped>
</style>
