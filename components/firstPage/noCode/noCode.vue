<script lang="ts">
import { defineComponent } from 'vue'

import carousel from './ui/noCode-carousel/noCode-carousel.vue'
import type { Items } from '@/assets/interfaces/noCode-interfaces'
import type { Blocks } from '@/assets/interfaces/noCode-interfaces'
import json from '@/assets/letters/NoCode.json'

export default defineComponent({
	name: 'NoCode',
	components: {
		carousel
	},

	data(): {
		items: Array<Items>
		blocks: Array<Blocks>
	} {
		return {
			items: json.items,
			blocks: json.blocks
		}
	},
	mounted() {
		let t = document.querySelectorAll('.copied')

		t.forEach(el => {
			el.setAttribute('title', 'Скопировать')
			el.addEventListener('click', (e: Event) => {
				el = e.target as Element

				this.copyToClipboard(el)
			})
		})
	},
	methods: {
		copyToClipboard(element: Element) {
			const text: any = element.innerHTML
			navigator.clipboard.writeText(text)
			const afterElement = document.createElement('div')
			afterElement.innerHTML = 'Copied!'
			element.before(afterElement)
			setTimeout(() => {
				afterElement.remove()
			}, 3000)
		}
	}
})
</script>

<template>
	<section
		id="noCode"
		class="noCode"
	>
		<div class="noCode__wrapper">
			<carousel
				:carouselData="items"
				:blocksData="blocks"
			/>
			<p />
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
