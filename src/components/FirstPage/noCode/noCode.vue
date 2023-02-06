<script lang="ts">
import { defineComponent } from 'vue'

import carousel from './noCode-carousel/noCode-carousel.vue'
import type { Items } from './noCode-interfaces'

export default defineComponent({
	name: 'noCode',
	components: {
		carousel
	},
	data(): {
		items: Array<Items>
	} {
		return {
			items: [
				{
					id: 1,
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!',
					title: 'lorem ipsum lorem ipsum',
					img: 'no-code.png'
				},
				{
					id: 2,
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!',
					title: 'Lorem ipsum',
					img: 'no-code2.png'
				},
				{
					id: 3,
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!',
					title: 'Lorem ipsum dolor sit amet consectetur',
					img: 'no-code3.png'
				}
			]
		}
	}
})
</script>

<template>
	<section class="noCode" id="noCode">
		<div class="noCode__wrapper">
			<carousel :carousel_data="items" />
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
