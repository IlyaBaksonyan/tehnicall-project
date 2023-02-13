<template>
	<div class="blocks">
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
.blocks {
	display: grid;
	grid-gap: 15vmax;
	height: calc(100vh - var(--header-size));
	width: 100%;
	grid-template-columns: repeat(2, minmax(4vmin, 0.16fr));
	justify-content: center;
	align-content: center;
}

@media (max-width: 1200px) {
	.blocks {
		grid-template-columns: none;
		grid-template-rows: repeat(auto-fit, minmax(25vmin, 0.1fr));
		grid-gap: max(17rem, 20vmin);
	}
}
</style>
