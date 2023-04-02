<script setup lang="ts">
import navigationBlocks from './NavigationBlocks.vue'
import navigationBlock from './NavigationBlock.vue'
import btnPrev from '@/assets/Icons/prevSlide.vue'
import type { Blocks } from '@/assets/interfaces/noCode-interfaces'
let newIndex = ref(0)
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

function navigationPrev() {
	newIndex.value = 0
	emits('current-slide-index-changed', newIndex.value)
}

function updateIndex(a: number) {
	newIndex.value = props.currentSlideIndex + a
	emits('current-slide-index-changed', newIndex.value)
}
</script>
<template>
	<transition name="fade">
		<div v-show="props.currentSlideIndex === 1" class="carousel__navigation">
			<button
				class="carousel__navigation__back"
				title="Вернуться назад"
				tabindex="-1"
				@click="navigationPrev"
			>
				<btnPrev stroke="white" width="max(1.5em, 5vmax)" />
			</button>
			<div class="carousel__navigation__content">
				<div class="blocks__outer">
					<div class="blocks__inner">
						<navigationBlocks>
							<navigationBlock
								v-for="block in props.blocksData"
								:key="block.id"
								@click="updateIndex(block.id!)"
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
	z-index: 500;
	width: 100%;
	background: var(--article-bc);
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	flex-direction: column;

	&__back {
		width: 20%;
		min-height: 20%;
		top: 0;
		left: 0;
		position: absolute;
		z-index: 510;
		border-bottom-right-radius: 23rem 21rem;
		transition: all 1s ease;
		box-shadow: -20px 2px 0px rgba(0, 0, 0, 0);
		//background: rgba(255, 255, 255, 0.02);

		&:hover {
			background: rgba(255, 255, 255, 0.02);
			animation: shadow-animation 1s forwards;
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		}
	}

	&__content {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.blocks {
		&__outer {
			padding-block: max(0.5rem, 0.5vmax);
			padding-inline: max(0.5rem, 0.5vmax);
			background: #0c1326;
			border-radius: 2rem;
			box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
			max-height: 100%;
			display: flex;
			align-items: center;
			height: 85%;
			transition: all 0.5s ease;

			&:hover {
				box-shadow: 0px 0px 10px 14px rgb(0 0 0 / 20%);
				scale: 1.008;
			}
		}

		&__inner {
			overflow-y: auto;
			overflow-x: hidden;
			margin-block: 2rem;
			margin-inline: 2rem;
			padding: 1rem;
			max-height: 45vmax;
		}
	}
}
.fade {
	&-enter-active,
	&-leave-active {
		transition: all 333ms cubic-bezier(0.4, 0, 0.22, 1) 0s;
	}

	&-enter-from,
	&-leave-to {
		scale: 0;
		opacity: 0;
	}
}

@media (min-width: 768px) {
	.blocks__inner {
		max-height: max(10rem, calc(53vmax + max(1rem, 1vmax))) !important;
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
