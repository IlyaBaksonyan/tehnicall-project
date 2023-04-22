<script setup lang="ts">
//utils
import resizeImage from '@/utils/resizeImage.vue'
//
//type
import type { Items } from '@/assets/interfaces/noCode-interfaces'

const props = defineProps({
	item_data: {
		type: Object as PropType<Items>,
		default: () => Object
	}
})

const pathImg = './images/No-code/'
let description = ref('')

function replaceText() {
	let text = props.item_data.text || ''
	text = text?.replace(/(\\r)*\n/g, '<br>')
	text = text?.replace(/\b(https?:\/\/\S+)/gm, '<a href="$1" tabindex="-1">$1 </a>')
	text = text?.replace(/<<(.*?)>>/g, '<span title="Скопировать" class="copied">$1</span>')
	return text
}

onMounted(() => {
	description.value = replaceText()
})
</script>

<template>
	<div :id="`carousel-id-${item_data?.id!}`" class="carousel__section">
		<div class="carousel__img">
			<resizeImage :src="pathImg + item_data.img" :alt="item_data.img" />
		</div>
		<div class="carousel__description">
			<p v-html="description" />
		</div>
		<div class="carousel__title">
			<h2 :style="`color:var(--carouselTitle${item_data.id}Color)`">
				{{ item_data.title }}
			</h2>
		</div>
		<div class="carousel__nav">
			<slot name="btns" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	&__section {
		min-width: 100%;
		height: 100%;
		display: grid;
		grid: 2.7fr 1fr / minmax(auto, 3.4fr) 1fr;
		background: var(--article-bc);
		> div {
			border: 1px solid var(--articleItem-bc);
		}
	}

	&__title {
		padding-block: 1ch;
		padding-left: 2ch;
		padding-right: 30%;

		h2 {
			font-weight: 400;
			font-size: max(1.1rem, 3vmax);
		}
	}

	&__nav {
		display: flex;

		:deep(svg) {
			width: max(5rem, 8vmax);
		}

		:deep(> button) {
			cursor: pointer;
			flex-grow: 1;

			&:hover {
				background-color: rgba(255, 255, 255, 0.02);
			}
		}
	}

	&__img {
		:deep(> img) {
			display: block;
			width: 100%;
			height: 100%;
			margin-inline: auto;
			mask-size: cover;
		}
	}
	&__description {
		padding-block: 1ch;
		padding-inline: 1ch;
		overflow: auto;
		overflow-x: hidden;

		p {
			font-size: max(0.8rem, 1.1vmax);
			text-align: justify;
			font-weight: 400;
		}

		:deep(a) {
			color: #375cfc;
		}

		&::-webkit-scrollbar {
			background-color: var(--article-bc);
			color: #aba499;
		}
		&::-webkit-scrollbar-corner {
			background-color: #181a1b;
		}
		&::-webkit-scrollbar-thumb {
			background-image: linear-gradient(190deg, rgb(189, 195, 199), rgb(44, 62, 80));
		}
	}
}

@media (max-width: 768px) {
	.carousel {
		&__section {
			grid: auto min-content minmax(1em, auto) minmax(1em, auto) / none;
		}

		&__title {
			order: 2;
			padding: 0;
			padding-inline: 2ch;
			h2 {
				text-align: center;
				max-width: initial;
			}
		}

		&__description {
			padding-inline: 2ch;
			order: 3;

			p {
				font-size: 1.2rem;
			}
		}
		&__img {
			object-fit: contain;
		}

		&__nav {
			order: 4;
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
			-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
			-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		}
	}
}
</style>
