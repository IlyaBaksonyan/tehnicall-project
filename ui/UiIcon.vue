<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps(['icon', 'stroke', 'fill'])
const path = props.icon ? props.icon : ''

const svg = defineAsyncComponent(() => import(`~/assets/Icons/${path}.vue`))
</script>

<template>
	<component :is="svg" :stroke="stroke" :fill="fill" />
</template>
