<script setup lang="ts">
import type { Pokemon } from '@/stores/types'

const props = defineProps<{ pokemon: Pokemon[] }>()
const emits = defineEmits<{ (event: 'open', pokemon: Pokemon): void }>()
</script>

<template>
  <v-card>
    <v-virtual-scroll :items="props.pokemon" height="26rem" item-height="6.5rem">
      <template v-slot:default="{ item }">
        <v-list-item @click="$emit('open', item)">
          <template v-slot:prepend>
            <v-img :width="100" :src="item.sprites[0].front_default"></v-img>
          </template>
          <v-list-item-title>{{ item.names[1].name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.names[2].name }}</v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>
