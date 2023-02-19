<template>
	<div class="blocks">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
.blocks {
	display: grid;
	width: 100%;
	min-height: 100%;
	gap: max(6rem, 13%) max(4rem, 13%);
	grid-template-columns: repeat(auto-fit, minmax(8rem, 15vmax));
	grid-template-rows: repeat(auto-fit, minmax(10rem, 15vmax));
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
