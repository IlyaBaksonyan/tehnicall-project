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
		fill="none"
		:stroke="props.stroke"
		stroke-width="16"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-miterlimit="10"
	>
		<g>
			<polyline points="61,254 459,254 308,405 459,254 308,103  " />
		</g>
		<g>
			<path
				d="M308,413c2.047,0,4.095-0.781,5.656-2.343l151-151c0.004-0.004,0.009-0.009,0.013-0.013c0-0.001,0.002-0.002,0.003-0.003    c1.415-1.423,2.186-3.246,2.31-5.104c0.035-0.517,0.021-1.04-0.047-1.559c-0.193-1.513-0.819-2.981-1.878-4.205    c-0.142-0.164-0.289-0.322-0.442-0.473L313.656,97.343c-3.124-3.124-8.189-3.124-11.313,0s-3.124,8.189,0,11.313L439.687,246H61    c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8h378.687L302.343,399.343C300.781,400.905,300,402.952,300,405s0.781,4.095,2.343,5.657    C303.905,412.219,305.952,413,308,413z"
			/>
		</g>
	</svg>
</template>
