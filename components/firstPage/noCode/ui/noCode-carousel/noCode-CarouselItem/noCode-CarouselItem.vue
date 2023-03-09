<script lang="ts">
import { PropType, defineComponent } from 'vue'
import resizeImage from '@/utils/resizeImage.vue'
import type { Items } from '@/assets/interfaces/noCode-interfaces'

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
	},
	computed: {
		withBrTags: function () {
			let text = this.item_data.text
			text = text?.replace(/(\\r)*\\n/g, '<br>')
			text = text?.replace(
				/\b(https?:\/\/\S+)/gm,
				'<a href="$1" tabindex="-1">$1 </a>'
			)
			text = text?.replace(/<<(.*?)>>/g, '<p class="copied"  >$1</p>')
			return text
		}
	}
})
</script>

<template>
	<div class="carousel__section" :tabindex="item_data?.id === 999 ? -1 : 0">
		<div class="carousel__item img-section">
			<resizeImage :src="pathImg + item_data.img" :alt="item_data.img">
				<template #img="slotProps">
					<img class="carousel__img" v-bind="slotProps" />
				</template>
			</resizeImage>
		</div>

		<div class="carousel__item description-section">
			<p :tabindex="item_data?.id === 999 ? -1 : 0" v-html="withBrTags" />
		</div>
		<div class="carousel__item title-section">
			<h2 :style="`color:var(--carouselTitle${item_data.id}Color)`">
				{{ item_data.title }}
			</h2>
		</div>
		<div class="carousel__item nav-section">
			<slot name="btns" />
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
			font-size: max(1.1rem, 3vw);
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
		overflow-x: hidden;

		&::-webkit-scrollbar {
			background-color: var(--article-bc);
			color: #aba499;
		}
		&::-webkit-scrollbar-corner {
			background-color: #181a1b;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #c6c2c2;
		}

		p {
			font-size: max(1.2rem, 1.1vmax);
			font-weight: 400;
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

:deep(.description-section) a {
	color: #375cfc;
}

@media (max-width: 1200px) {
	.carousel {
		&__section {
			grid: auto min-content minmax(1em, auto) minmax(1em, auto) / none;
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
		.carousel__img {
			object-fit: contain;
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
