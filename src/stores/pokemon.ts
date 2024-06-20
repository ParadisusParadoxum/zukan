import { defineStore } from 'pinia'
import type { Pokemon } from '@/stores/types'
import pokemonJson from '@/assets/pokemon.json'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemon: pokemonJson as Pokemon[]
  })
})
