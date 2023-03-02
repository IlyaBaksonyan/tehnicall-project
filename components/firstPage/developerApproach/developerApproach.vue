<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { onMounted } from 'vue'
// eslint-disable-next-line no-undef
useHead({
	script: [
		{ src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js' },
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js'
		}
	]
})

gsap.registerPlugin(ScrollTrigger)

function TitleAnimation(trigger: String) {
	gsap.fromTo(
		'.title',
		{
			opacity: 0,
			transform: 'translate(0, -7rem) rotateX(75deg)'
		},
		{
			ease: 'ease',
			opacity: 1,
			duration: 1,
			transform: 'translate(0, 0) rotateX(0deg)',
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play pause resume reverse',
				start: 'center-=200rem center',
				end: 'bottom center'
			}
		}
	)
}

function SubTitleAnimation(trigger: String) {
	gsap.fromTo(
		'.subtitle',
		{
			opacity: 0,
			transform: 'translate(0, 20rem) rotateX(305deg)'
		},
		{
			ease: 'ease',
			opacity: 1,
			duration: 1,
			transform: 'translate(0, 0) rotateX(0deg)',
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play pause resume reset',
				start: 'center-=200rem center',
				end: 'bottom center'
			}
		}
	)
}

function IntroAnimation(): void {
	const trigger = '.intro'
	TitleAnimation(trigger)
	SubTitleAnimation(trigger)
	gsap.fromTo(
		'.intro__wrapper',
		{
			opacity: 0
		},
		{
			ease: 'ease',
			y: '40vh',
			opacity: 1,
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play pause none none',
				//markers: true,
				scrub: true,
				start: 'top center',
				end: 'bottom bottom+=100rem'
			}
		}
	)
	gsap.fromTo(
		trigger,
		{
			xPercent: -100
		},
		{
			ease: 'ease',
			xPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play reverse play reverse',
				//markers: true,
				start: 'top center',
				end: 'bottom 300'
			}
		}
	)
}

function CloudsAnimation(): void {
	const trigger = '.clouds'
	const cloud1 = {
		target: '.cloud1'
	}
	const cloud2 = {
		target: '.cloud2'
	}

	function cloudAnimation(target: String) {
		gsap.fromTo(
			target,
			{
				opacity: 1,
				xPercent: 0,
				z: '12rem',
				yPercent: 100,
				backdropFilter: 'blur(100rem) brightness(10px)'
			},
			{
				opacity: 1,
				yPercent: -40,
				xPercent: 10,
				ease: 'ease',
				scrollTrigger: {
					trigger: trigger,
					toggleActions: 'play reset reset reset',
					//markers: true,
					scrub: true,
					start: '-900 center',
					end: 'bottom 100'
				}
			}
		)
	}
	cloudAnimation(cloud1.target)
	cloudAnimation(cloud2.target)
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	IntroAnimation()
	CloudsAnimation()
})
</script>

<template>
	<section class="developerApproach">
		<section class="intro">
			<div class="intro__wrapper">
				<h1 class="title">
					Офис / <br />
					Продуктовая компания
				</h1>
				<div class="subtitle">
					<p>Компании занимающиеся развитием какого либо одного продукта</p>
				</div>
			</div>
		</section>
		<div class="clouds">
			<div class="cloud cloud1"></div>
			<div class="cloud cloud2" />
		</div>
		<div class="container">
			<section class="gg"></section>
		</div>
	</section>
</template>

<style scoped lang="scss">
.developerApproach {
	overflow: hidden;
	z-index: 15;
	background: var(--app-bc);
	margin-top: var(--header-size);
	margin-bottom: calc(var(--footer-margin-top) * -1);
	transform-style: preserve-3d;
}

.gap {
	min-height: 25vh;
}
.subtitle {
	font-size: max(0.8rem, 2vmin);
}
.title {
	display: block;

	color: var(--FP-Developer-intro-color);
	text-transform: uppercase;
	font-size: clamp(1.3rem, 6vmin, 6rem);
}

.intro {
	display: flex;
	align-items: start;
	background-image: url(/tehnicall-project/images/developer/intro.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	min-height: var(--100vh);

	&__wrapper {
		perspective: 450px;
		padding: 1rem 0 1rem 1rem;
		margin-left: 15vw;
		backdrop-filter: blur(1rem) brightness(0.5);
		box-shadow: 0 6px 18px rgb(0 0 0 / 20%), 0 16px 28px rgb(0 0 0 / 20%);
		text-shadow: 0 0 12px rgb(0 0 0 / 60%);
		border-radius: 2rem;
		flex-basis: 60%;
	}
}

.clouds {
	perspective: 450px;
	min-height: 50vh;
	.cloud {
		width: 70vw;
		position: absolute;
	}
	.cloud1 {
		background: url(/tehnicall-project/images/developer/cloud1.png) no-repeat
			50%;
		width: 100vw;
		height: 200vh;
		top: -100%;
		left: 0%;
		background-size: contain;
		opacity: 1;
	}
	.cloud2 {
		width: 100vw;
		height: 260vh;
		top: -100%;
		left: 0%;
		background-size: contain;
		opacity: 1;
		background: url(/tehnicall-project/images/developer/cloud2.png) no-repeat
			50%;
		background-blend-mode: difference;
	}
}

.gg {
	border: 1px #fff solid;
}

@media (max-width: 1024px) {
	body .intro .intro__wrapper {
		width: 100%;
		margin-left: 0%;
		flex-basis: auto;
	}
}
</style>
