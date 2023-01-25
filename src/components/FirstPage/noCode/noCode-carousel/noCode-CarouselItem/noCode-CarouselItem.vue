<script lang="ts">
import { defineComponent } from 'vue'
import resizeImage from '@/utils/resizeImage.vue'

export default defineComponent({
	name: 'noCodeItem',

	data() {
		return {
			pathImg: './images/No-code/'
		}
	},
	components: {
		resizeImage
	},
	props: {
		item_data: {
			type: Object,
			default: () => {}
		},
		currentSlideIndex: {
			type: Number,
			default: () => Number
		}
	}
})
</script>

<template>
	<div
		class="carousel__section"
		w
		:style="'left:' + '-' + 100 * currentSlideIndex + '%'"
	>
		<div class="carousel__item img-section">
			<resizeImage
				class="carousel__img"
				:src="pathImg + item_data.img"
				alt=""
			/>
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
		max-height: 100vh;
		min-height: 100%;
		min-width: 100%;
		display: grid;
		grid-template-rows: 2.7fr 1fr;
		grid-template-columns: auto 1fr;
		transition: all ease 0.5s;
	}

	&__item {
		border: 1px solid var(--articleItem-bc);
		background: var(--article-bc);
	}
}

.img-section {
	width: 100%;

	.Img {
		display: block;
		width: clamp(45vw, 135vmin, 77vw);
		margin-inline: auto;
	}
}

.title-section {
	padding: 1vw;
	text-transform: uppercase;

	h2 {
		font-size: clamp(3vw, 2vw, 4vw);
		color: #753ceb;
	}
}

.nav-section {
	display: flex;

	&__btn {
		width: 3rem;
		fill: #beb7b7;
		cursor: pointer;
	}

	&:first-child {
		border-right: 1px solid var(--articleItem-bc);
	}
}

.description-section {
	padding: 1vw;
	word-break: break-all;
	overflow: auto;

	p {
		font-size: 1.1vw;
	}
}

@media (max-width: 1200px) {
	.carousel {
		&__section {
			grid-template-columns: none;
			grid-template-rows: auto auto 1fr 1fr;
		}
	}

	.title-section {
		padding: 1ch;
		order: 2;

		h2 {
			font-size: 4vw;
			text-align: center;
		}
	}

	.description-section {
		padding-inline: 2ch;
		order: 3;

		p {
			font-size: 2vw;
		}
	}

	.nav-section {
		order: 4;
	}
}

@media (max-width: 800px) {
	.description-section {
		p {
			font-size: 1rem;
		}
	}

	.title-section {
		h2 {
			font-size: 1.75em;
			line-height: 1.5rem;
		}
	}
}
</style>
