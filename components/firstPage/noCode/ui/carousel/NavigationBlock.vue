<template>
	<button id="navigationBlock" class="block">
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
	transition: all 0.5s ease;

	&:hover {
		box-shadow: 0px 0px 12px 5px var(--main-color);
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
		&::before {
			content: '';
			width: 100%;
			height: 100%;
			filter: brightness(30%) blur(11px);
			position: absolute;
			display: block;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: black;
		}
	}

	:slotted(img) {
		width: 100%;
		height: 100%;
	}
}

@media (min-width: 768px) {
	.block:nth-last-child(1):not(:nth-child(even), :first-child) {
		left: 50%;
	}
}
</style>
