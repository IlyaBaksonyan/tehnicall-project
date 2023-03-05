<template>
	<button
		tabindex="0"
		class="block"
	>
		<slot name="img" />
		<h2>
			<slot name="h2" />
		</h2>
	</button>
</template>

<style scoped lang="scss">
.block {
	background: transparent;

	&:hover {
		-webkit-box-shadow: -1px 2px 23px 10px var(--main-color);
		-moz-box-shadow: -1px 2px 23px 10px var(--main-color);
		box-shadow: -1px 2px 23px 10px var(--main-color);
		cursor: pointer;
	}

	h2 {
		text-align: center;
		color: var(--white);
	}

	img {
		width: 100%;
		height: 100%;
	}
}
</style>
