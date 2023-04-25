<script setup lang="ts">
const props = defineProps({
	width: {
		type: String,
		default: '5vw'
	},

	color2: {
		type: String,
		default: 'white'
	}
})
</script>

<template>
	<svg
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 24 24"
		fill="none"
		:stroke="props.color2"
		:width="props.width"
	>
		<path
			d="M7 10L12 15L17 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
