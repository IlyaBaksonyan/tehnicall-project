<script lang="ts">
export default {
	name: 'NoCode'
}
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import carousel from './ui/noCode-carousel/noCode-carousel.vue'
import type { Items } from '@/assets/interfaces/noCode-interfaces'
import type { Blocks } from '@/assets/interfaces/noCode-interfaces'
import json from '@/assets/letters/NoCode.json'

const blocks = ref<Array<Blocks>>(json.blocks)
const items = ref<Array<Items>>(json.items)

function copyToClipboard(element: Element | EventTarget) {
	const text: any = (element as Element).innerHTML
	navigator.clipboard.writeText(text)
}

function searchCopiedElements() {
	let t: NodeListOf<Element> = document.querySelectorAll('.copied')
	if (t) {
		t.forEach(el => {
			el.setAttribute('title', 'Скопировать')
			el.addEventListener('click', (e: Event) => {
				const copiedElement = e.target!
				copyToClipboard(copiedElement)
			})
		})
	}
}

onMounted(() => {
	searchCopiedElements()
})
</script>

<template>
	<section id="noCode" class="noCode">
		<div class="noCode__wrapper">
			<carousel :carouselData="items" :blocksData="blocks" />
		</div>
	</section>
</template>

<style scoped lang="scss">
.noCode {
	width: calc(100vw - 8px);
	margin-left: -50vw;
	left: 50%;

	&__wrapper {
		position: absolute;
		overflow: hidden;
	}

	&__btns {
		z-index: 1;
	}
	--carouselTitle0Color: #be9e35;
}

:deep(.carousel__section:nth-child(2)) {
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: var(--article-bc);
	}
}

:deep(.fullScreenWrapper) {
	height: var(--C100vh);
	position: absolute;
}
</style>
