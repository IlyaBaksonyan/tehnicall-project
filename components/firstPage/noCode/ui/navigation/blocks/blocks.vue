<script setup lang="ts">
onMounted(() => {
	const blocks = document.querySelectorAll('#navigationBlock')
	const blocksElement = ref(document.querySelector('.blocks'))
	if (blocks.length <= 2 && window.matchMedia('(min-width: 768px)').matches) {
		blocksElement.value?.setAttribute('style', '--size:1fr')
	}
})
</script>

<template>
	<div ref="blocks" class="blocks">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.blocks {
	--size: calc(35vmin - max(1rem, 1.5vmax));
	display: grid;
	gap: max(1rem, 1vmax);
	grid-template-columns: repeat(auto-fit, minmax(8rem, 45%));
	grid-template-rows: repeat(auto-fit, minmax(4rem, var(--size)));
	grid-auto-rows: var(--size);
	grid-auto-flow: dense;
	justify-content: center;
	align-content: center;
	max-width: 100%;
	width: 45vw;
}
@media (max-width: 1200px) {
	.blocks {
		--size: calc(20.5vmax - max(1rem, 1.5vmax));
		grid-template-columns: repeat(auto-fit, minmax(8rem, 40%));
	}
}
@media (max-width: 768px) {
	.blocks {
		--size: 20vmax;
		grid-template-columns: repeat(auto-fit, minmax(5rem, max(14rem, 32vmax)));
	}
}

@media (max-height: 1115px) and (max-width: 1200px) {
	:deep(.block) {
		h2 {
			font-size: max(1rem, 2.5vmin);
		}
	}
}
</style>
