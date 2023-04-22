<template>
	<div ref="blocks" class="blocks">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.blocks {
	--size: 0.8fr;
	display: grid;
	gap: max(1rem, 1vmax);
	grid-template-columns: repeat(auto-fit, minmax(5rem, calc(100% / 2.2)));
	grid-template-rows: repeat(auto-fit, minmax(4rem, var(--size)));
	grid-auto-rows: var(--size);
	max-width: 100%;
	min-height: 100%;
	width: 100%;
	justify-content: center;
	align-content: center;
}
@media (max-width: 1200px) {
	.blocks {
		grid-template-columns: repeat(auto-fit, minmax(8rem, 40%));
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
