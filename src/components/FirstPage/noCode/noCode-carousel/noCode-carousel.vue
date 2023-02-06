<script lang="ts">
import noCodeItem from './noCode-CarouselItem/noCode-CarouselItem.vue'
import type { Items } from '../noCode-interfaces'
import btnPrev from '@/assets/Icons/prevSlide.vue'
import btnNext from '@/assets/Icons/nextSlide.vue'
import startSlides from '@/assets/Icons/startSlides.vue'

import { defineComponent } from 'vue'

export default defineComponent({
	name: 'noCode-carousel',
	components: {
		noCodeItem,
		btnPrev,
		btnNext,
		startSlides
	},
	data() {
		return {
			currentSlideIndex: 0
		}
	},
	props: {
		carousel_data: {
			type: Array<Items>,
			default: () => []
		}
	},

	methods: {
		prevSlide() {
			if (this.currentSlideIndex > 0) {
				this.currentSlideIndex--
			}
		},
		nextSlide() {
			if (this.currentSlideIndex >= this.carousel_data.length - 1) {
				return false
			} else {
				this.currentSlideIndex++
			}
		},
		startSlide() {
			this.currentSlideIndex = 0
		}
	}
})
</script>

<template>
	<div class="carousel">
		<noCodeItem
			v-for="item in carousel_data"
			:key="item.id"
			:item_data="item"
			:currentSlideIndex="currentSlideIndex"
		>
			<template #btns>
				<button class="startSlides">
					<startSlides
						class="startSlides__btn"
						v-if="currentSlideIndex >= 1"
						@click="startSlide"
						width="4vw"
						fill="white"
					/>
				</button>

				<button class="nav-section__btn" @click="prevSlide">
					<btnPrev width="5vw" fill="white" />
				</button>

				<button class="nav-section__btn" @click="nextSlide">
					<btnNext width="5vw" fill="white" />
				</button>
			</template>
		</noCodeItem>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	max-height: calc(100vh - var(--header-size));
	display: flex;
	position: relative;
	transition: all ease 0.5s;

	&__wrapperBtns {
		position: absolute;
		display: grid;
		grid-template-rows: 2.1fr 1fr;
		grid-template-columns: auto 1fr; // 3.4fr
		min-height: 100%;
		min-width: 100%;
	}
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
	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	width: 0;

	&__btn {
		&:hover {
			fill: yellow;
		}
	}
}

@media (max-width: 1200px) {
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

@media (max-width: 320) {
	.startSlides {
		left: -2.5%;
	}
}
</style>
