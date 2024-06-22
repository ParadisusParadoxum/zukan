<script setup lang="ts">
import type { Pokemon } from '@/stores/types'

const props = defineProps<{ pokemon: Pokemon | null }>()
const emits = defineEmits<{ (event: 'close'): void }>()
</script>

<template>
  <v-dialog width="auto">
    <v-card max-width="400" :title="props.pokemon?.names[1].name">
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="$emit('close')"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
