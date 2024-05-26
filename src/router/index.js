import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from "@/views/PokemonList.vue";
import PokemonPage from '@/views/PokemonPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pokemonList',
      name: 'pokemonList',
      component: PokemonList
    },
    {
      path: '/pokemon_info/:name?',
      name: 'pokemon_info',
      component: PokemonPage,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/pokemonList'
    },
  ]
})

export default router
