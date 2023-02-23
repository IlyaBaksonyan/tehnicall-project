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
			const text = this.item_data.text
			return text?.replace(/(\\r)*\\n/g, '<br>')
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
			<p v-html="withBrTags"></p>
		</div>
		<div class="carousel__item title-section">
			<h2 :style="`color:var(--carouselTitle${item_data.id}Color)`">
				{{ item_data.title }}
			</h2>
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
		height: var(--C100vh);
		display: grid;
		grid: 2.7fr 1fr / minmax(auto, 3.4fr) 1fr;
		transition: all cubic-bezier(0.42, 0.15, 0, 0.79) 0.5s;
		overflow-y: auto;
		overflow-x: hidden;

		&:focus {
			animation: myAnim 1s ease 0s 1 normal forwards;

			@keyframes myAnim {
				0% {
					transform: scale3d(1, 1, 1);
				}

				30% {
					transform: scale3d(1.25, 0.75, 1);
				}

				40% {
					transform: scale3d(0.75, 1.25, 1);
				}

				50% {
					transform: scale3d(1.15, 0.85, 1);
				}

				65% {
					transform: scale3d(0.95, 1.05, 1);
				}

				75% {
					transform: scale3d(1.05, 0.95, 1);
				}

				100% {
					transform: scale3d(1, 1, 1);
				}
			}
		}
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
:deep(.fullScreenWrapper) {
	position: absolute !important;
	top: -4rem !important;
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
