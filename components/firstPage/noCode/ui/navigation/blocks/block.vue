<template>
	<button class="block">
		<slot name="img" />
		<div class="block__title">
			<h2>
				<slot name="h2" />
			</h2>
		</div>
	</button>
</template>

<style scoped lang="scss">
.block {
	background: transparent;
	border-radius: 1rem;
	overflow: hidden;

	&:hover {
		-webkit-box-shadow: -1px 2px 23px 10px var(--main-color);
		-moz-box-shadow: -1px 2px 23px 10px var(--main-color);
		box-shadow: -1px 2px 23px 10px var(--main-color);
		cursor: pointer;
	}

	&__title {
		position: absolute;
		box-shadow: 0px -2px 7px 1px black;
		z-index: 10;
		bottom: 0;
		border-radius: 1rem 1rem 0 0;
		overflow: hidden;
		padding: 0.5rem 0.5rem;
		translate: -50% 0;
		left: 50%;
		backdrop-filter: brightness(0.3) blur(9px);

		h2 {
			text-align: center;
			color: var(--white);
		}
	}

	:slotted(img) {
		width: 100%;
		height: calc(100% - 1.5rem);
	}
}
</style>
