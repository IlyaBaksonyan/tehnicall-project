<script setup lang="ts">
const props = defineProps({
	width: {
		type: [Number, String]
	},
	stroke: {
		type: String,
		default: '#fff'
	}
})
</script>
<template>
	<svg
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 512 512"
		:width="props.width"
		display="inline"
		fill="none"
		:stroke="props.stroke"
		stroke-width="16"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-miterlimit="10"
	>
		<g>
			<polyline points="459,254 61,254 212,405 61,254 212,103  " />
		</g>
		<g>
			<path
				d="M212,413c-2.047,0-4.095-0.781-5.657-2.343l-151-151c-0.004-0.004-0.008-0.009-0.012-0.013    c0-0.001-0.002-0.002-0.003-0.003c-1.416-1.423-2.186-3.246-2.31-5.104c-0.035-0.517-0.02-1.04,0.047-1.559    c0.194-1.513,0.82-2.981,1.878-4.205c0.142-0.164,0.289-0.322,0.443-0.473L206.343,97.343c3.124-3.124,8.189-3.124,11.313,0    c3.125,3.124,3.125,8.189,0,11.313L80.313,246H459c4.418,0,8,3.582,8,8c0,4.418-3.582,8-8,8H80.313l137.343,137.343    c1.562,1.563,2.343,3.609,2.343,5.657s-0.781,4.095-2.343,5.657C216.095,412.219,214.047,413,212,413z"
			/>
		</g>
	</svg>
</template>
