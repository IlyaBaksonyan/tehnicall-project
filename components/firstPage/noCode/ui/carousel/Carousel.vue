<script setup lang="ts">
//components
import carouselItem from './CarouselItem.vue'
import navigation from './Navigation.vue'
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
	<div class="carousel" :style="`transform: translateX(-${currentSlideIndex * 100}%)`">
		<carouselItem
			v-for="(item, i) in props.carouselData"
			:key="i"
			:item_data="item"
			:currentSlideIndex="currentSlideIndex"
		>
			<template #btns>
				<button
					v-if="item.prev"
					tabindex="-1"
					class="carousel__nav__btn"
					title="Пролестнуть назад"
					@click="prevSlide()"
				>
					<btnPrev stroke="white" />
				</button>
				<button
					v-if="item.id! === 999 ? false : item.id! > 0"
					tabindex="-1"
					title="вернуться в начало"
					:class="`startSlides`"
					@click="startSlide"
				>
					<startSlides class="startSlides__btn" fill="white" />
				</button>

				<button
					v-if="item.next"
					tabindex="-1"
					class="carousel__nav__btn"
					title="Пролестнуть вперед"
					@click="nextSlide"
				>
					<btnNext stroke="white" />
				</button>
			</template>
		</carouselItem>
	</div>
	<navigation
		:currentSlideIndex="currentSlideIndex"
		:blocksData="props.blocksData"
		@current-slide-index-changed="handleIndexFromNavigation"
	/>
</template>

<style scoped lang="scss">
.carousel {
	height: var(--C100vh);
	display: flex;
	transition: all cubic-bezier(0.65, 0.04, 0, 0.92) 0.5s;
}
</style>
