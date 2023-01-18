<script lang="ts">
import noCodeItem from './noCode-item/noCodeItem.vue'
import btnPrev from '@/assets/images/No-code/Icons/btnPrev.vue'
import btnNext from '@/assets/images/No-code/Icons/btnNext.vue'

import { defineComponent } from 'vue'

export default defineComponent({
	name: 'noCode-carousel',
	components: {
		noCodeItem,
		btnPrev,
		btnNext
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
			if (this.currentSlideIndex >= this.carousel_data.length - 1) {
				this.currentSlideIndex = 0
			} else {
				this.currentSlideIndex++
			}
		}
	}
})
</script>

<template>
	<div class="carousel" :style="'left:' + '-' + 100 * currentSlideIndex + '%'">
		<noCodeItem v-for="item in carousel_data" :key="item.id" :item_data="item">
			<template #btns>
				<button @click="prevSlide"><btnPrev /></button>
				<button @click="nextSlide"><btnNext /></button>
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
}
</style>
