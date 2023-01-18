<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	NoCodeitem: 'noCodeItem',

	data() {
		return {
			pathImg: 'src/assets/images/No-code/'
		}
	},
	props: {
		item_data: {
			type: Object,
			default: () => {}
		}
	}
})
</script>

<template>
	<div class="carousel__section">
		<div class="carousel__item img-section">
			<img :src="pathImg + item_data.img" alt="" />
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
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
		min-height: 100%;
		min-width: 100%;
	}

	&__item {
		border: 1px solid var(--articleItem-bc);
		background: var(--article-bc);
	}

	&__section[data-status='after'] {
		transform: translateX(-200%);
	}
}

.img-section {
	width: 100%;
	img {
		display: block;
		width: clamp(45vw, 135vmin, 77vw);
		margin-inline: auto;
	}
}

.title-section {
	padding: 2rem;
	text-transform: uppercase;
	flex-basis: 50%;

	> h2 {
		font-size: 2vw;
		color: #753ceb;
	}
}

.nav-section {
	display: flex;
	justify-content: space-around;
	align-items: center;

	&__btn {
		width: 3rem;
		fill: #beb7b7;
		cursor: pointer;
	}

	img {
		width: 3vw;
		cursor: pointer;
	}
}

.description-section {
	padding: 2rem;

	p {
		font-size: 1.1vw;
	}
}

@media (max-width: 1200px) {
	.carousel__section {
		grid-template-columns: none;
		grid-template-rows: auto repeat(3, 1fr);
	}

	.img-section {
		margin: 0 auto;
	}
	.title-section {
		order: 2;

		h2 {
			font-size: 2rem;
		}
	}

	.description-section {
		order: 3;

		p {
			font-size: 1rem;
		}
	}
	.nav-section {
		order: 4;
	}
}
</style>
