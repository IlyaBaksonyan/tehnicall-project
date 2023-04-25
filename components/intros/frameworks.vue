<script setup lang="ts">
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//library

function animationScroll() {
	const scroller = '.megaWrapper'
	const element = '.petProjects'
	const button: HTMLElement = document.querySelector('.petProjects__primaryButton a')!

	ScrollTrigger.create({
		//markers: true,
		trigger: element,
		scroller: scroller,
		start: 'start bottom',
		scrub: 1,
		snap: {
			snapTo: 0.5,
			duration: 0.7,
			directional: true,
			ease: 'ease'
		},
		end: 'bottom'
	})
	gsap.to(element, {
		//markers: true,
		onStart: () => button.click(),
		scrollTrigger: {
			trigger: element,
			start: 'center-=100 center',
			scroller: scroller
		}
	})
}
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
})
onBeforeRouteLeave((to: any, from: any, next: () => void) => {
	ScrollTrigger.getAll().forEach((trigger: any) => {
		trigger.kill()
	})
	next()
})
</script>
<template lang="">
	<section class="petProjects">
		<div data-v-cf75a2ad="" class="petProjects__introScreen">
			<div data-v-cf75a2ad="" class="petProjects__header">
				<h2 data-v-cf75a2ad="">high-level</h2>
				<h4>Высокоуровневые</h4>
			</div>
			<div data-v-cf75a2ad="" class="petProjects__content">
				<div data-v-cf75a2ad="" class="petProjects__primaryButton">
					<a data-v-cf75a2ad="" href="/tehnicall-project/frameworks" class="">Перейти</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.petProjects {
	height: 100%;
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(/images/framework/frameworksIntro.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50%;
		//filter: blur(10px) brightness(0.5);
	}

	&__introScreen {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		height: 100%;
		width: 100%;
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
</style>
