<script setup lang="ts">
import type { Pokemon } from '@/stores/types'
import { getTypeColor } from '@/stores/utils'
import TypeSvg from './TypeSvg.vue'

const props = defineProps<{ pokemon: Pokemon | undefined }>()
const emits = defineEmits<{ (event: 'close'): void }>()
</script>

<template>
  <v-dialog width="auto">
    <v-card>
      <v-card-item>
        <template v-slot:prepend>
          <v-img :width="100" :src="props.pokemon?.sprites[0].front_default"></v-img>
        </template>
        <template v-slot:title>
          {{ props.pokemon?.names[1].name }}
        </template>
        <template v-slot:subtitle>
          {{ props.pokemon?.names[2].name }}
        </template>
        <v-chip
          v-for="type in props.pokemon?.types"
          density="comfortable"
          variant="flat"
          class="ma-1"
          :color="getTypeColor(type.name)"
        >
          <template v-slot:prepend>
            <TypeSvg :type="type" width="1rem" />
          </template>
        </v-chip>
      </v-card-item>
      <template v-slot:actions>
        <v-btn text="Close" @click="$emit('close')"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
