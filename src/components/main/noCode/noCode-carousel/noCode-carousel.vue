<script lang="ts">
import noCodeItem from './noCode-CarouselItem/noCode-CarouselItem.vue'
import btnPrev from '@/assets/images/No-code/Icons/prevSlide.vue'
import btnNext from '@/assets/images/No-code/Icons/nextSlide.vue'
import startSlides from '@/assets/images/No-code/Icons/startSlides.vue'

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
			type: Array,
			default: () => []
		},
		item: {
			type: Object,
			default: () => {}
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
				<div class="prev">
					<button
						class="startSlides__btn"
						v-if="currentSlideIndex >= 1"
						@click="startSlide"
					>
						<startSlides class="startSlides" width="4vw" fill="white" />
					</button>
					<button @click="prevSlide">
						<btnPrev width="5vw" fill="white" />
					</button>
				</div>
				<div class="next">
					<button @click="nextSlide">
						<btnNext width="5vw" fill="white" />
					</button>
				</div>
			</template>
		</noCodeItem>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	min-height: calc(100vh - 4rem);
	display: flex;
	position: relative;
	transition: all ease 0.5s;

	&__wrapperBtns {
		position: absolute;
		display: grid;
		grid-template-rows: 2.7fr 1fr;
		grid-template-columns: 3.4fr 1fr;
		min-height: 100%;
		min-width: 100%;
	}

	.prev,
	.next {
		:hover {
			stroke: gray;
		}
	}
}

.startSlides {
	position: absolute;
	bottom: 1vh;
	left: -3vw;

	&:hover {
		fill: yellow;
		stroke: yellow;
	}
}
</style>
