import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from "@/views/PokemonList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'home',
      component: PokemonList
    },
  ]
})

export default router
