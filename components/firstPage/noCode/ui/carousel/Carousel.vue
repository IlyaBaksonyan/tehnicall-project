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
	<div class="carousel">
		<div class="carousel__sections" :style="`transform: translateX(-${currentSlideIndex * 100}%)`">
			<carouselItem
				v-for="(item, i) in props.carouselData.slice(0, 1)"
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
			<navigation
				id="carousel__navigation"
				:currentSlideIndex="currentSlideIndex"
				:blocksData="props.blocksData"
				@current-slide-index-changed="handleIndexFromNavigation"
			/>
			<div class="carousel__sectionsVertical">
				<div class="carousel__sectionsVertical__inner">
					<a
						class="carousel__sectionsVertical__back"
						href="#carousel__navigation"
						@click="prevSlide"
					>
						<btnPrev stroke="white" width="max(1.5em, 5vmax)" />
					</a>
					<carouselItem
						v-for="(item, i) in props.carouselData.slice(2)"
						:key="i"
						:item_data="item"
						:currentSlideIndex="currentSlideIndex"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	height: var(--C100vh);

	:deep(button:hover) {
		scale: 1;
	}
}
.carousel__sections {
	height: 100%;
	display: flex;
	transition: all cubic-bezier(0.65, 0.04, 0, 0.92) 0.5s;
}
.carousel__sectionsVertical {
	min-width: 100vw;
	height: 100%;
	&__back {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20%;
		min-height: 20%;
		top: 0;
		position: fixed;
		border: 1px black solid;
		z-index: 510;
		border-bottom-right-radius: 23rem 21rem;
		transition: all 1s ease;
		box-shadow: -20px 2px 0px rgba(0, 0, 0, 0);
		* {
			transition: all 0.5s ease;
		}
		&:hover {
			background: #0f162a;
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		}

		&:active {
			background: #19264a;

			* {
				scale: 1.1;
			}
		}
	}
	&__inner {
		overflow: auto;
		height: 100%;
		overflow-x: hidden;
		.carousel__section {
			grid-template-rows: 1fr;

			:deep(*) {
				border: 0;
			}
			:deep(.carousel__img) {
				padding: 8%;

				> img {
					border-radius: 20%;
				}
			}
			:deep(.carousel__title, carousel__nav) {
				display: none;
			}
		}
	}
}
</style>
