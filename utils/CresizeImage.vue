<script setup lang="ts">
import resizeImage from './resizeImage.vue'
const props = defineProps(['src', 'alt'])
</script>

<template>
	<resizeImage :alt="props.alt" :src="props.src">
		<template #img="slotProps">
			<img v-bind="slotProps" />
		</template>
	</resizeImage>
</template>
