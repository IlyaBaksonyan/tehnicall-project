<script setup lang="ts">
const props = defineProps({
	color: {
		type: String
	}
})
</script>

<template>
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :stroke="props.color">
		<path
			d="M19 5L4.99998 19M5.00001 5L19 19"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
