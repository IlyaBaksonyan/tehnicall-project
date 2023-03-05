<script setup lang="ts">
const props = defineProps({
	stroke: {
		type: String
	}
})
</script>
<template>
	<svg
		viewBox="0 0 24 24"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		:stroke="props.stroke"
	>
		<rect
			class="cls-1"
			x="1.5"
			y="1.5"
			width="21"
			height="16.23"
			rx="1.91"
		/>
		<polygon
			class="cls-1"
			points="15.82 22.5 8.18 22.5 9.14 17.73 14.86 17.73 15.82 22.5"
		/>
		<line
			class="cls-1"
			x1="5.32"
			y1="22.5"
			x2="18.68"
			y2="22.5"
		/>
		<circle
			cx="12"
			cy="14.86"
			r="0.95"
		/>
	</svg>
</template>

<style>
.cls-1 {
	fill: none;

	stroke-miterlimit: 10;
	stroke-width: 1.91px;
}
</style>
