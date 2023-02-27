<template>
	<div class="blocks">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.blocks {
	display: grid;
	width: 100%;
	min-height: 100%;
	gap: max(4rem, 33vmin) max(2rem, 10vmin);
	grid-template-columns: repeat(auto-fit, minmax(8rem, 15vmax));
	grid-template-rows: repeat(auto-fit, minmax(8rem, 15vmax));
	justify-content: center;
	align-content: center;
	grid-auto-flow: dense;
}
</style>

<style lang="scss">
@media (max-height: 1115px) and (max-width: 1200px) {
	.block {
		h2 {
			font-size: max(1rem, 2.5vmin);
		}
	}
}
</style>
