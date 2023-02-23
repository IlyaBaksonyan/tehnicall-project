<script setup lang="ts">
import resizeImage from './resizeImage.vue'
const props = defineProps(['src'])
</script>

<template>
	<resizeImage :src="props.src">
		<template #img="slotProps">
			<img v-bind="slotProps" />
		</template>
	</resizeImage>
</template>
