<script setup lang="ts">
import navigationBlocks from './NavigationBlocks.vue'
import navigationBlock from './NavigationBlock.vue'
import btnPrev from '@/assets/Icons/prevSlide.vue'
import type { Blocks } from '@/assets/interfaces/noCode-interfaces'
import NextSlide from '~/assets/Icons/nextSlide.vue'
const props = defineProps({
	blocksData: {
		type: Array as PropType<Blocks[]>,
		default: () => []
	},
	currentSlideIndex: {
		type: Number,
		default: () => 0
	}
})

const emits = defineEmits(['current-slide-index-changed'])

let newIndex = ref(0)

function navigationPrev() {
	newIndex.value = 0
	emits('current-slide-index-changed', newIndex.value)
}
function nextSlide() {
	newIndex.value = 2
	emits('current-slide-index-changed', newIndex.value)
}
</script>
<template>
	<transition name="fade">
		<div class="carousel__navigation">
			<button
				class="carousel__navigation__back"
				title="Вернуться назад"
				tabindex="-1"
				@click="navigationPrev"
			>
				<btnPrev stroke="white" width="max(1.5em, 5vmax)" />
			</button>

			<div class="carousel__navigation__content">
				<button class="carousel__navigation__button-moveOn" @click="nextSlide">
					<h2>Перейти</h2>
					<NextSlide stroke="white" />
				</button>
				<div class="blocks__outer">
					<div class="blocks__inner">
						<navigationBlocks>
							<navigationBlock
								v-for="block in props.blocksData"
								:key="block.id"
								:href="`#carousel-id-${block.id}`"
							>
								<template #img
									><img :src="`./images/No-code/${block.img}`" :alt="block.img" />
								</template>
								<template #h2> {{ block.title }} </template>
							</navigationBlock>
						</navigationBlocks>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped lang="scss">
.carousel__navigation {
	height: var(--C100vh);
	min-width: 100%;
	z-index: 500;
	width: 100%;
	background: var(--article-bc);
	display: flex;
	align-items: center;
	flex-direction: column;

	&__back {
		width: 20%;
		min-height: 20%;
		top: 0;
		left: 0;
		position: absolute;
		border-bottom-right-radius: 23rem 21rem;
		transition: all 1s ease;
		box-shadow: -20px 2px 0px rgba(0, 0, 0, 0);

		&:hover {
			background: rgba(255, 255, 255, 0.02);
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		}
	}

	&__button-moveOn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-block: max(0.5vmax, 1rem);
		width: 100%;
		padding-inline: 1rem;
		margin-block: auto;
		border-radius: 50px;
		background: linear-gradient(to right, rgb(60, 65, 68), rgb(36, 52, 66));

		&:hover {
			filter: brightness(0.75);
		}

		svg {
			position: inline;
			width: max(3.5vmax, 2rem);
		}
		h2 {
			color: #fff;
			text-transform: uppercase;
			font-size: max(4vmax, 2rem);
		}
	}

	&__content {
		height: 100%;
		padding-block: max(2%, 15px);
		max-width: max(70ch, 60%);
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
	}

	.blocks {
		&__outer {
			padding-block: max(0.5rem, 0.5vmax);
			padding-inline: max(0.5rem, 0.5vmax);
			background: #0c1326;
			border-radius: 2rem;
			box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
			display: flex;
			align-items: center;
			transition: all 0.5s ease;
			height: 35vh;
			width: max(30vw, 15rem);

			&:hover {
				box-shadow: 0px 0px 10px 14px rgb(0 0 0 / 20%);
				scale: 1.008;
			}
		}

		&__inner {
			display: flex;
			overflow-y: auto;
			overflow-x: hidden;
			margin-block: 2rem;
			margin-inline: 1rem;
			height: 100%;
			width: 100%;
			align-items: flex-start;
		}
	}
}

@media (min-width: 768px) {
	.blocks__inner {
		max-height: max(10rem, calc(38vmax + max(1rem, 1vmax))) !important;
	}
}

@media (max-width: 1200px) {
	.carousel__navigation {
		flex-direction: column;
	}
	.carousel__navigation__back {
		position: relative;
		right: 0;
		left: 0;
		width: 100%;
		height: max(3rem, 10vmin);
		border-radius: 0;

		box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
	}
}
</style>
