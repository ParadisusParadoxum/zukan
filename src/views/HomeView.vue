<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonList from '@/components/PokemonList.vue'
import type { Pokemon } from '@/stores/types'

const pokemon = ref<Pokemon[]>(usePokemonStore().pokemon)
const searchTerm = ref<string>('')

const filteredPokemon = computed(() => {
  return pokemon.value.filter(
    (singlePokemon: Pokemon) =>
      singlePokemon.names[0].name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      singlePokemon.names[1].name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      singlePokemon.names[2].name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>

<template>
  <main>
    <v-container class="mt-16" style="max-width: 50rem">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        v-model="searchTerm"
        placeholder="Search for a Pokémon..."
      ></v-text-field>
      <PokemonList :pokemon="filteredPokemon" />
    </v-container>
  </main>
</template>
