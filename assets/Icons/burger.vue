<script setup lang="ts">
const props = defineProps({
	fill: {
		type: String,
		default: 'white'
	}
})
</script>
<template>
	<svg
		ref="burger"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		aria-hidden="true"
		role="img"
		viewBox="0 0 448 512"
		:fill="props.fill"
	>
		<path
			id="firstLine"
			class="line-1"
			d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
		/>
		<path
			id="secondLine"
			class="line-2"
			d="M436 284H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
		/>
		<path
			id="thirdLine"
			class="line-3"
			d="M436 444H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
		/>
	</svg>
</template>
