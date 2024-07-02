<script setup lang="ts">
import type { Pokemon } from '@/stores/types'
import { getTypeColor } from '@/stores/utils'
import { shallowRef } from 'vue'
import TypeSvg from './TypeSvg.vue'

const props = defineProps<{ pokemon: Pokemon | undefined }>()
const emits = defineEmits<{ (event: 'close'): void }>()

const shiny = shallowRef<boolean>(false)

const closeEvent = () => {
  emits('close')
  shiny.value = false
}
</script>

<template>
  <v-dialog width="auto" @click:outside="closeEvent">
    <v-card>
      <v-card-item>
        <template v-slot:prepend>
          <div @click="shiny = !shiny">
            <v-img width="100" v-if="shiny" :src="props.pokemon?.sprites[2].front_shiny" />
            <v-img width="100" v-else :src="props.pokemon?.sprites[0].front_default" />
          </div>
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
            <TypeSvg :type="type" width="16" />
          </template>
        </v-chip>
      </v-card-item>
      <template v-slot:actions>
        <v-btn text="Close" @click="closeEvent"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
