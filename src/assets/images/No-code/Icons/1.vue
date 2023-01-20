<script lang="ts">
export default {
	props: {
		width: {
			type: [Number, String]
		},
		fill: {
			type: String
		}
	}
}
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 490 490"
		:width="width"
		:fill="fill"
		xml:space="preserve"
	>
		<g>
			<polygon
				points="240.112,0 481.861,245.004 240.112,490 8.139,490 250.29,245.004 8.139,0"
			/>
		</g>
	</svg>
</template>
