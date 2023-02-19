<script lang="ts">
import { defineComponent } from 'vue'

import carousel from './ui/noCode-carousel/noCode-carousel.vue'
import type { Items } from '@/interfaces/noCode-interfaces'
import type { Blocks } from '@/interfaces/noCode-interfaces'
import json from '@/assets/letters/NoCode.json'

export default defineComponent({
	name: 'NoCode',
	components: {
		carousel
	},

	data(): {
		items: Array<Items>
		blocks: Array<Blocks>
	} {
		return {
			items: json.items,
			blocks: json.blocks
		}
	}
})
</script>

<template>
	<section id="noCode" class="noCode">
		<div class="noCode__wrapper">
			<carousel :carouselData="items" :blocksData="blocks" />
			<p></p>
		</div>
	</section>
</template>

<style scoped lang="scss">
.noCode {
	width: 99.1vw;
	margin-left: -50vw;
	left: 50.7%;

	&__wrapper {
		position: absolute;
		overflow: hidden;
	}

	&__btns {
		z-index: 1;
	}
}
</style>

<style lang="scss">
.noCode {
	--carouselTitle0Color: #be9e35;
}
.carousel__section:nth-child(2) {
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: var(--article-bc);
	}
}
</style>
