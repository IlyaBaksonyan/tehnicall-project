<script setup lang="ts"></script>
<template>
	<section class="NoCode">
		<div data-v-cf75a2ad="" class="NoCode__introScreen">
			<div data-v-cf75a2ad="" class="NoCode__header">
				<h2 data-v-cf75a2ad="">low-level</h2>
			</div>
			<div data-v-cf75a2ad="" class="NoCode__content">
				<div data-v-cf75a2ad="" class="NoCode__primaryButton">
					<a data-v-cf75a2ad="" href="/" class="">Перейти</a>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss">
.NoCode {
	height: var(--C100vh);
	&__introScreen {
		display: flex;
		flex-direction: column;
		align-items: center;

		height: 100%;
		width: 100%;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background-image: url(/images/No-code/NoCodeIntro.png);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: 50%;
			filter: blur(20px) brightness(0.4);
		}
	}

	&__header {
		height: 60vh;
		display: flex;
		align-items: center;
		h2 {
			font-size: max(2rem, 7vmax);
			text-align: center;
			font-weight: 400;
		}
	}

	&__content {
		display: flex;
		justify-content: space-around;
		align-items: center;

		font-weight: 500;

		a {
			background: var(--main-color);
			width: clamp(6rem, 32vmin, 13rem);
			text-align: center;
			padding-block: 1rem;
			border-radius: 1rem;
			color: #fff;

			&:hover {
				filter: brightness(0.75);
				scale: 1.01;
			}
		}
	}

	&__primaryButton {
		display: flex;
		flex-direction: column;

		a {
			width: 100%;
			padding-inline: 4rem;
		}
	}
}
@media (max-width: 768px) {
	.NoCode__introScreen::before {
		background-image: url(/images/No-code/NoCodeIntro2x.png);
	}
}
</style>
