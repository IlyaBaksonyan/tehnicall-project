<script setup lang="ts">
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//library
function animationTransition() {
	const introNoCode = '.introNoCode'
	const scroller = '.megaWrapper'
	const button: HTMLElement = document.querySelector('.introNoCode__primaryButton a')!
	gsap.to(introNoCode, {
		repeat: -1,
		scrollTrigger: {
			//markers: true,
			scroller: scroller,
			//toggleActions: 'play play play play',
			onLeaveBack: () => button.click(),
			start: 'center start'
		}
	})
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationTransition()
})
</script>
<template>
	<section class="introNoCode">
		<div data-v-cf75a2ad="" class="introNoCode__introScreen">
			<div data-v-cf75a2ad="" class="introNoCode__header">
				<h2 data-v-cf75a2ad="">low-level</h2>
				<h4>Низкоуровневые</h4>
			</div>
			<div data-v-cf75a2ad="" class="introNoCode__content">
				<div data-v-cf75a2ad="" class="introNoCode__primaryButton">
					<a data-v-cf75a2ad="" href="/" class="">Перейти</a>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss">
.introNoCode {
	scroll-snap-align: start;
	height: 100%;
	&__introScreen {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

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
		justify-content: center;
		flex-direction: column;
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
	.introNoCode__introScreen::before {
		background-image: url(/images/No-code/NoCodeIntro2x.png);
	}
}
</style>
