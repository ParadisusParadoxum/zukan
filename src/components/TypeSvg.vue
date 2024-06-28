<script setup lang="ts">
import type { PokemonType } from '@/stores/types'
import InlineSvg from 'vue-inline-svg'

const props = defineProps<{ type: PokemonType | undefined }>()

const svgPath = `/types/${props.type?.name}.svg`
const svgTitle = `${props.type?.name} type`
</script>

<template>
  <inline-svg :src="svgPath" :title="svgTitle"></inline-svg>
</template>
