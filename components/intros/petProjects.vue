<script setup lang="ts"></script>
<template lang="">
	<section class="petProjects">
		<div data-v-cf75a2ad="" class="petProjects__introScreen">
			<div data-v-cf75a2ad="" class="petProjects__header">
				<h2 data-v-cf75a2ad="">Пет проекты</h2>
			</div>
			<div data-v-cf75a2ad="" class="petProjects__content">
				<div data-v-cf75a2ad="" class="petProjects__primaryButton">
					<a data-v-cf75a2ad="" href="/freelancerPage/main" class="">Перейти</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.petProjects {
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(/images/developer/developerIntro.png);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50%;
		filter: blur(10px) brightness(0.5);
	}

	&__introScreen {
		display: flex;
		flex-direction: column;
		align-items: center;

		height: 100%;
		width: 100%;
	}

	&__header {
		height: 60vh;
		display: flex;
		align-items: center;
		h2 {
			font-size: max(2rem, 7vmax);
			text-align: center;
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
</style>
