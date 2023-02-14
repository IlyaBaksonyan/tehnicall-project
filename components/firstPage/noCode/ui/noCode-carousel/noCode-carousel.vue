<script lang="ts">
import noCodeItem from './noCode-CarouselItem/noCode-CarouselItem.vue'
import SelectBlocks from '../blocks/SelectBlocks.vue'
import SelectBlock from '../blocks/SelectBlock.vue'
import type { Items } from '../../noCode-interfaces'
import btnPrev from '@/assets/Icons/prevSlide.vue'
import btnNext from '@/assets/Icons/nextSlide.vue'
import startSlides from '@/assets/Icons/startSlides.vue'

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
					title="вернуться в начало"
					v-show="currentSlideIndex >= 2"
					@click="startSlide"
					:class="`startSlides${currentSlideIndex} startSlides`"
				>
					<startSlides
						class="startSlides__btn"
						width="max(12rem ,8vw)"
						fill="white"
					/>
				</button>

				<button
					v-show="currentSlideIndex === 0"
					class="nav-section__btn"
					@click="nextSlide"
				>
					<btnNext width="10vw" fill="white" />
				</button>
				<button
					v-show="currentSlideIndex === 3"
					class="nav-section__btn"
					@click="nextSlide"
				>
					<btnNext width="10vw" fill="white" />
				</button>
			</template>
		</noCodeItem>
		<button
			title="Возвратить в начало"
			@click="startSlide"
			:class="`startSlides-whole`"
			:style="`transform: translate(${100 * currentSlideIndex}vw)`"
			v-show="currentSlideIndex > 1"
		>
			<startSlides width="max(6rem, 8vw)" fill="black" />
		</button>
	</div>
	<div v-show="currentSlideIndex == 1" class="select">
		<div class="select__wrapper">
			<button class="select__back" @click="prevSlide">
				<btnPrev stroke="white" width="5vw" />
			</button>
			<SelectBlocks>
				<SelectBlock @click="currentSlideIndex = currentSlideIndex + 1">
					<template #img
						><img src="/images/No-code/gdf.jpg" alt="gfdgf" />
					</template>
					<template #h2>
						NoCode <br />
						(Без кода)
					</template>
				</SelectBlock>
				<SelectBlock @click="currentSlideIndex = currentSlideIndex + 2">
					<template #img
						><img src="/images/No-code/chat1.jpeg" alt="gfdgf" />
					</template>
					<template #h2> ЧатБоты </template>
				</SelectBlock>
			</SelectBlocks>
		</div>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	max-height: calc(100vh - var(--header-size));
	min-height: calc(100vh - var(--header-size));
	display: flex;
	position: relative;
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
		width: 100%;

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
		z-index: 100000;
		left: 0;
		bottom: 0;

		&:hover {
			background-color: rgba(0, 0, 0, 0.62);
			svg {
				stroke: #fff;
			}
		}
	}
}

.select {
	min-height: 100%;
	z-index: 500;
	min-width: 100%;
	transform: translate(0);
	background: var(--article-bc);
	position: absolute;
	top: 0;

	.block img {
		width: 100%;
		height: 100%;
	}

	&__wrapper {
		min-height: 100%;
		min-width: 100%;
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
		width: auto;
		height: 10%;
		box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
	}

	.startSlides-whole {
		top: 0;
		left: initial !important;
		right: 5% !important;
		bottom: initial !important;
	}
	.startSlides {
		left: 16%;
	}

	.startSlides,
	.nav-section__btn {
		svg {
			width: 5rem;
		}
	}
}

@media (max-width: 950px) {
	.startSlides {
		left: 14%;
	}
}

@media (max-width: 800px) {
	.startSlides {
		left: 10%;
	}
}
@media (max-width: 600px) {
	.startSlides {
		left: 0;
	}
}

@media (max-width: 320px) {
	.startSlides {
		left: -2.5%;
	}
}
</style>
