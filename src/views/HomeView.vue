<script setup lang="ts">
import type { Pokemon } from '@/stores/types'
import { ref, computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonDialog from '@/components/PokemonDialog.vue'
import PokemonList from '@/components/PokemonList.vue'

const dialog = ref<boolean>(false)
const pokemon = ref<Pokemon[]>(usePokemonStore().pokemon)
const searchTerm = ref<string>('')
const selectedPokemon = ref<Pokemon | null>(null)

const openDialog = (pokemon: Pokemon) => {
  selectedPokemon.value = pokemon
  dialog.value = !dialog.value
}

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
    <PokemonDialog v-model="dialog" :pokemon="selectedPokemon" @close="dialog = !dialog" />
    <v-container class="mt-16" style="max-width: 50rem">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        v-model="searchTerm"
        placeholder="Search for a Pokémon..."
      ></v-text-field>
      <PokemonList :pokemon="filteredPokemon" @open="openDialog" />
    </v-container>
  </main>
</template>
