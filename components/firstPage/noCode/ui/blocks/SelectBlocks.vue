<template>
	<div class="blocks">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
.blocks {
	display: grid;
	column-gap: 15%;
	row-gap: 15%;
	height: calc(100vh - var(--header-size));
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 15vw));
	grid-template-rows: repeat(auto-fit, minmax(15rem, 15vw));
	justify-content: center;
	align-content: center;
}

@media (max-width: 1200px) {
	.blocks {
		grid-template-columns: none;
		grid-template-rows: repeat(auto-fit, minmax(15rem, 0.1fr));
		row-gap: max(17rem, 2vmin);
	}
}

@media (max-height: 1115px) and (max-width: 1200px) {
	.blocks {
		grid-template-columns: none;
		grid-template-rows: repeat(auto-fit, minmax(1rem, 0.27fr));
		row-gap: max(5rem, 16%);
	}
}
</style>

<style lang="scss">
@media (max-height: 1115px) and (max-width: 1200px) {
	.block {
		h2 {
			font-size: max(0.8rem, 3vw);
		}
	}
}
</style>
