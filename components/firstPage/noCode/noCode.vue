<script lang="ts">
export default {
	name: 'NoCode'
}
</script>
<script setup lang="ts">
//library
import { gsap } from 'gsap'
//
//components
import carousel from './ui/carousel/Carousel.vue'
//components
//types
import type { Items } from '@/assets/interfaces/noCode-interfaces'
import type { Blocks } from '@/assets/interfaces/noCode-interfaces'
//types
//json
import json from '~~/assets/letters/carousel.json'
//json

const blocks = ref<Array<Blocks>>(json.blocks)
const items = ref<Array<Items>>(json.items)

function hideIntro() {
	gsap.to('#noCode__introScreen', {
		autoAlpha: 0,
		duration: 0.5,
		pointerEvents: 'none'
	})
}
</script>

<template>
	<section id="noCode" class="noCode">
		<div id="noCode__introScreen" class="noCode__introScreen">
			<div class="noCode__introScreen__header">
				<h2>NoCode метод</h2>
			</div>
			<button tabindex="0" @click="hideIntro">Перейти</button>
		</div>
		<carousel :carouselData="items" :blocksData="blocks" />
	</section>
</template>

<style scoped lang="scss">
.noCode {
	width: 100%;

	--carouselTitle0Color: #be9e35;

	&__introScreen {
		display: flex;
		align-items: center;
		flex-direction: column;

		z-index: 999;

		height: 100%;
		width: 100%;
		padding-inline: 15px;
		text-align: center;

		position: absolute;
		top: 0;

		backdrop-filter: blur(30px) brightness(0.4);
		&__header {
			height: 60vh;
			display: flex;
			align-items: center;
		}
		h2 {
			font-size: max(2rem, 7vmax);
		}
		button {
			background: var(--main-color);
			padding-inline: max(4rem, 3.5vmax);
			padding-block: 1rem;
			border-radius: 1rem;
			color: #fff;
		}
	}
}

:deep(.fullScreenWrapper) {
	height: var(--C100vh);
	position: absolute;
}
</style>
