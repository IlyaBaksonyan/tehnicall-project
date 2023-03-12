<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps({
	fill: {
		type: String,
		default: 'white'
	}
})
function handleClick() {
	const svg = document.querySelector('svg')
	svg?.addEventListener('click', () => {
		svg.classList.toggle('active')
	})
}
onMounted(() => {
	handleClick()
})
</script>
<template>
	<svg
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		aria-hidden="true"
		role="img"
		viewBox="0 0 448 512"
		:fill="props.fill"
	>
		<path
			id="firstLine"
			class="line-1"
			d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
		/>

		<path
			id="secondLine"
			class="line-2"
			d="M436 284H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
		/>
		<path
			id="thirdLine"
			class="line-3"
			d="M436 444H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
		/>
	</svg>
</template>
<style lang="scss" scoped>
svg,
svg > * {
	transition: all 0.5s linear;
}
svg.active {
	.line-1 {
		transform: rotate(45deg);
		transform-origin: 5% 30%;
	}
	.line-2 {
		transform: translate(-100%, 0);
		opacity: 0;
	}
	.line-3 {
		transform: rotate(-45deg);

		transform-origin: 5% 70%;
	}
}
</style>
