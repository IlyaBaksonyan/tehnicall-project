<script setup lang="ts">
const props = defineProps({
	width: {
		type: [Number, String]
	}
})
</script>

<template>
	<svg
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		:width="props.width"
		fill="none"
		stroke="#fff"
		viewBox="-256 379.9 100 100"
	>
		<g>
			<path
				d="M-217.4,428.5c-0.8,0.8-0.8,2,0,2.8l46.9,46.9c1,1,2.6,1,3.5,0s1-2.6,0-3.5l-44.7-44.8l44.8-44.8c1-1,1-2.6,0-3.5
		s-2.6-1-3.5,0L-217.4,428.5z"
			/>
			<path
				d="M-194.9,474.7l-44.8-44.8l44.8-44.8c1-1,1-2.6,0-3.5s-2.6-1-3.5,0l-46.9,46.9c-0.8,0.8-0.8,2,0,2.8l46.9,46.9
		c1,1,2.6,1,3.5,0C-193.9,477.2-193.9,475.7-194.9,474.7z"
			/>
		</g>
	</svg>
</template>
