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
		:stroke="props.stroke"
		:width="props.width"
		role="img"
		viewBox="0 0 1024 1024"
	>
		<path
			d="M366.7 403.2c-.3 139-.3 139.3-2.4 147.3-6.7 24.9-20.7 44.6-41.4 58.5-34.7 23.2-79.8 20.6-112.9-6.5-17.9-14.6-30.7-37.6-33.9-60.8-.8-5.3-1.1-51-1.1-142.3V265H78v140.4c0 118.8.2 142.2 1.5 151.8 12.3 93.6 87.9 165.1 181.6 171.7 47.5 3.4 93.1-10.2 131.9-39.5 34.7-26.1 61.2-66 72-108.2 4.7-18.7 5.3-24.5 5.9-60.2l.6-34.5 7.8 14.7c16.7 31.7 32.7 58.6 51.4 86.7C537.5 598 543 607 543 608c0 .9-13.9 66.6-31 146-17 79.3-31 144.9-31 145.7 0 1.1 8.4 1.3 51.2 1.1l51.3-.3L605 793.8C616.8 735 626.8 687 627.2 687c.3 0 4.2 2.1 8.5 4.7 36.8 21.9 83.1 34.3 128.4 34.3 92.6.1 172.4-62.4 195.4-152.9 8.4-33.1 8.6-69.9.5-101.6-18.2-71.8-74.6-127.9-146.9-146-30.2-7.6-67.1-7.4-97.6.5-66.1 17-116.6 68-142.6 143.8l-4.1 12.2-6.8-10.7c-37.3-60-70.6-131.7-90.5-195.6l-3.7-11.7H367.1l-.4 139.2zm426.7 22.7c52.5 14.1 85.4 68.6 72.1 119.5-3.7 14.1-10.5 27.4-20.3 39.8-7.4 9.3-14.5 15.6-25.4 22.8-20.3 13.4-41.6 18.6-66.4 16.1-32-3.1-62.8-15.6-92.2-37.3-6.8-5-9.2-7.3-8.8-8.6 3.5-12.2 10.8-41.2 12.5-50.2 1.3-6.3 4.3-17.5 6.7-24.8 15-45 40.3-71.1 76.4-78.8 9.9-2 35.3-1.3 45.4 1.5z"
		/>
	</svg>
</template>
