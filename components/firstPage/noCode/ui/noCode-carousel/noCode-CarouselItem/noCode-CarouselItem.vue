<script lang="ts">
import { PropType, defineComponent } from 'vue'
import resizeImage from '@/utils/resizeImage.vue'
import type { Items } from '../../../noCode-interfaces'

export default defineComponent({
	name: 'NoCodeItem',
	components: {
		resizeImage
	},
	props: {
		item_data: {
			type: Object as PropType<Items>,
			default: () => Object
		},
		currentSlideIndex: {
			type: Number,
			default: () => 0
		}
	},
	data() {
		return {
			pathImg: './images/No-code/'
		}
	}
})
</script>

<template>
	<div class="carousel__section">
		<div class="carousel__item img-section">
			<resizeImage :src="pathImg + item_data.img" :alt="item_data.img">
				<template #img="slotProps">
					<img class="carousel__img" v-bind="slotProps" />
				</template>
			</resizeImage>
		</div>

		<div class="carousel__item description-section">
			<p>{{ item_data.text }}</p>
		</div>
		<div class="carousel__item title-section">
			<h2>{{ item_data.title }}</h2>
		</div>
		<div class="carousel__item nav-section">
			<slot name="btns"></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	&__section {
		min-width: 100%;
		display: grid;
		grid: 2.7fr 1fr / minmax(auto, 3.4fr) 1fr;
		transition: all cubic-bezier(0.42, 0.15, 0, 0.79) 0.5s;
		overflow-y: auto;
	}

	&__item {
		border: 1px solid var(--articleItem-bc);
		background: var(--article-bc);
	}

	.title-section {
		padding: 1vw;
		padding-right: 30%;

		h2 {
			font-weight: 400;
			font-size: max(1.75rem, 3vw);
			line-height: 2rem;
		}
	}

	.nav-section {
		display: flex;

		&__btn {
			cursor: pointer;
		}

		&:first-child {
			border-right: 1px solid var(--articleItem-bc);
		}
	}

	.description-section {
		padding: 1vw;
		word-break: normal;
		overflow: auto;

		p {
			font-size: max(1.2rem, 1.1vmax);
			font-weight: 500;
		}
	}

	.carousel__img {
		display: block;
		width: 100%;
		height: 100%;
		margin-inline: auto;
		mask-size: cover;
	}
}

@media (max-width: 1200px) {
	.carousel {
		&__section {
			grid: minmax(0.1em, auto) 3.2em auto minmax(1em, auto) / none;
		}

		.title-section {
			padding: 1ch;
			order: 2;

			h2 {
				text-align: center;
				max-width: initial;
			}
		}

		.description-section {
			padding-inline: 2ch;
			order: 3;

			p {
				font-size: 1.2rem;
			}
		}

		.nav-section {
			order: 4;
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
			-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
			-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		}
	}
}
</style>

<style lang="scss">
.carousel {
	&__section:nth-child(1) h2 {
		color: var(--carouselTitle-first-color) !important;
	}
	&__section:nth-child(3) h2 {
		color: var(--carouselTitle-second-color) !important;
	}
	&__section:nth-child(4) h2 {
		color: var(--carouselTitle-third-color) !important;
	}
}
</style>
