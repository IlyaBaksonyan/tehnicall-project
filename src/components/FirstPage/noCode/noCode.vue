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
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, consequuntur tenetur magnam impedit a. Eaque aspernatur numquam nemo quod!',
					title: 'gfdgdf',
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
	min-height: 100vh;
	width: 99.5vw;
	margin-left: -50vw;
	left: 50%;
	position: relative;
	scroll-behavior: smooth;

	&__wrapper {
		position: absolute;

		overflow: hidden;
	}

	&__btns {
		z-index: 1;
	}
}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Landscape phones and portrait tablets */
@media (min-width: 767px) {
}

/* Portrait phones and smaller */
@media (min-width: 360px) {
}
</style>
