<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import navigationBlocks from './blocks/blocks.vue'
import navigationBlock from './blocks/block.vue'
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
	<div v-show="props.currentSlideIndex === 1" class="navigation">
		<button
			class="navigation__back"
			title="Вернуться назад"
			tabindex="-1"
			@click="navigationPrev"
		>
			<btnPrev stroke="white" width="max(1.5em, 5vmax)" />
		</button>
		<div class="navigation__content">
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
</template>

<style scoped lang="scss">
.navigation {
	height: var(--C100vh);
	z-index: 500;
	min-width: 100%;
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
		border-bottom-right-radius: 28rem 9rem;

		&:hover {
			background: rgba(255, 255, 255, 0.02);
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
			-webkit-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
			-moz-box-shadow: 6px 13px 19px 4px rgba(34, 60, 80, 0.6);
		}
	}
	.block img {
		width: 100%;
		height: 100%;
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
			background: #0c1326;
			border-radius: 2rem;
			padding-block: 3rem;
			padding-inline: 2rem;
			margin-inline: 1rem;
			box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
			overflow: auto;
			height: 80%;
		}

		&__inner {
			height: 100%;
			overflow: auto;
			padding-block: 2rem;
		}
	}
}

@media (max-width: 1200px) {
	.navigation {
		flex-direction: column;
	}
	.navigation__back {
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
