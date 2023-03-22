<script setup lang="ts">
//components
import noCodeItem from './noCode-CarouselItem/noCode-CarouselItem.vue'
import carouselNavigation from '../navigation/navigation.vue'
//components
//svg
import btnPrev from '@/assets/Icons/prevSlide.vue'
import btnNext from '@/assets/Icons/nextSlide.vue'
import startSlides from '@/assets/Icons/startSlides.vue'
//svg
//types
import type { Items, Blocks } from '@/assets/interfaces/noCode-interfaces'
//types

const props = defineProps({
	carouselData: {
		type: Array as PropType<Items[]>,
		default: () => []
	},
	blocksData: {
		type: Array as PropType<Blocks[]>,
		default: () => []
	}
})

let currentSlideIndex = ref<number>(0)

function handleIndexFromNavigation(newIndex: number) {
	currentSlideIndex.value = newIndex
}

function prevSlide() {
	if (currentSlideIndex.value > 0) {
		currentSlideIndex.value--
	}
}

function nextSlide() {
	if (currentSlideIndex.value >= props.carouselData.length - 1) {
		return false
	} else {
		currentSlideIndex.value++
	}
}

function startSlide() {
	currentSlideIndex.value = 1
}
</script>

<template>
	<div
		class="carousel"
		:style="`transform: translate(-${100 * currentSlideIndex}%)`"
	>
		<noCodeItem
			v-for="(item, i) in props.carouselData"
			:key="i"
			:item_data="item"
			:currentSlideIndex="currentSlideIndex"
		>
			<template #btns>
				<button
					v-if="item.prev"
					tabindex="-1"
					class="nav-section__btn"
					title="Пролестнуть назад"
					@click="prevSlide()"
				>
					<btnPrev stroke="white" />
				</button>
				<button
					v-if="item.id! === 999 ? false : item.id! > 0"
					tabindex="-1"
					title="вернуться в начало"
					:class="`startSlides${currentSlideIndex} startSlides`"
					@click="startSlide"
				>
					<startSlides class="startSlides__btn" fill="white" />
				</button>

				<button
					v-show="item.next"
					tabindex="-1"
					class="nav-section__btn"
					title="Пролестнуть вперед"
					@click="nextSlide"
				>
					<btnNext stroke="white" />
				</button>
			</template>
		</noCodeItem>
	</div>
	<carouselNavigation
		:currentSlideIndex="currentSlideIndex"
		:blocksData="props.blocksData"
		@current-slide-index-changed="handleIndexFromNavigation"
	/>
</template>

<style scoped lang="scss">
.carousel {
	height: var(--C100vh);
	display: flex;
	position: relative;
	transition: all cubic-bezier(0.65, 0.04, 0, 0.92) 0.5s;
	background: var(--article-bc);

	.nav-section {
		&__btn {
			flex-grow: 1;

			&:hover {
				background-color: rgba(255, 255, 255, 0.02);
			}
		}
		.startSlides {
			z-index: 1;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			flex-grow: 1;

			&:hover {
				background-color: rgba(255, 255, 255, 0.02);
				svg {
					fill: yellow;
				}
			}
		}
		.startSlides3 {
			display: none;
			width: 50%;
			svg {
				width: max(4rem, 8vw);
			}
		}
	}
}

@media (max-width: 1200px) {
	body .carousel .startSlides-whole {
		top: 0;
		left: 0;
	}
}
</style>
