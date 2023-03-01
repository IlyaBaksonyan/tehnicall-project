<script lang="ts">
import noCodeItem from './noCode-CarouselItem/noCode-CarouselItem.vue'
import SelectBlocks from '../blocks/SelectBlocks.vue'
import SelectBlock from '../blocks/SelectBlock.vue'
import btnPrev from '@/assets/Icons/prevSlide.vue'
import btnNext from '@/assets/Icons/nextSlide.vue'
import startSlides from '@/assets/Icons/startSlides.vue'

import type { Items } from '@/assets/interfaces/noCode-interfaces'
import type { Blocks } from '@/assets/interfaces/noCode-interfaces'

import { PropType, defineComponent } from 'vue'

export default defineComponent({
	name: 'NoCodeCarousel',
	components: {
		noCodeItem,
		btnPrev,
		btnNext,
		startSlides,
		SelectBlock,
		SelectBlocks
	},
	props: {
		carouselData: {
			type: Array as PropType<Items[]>,
			default: () => []
		},
		blocksData: {
			type: Array as PropType<Blocks[]>,
			default: () => []
		},
		buttonsData: {
			type: Array as PropType<number[]>,
			default: () => []
		}
	},
	data() {
		return {
			currentSlideIndex: 0
		}
	},

	methods: {
		prevSlide() {
			if (this.currentSlideIndex > 0) {
				this.currentSlideIndex--
			}
		},
		nextSlide() {
			if (this.currentSlideIndex >= this.carouselData.length - 1) {
				return false
			} else {
				this.currentSlideIndex++
			}
		},
		startSlide() {
			this.currentSlideIndex = 1
		}
	}
})
</script>

<template>
	<div
		class="carousel"
		:style="`transform: translate(-${100 * currentSlideIndex}%)`"
	>
		<noCodeItem
			v-for="item in carouselData"
			:key="item.id"
			:item_data="item"
			:currentSlideIndex="currentSlideIndex"
		>
			<template #btns>
				<button
					v-show="item.prev"
					tabindex="-1"
					class="nav-section__btn"
					title="Пролестнуть назад"
					@click="prevSlide"
				>
					<btnPrev
						stroke="white"
						width="10vw"
					/>
				</button>
				<button
					v-show="item.id! >= 1"
					tabindex="-1"
					title="вернуться в начало"
					:class="`startSlides${currentSlideIndex} startSlides`"
					@click="startSlide"
				>
					<startSlides
						class="startSlides__btn"
						width="max(12rem ,8vw)"
						fill="white"
					/>
				</button>

				<button
					v-show="item.next"
					tabindex="-1"
					class="nav-section__btn"
					title="Пролестнуть вперед"
					@click="nextSlide"
				>
					<btnNext
						width="10vw"
						stroke="white"
					/>
				</button>
			</template>
		</noCodeItem>

		<button
			v-show="currentSlideIndex > 1"
			tabindex="-1"
			:class="`startSlides-whole`"
			title="Возвратить в начало"
			:style="`transform: translate(${100 * currentSlideIndex}vw)`"
			@click="startSlide"
		>
			<startSlides
				width="max(6rem, 5vw)"
				fill="black"
			/>
		</button>
	</div>
	<div
		v-show="currentSlideIndex === 1"
		class="select"
	>
		<button
			class="select__back"
			title="Вернуться назад"
			tabindex="-1"
			@click="prevSlide"
		>
			<btnPrev
				stroke="white"
				width="max(1.5em, 5vmax)"
			/>
		</button>
		<div class="select__wrapper">
			<SelectBlocks>
				<SelectBlock
					v-for="block in blocksData"
					:key="block.id"
					@click="currentSlideIndex = currentSlideIndex + block.id!"
				>
					<template #img
						><img
							:src="`./images/No-code/${block.img}`"
							alt="gfdgf"
						/>
					</template>
					<template #h2> {{ block.title }} </template>
				</SelectBlock>
			</SelectBlocks>
		</div>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	height: var(--C100vh);
	display: flex;
	position: relative;
	will-change: transform;
	transition: all cubic-bezier(0.65, 0.04, 0, 0.92) 0.5s;

	&__wrapperBtns {
		position: absolute;
		display: grid;
		grid-template-rows: 2.1fr 1fr;
		grid-template-columns: auto 1fr;
		min-height: 100%;
		min-width: 100%;
	}

	.nav-section {
		&__btn {
			flex-grow: 1;

			&:hover {
				background-color: rgba(255, 255, 255, 0.02);
			}
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

	.startSlides-whole {
		position: absolute;
		z-index: 500;

		&:hover {
			background-color: rgba(0, 0, 0, 0.62);
			svg {
				stroke: #fff;
			}
		}
	}
}

.select {
	min-height: var(--C100vh);
	z-index: 500;
	min-width: 100%;
	transform: translate(0);
	background: var(--article-bc);
	position: absolute;
	top: 0;

	&__wrapper {
		min-height: var(--C100vh);
		max-height: var(--C100vh);
		height: 100vh;
		max-width: 65%;
		margin-inline: auto;
		padding-bottom: 10%;
		margin-top: max(3rem, 10vmin);
		overflow: auto;
	}

	.block img {
		width: 100%;
		height: 100%;
	}

	&__back {
		position: absolute;
		width: 20%;
		height: 20%;
		top: 0;
		left: 0;
		z-index: 510;

		&:hover {
			background: rgba(255, 255, 255, 0.02);
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
			-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
			-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		}
	}
}

@media (max-width: 1200px) {
	.select__back {
		right: 0;
		left: 0;
		width: 100%;
		height: max(3rem, 10vmin);

		box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
	}

	.startSlides-whole {
		top: 0;
		left: initial !important;
		bottom: initial !important;
	}

	.startSlides,
	.nav-section__btn {
		svg {
			width: 5rem;
		}
	}
}
</style>
