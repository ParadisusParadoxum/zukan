<script setup lang="ts">
import type { Pokemon } from '@/stores/types'

const props = defineProps<{
  pokemon: Pokemon[]
}>()
</script>

<template>
  <v-card>
    <v-virtual-scroll :items="props.pokemon" height="26rem" item-height="6.5rem">
      <template v-slot:default="{ item }">
        <v-list-item :title="item.names[1].name" :subtitle="item.names[2].name">
          <template v-slot:prepend>
            <v-img :width="100" :src="item.sprites[0].front_default"></v-img>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>
