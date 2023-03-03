<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import isometricMonitor from '~/assets/Icons/isometricMonitor.vue'
import isometricCoffee from '~~/assets/Icons/isometricCoffee.vue'
import IsometricRain from '~~/assets/Icons/isometricRain.vue'
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

function animationYoYo(trigger: String, target: String) {
	gsap.from(target, {
		yPercent: -2,
		repeat: -1,
		yoyo: true,
		duration: 1.5,
		ease: 'sine.inOut',
		scrollTrigger: {
			trigger: trigger,
			toggleActions: 'play pause play play',
			start: 'top center',
			end: 'bottom bottom-=100px'
		}
	})
}

function TitleAnimation(trigger: String, target: String, startElement: String) {
	gsap.fromTo(
		target,
		{
			opacity: 0,
			transform: 'translate(0, -7rem) rotateX(75deg)'
		},
		{
			ease: 'ease',

			opacity: 1,
			duration: 0.5,
			transform: 'translate(0, 0) rotateX(0deg)',
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play pause resume reset',
				start: `${startElement}-=200rem center`.replace(/['']+/g, ''),
				end: 'bottom center'
			}
		}
	)
}

function SubTitleAnimation(
	trigger: String,
	target: String,
	startElement: String
) {
	gsap.fromTo(
		target,
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
				start: `${startElement}-=200rem center`.replace(/['']+/g, ''),
				end: 'bottom center'
			}
		}
	)
}

function IntroAnimation(): void {
	const trigger = '.intro'
	TitleAnimation(trigger, '.intro__title', 'center')
	SubTitleAnimation(trigger, '.intro__subintro', 'center')
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
				toggleActions: 'play none none reverse',
				start: 'top center',
				end: 'bottom 300'
			}
		}
	)
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
				toggleActions: 'play pause none reverse',
				scrub: true,
				start: 'top center',
				end: 'bottom bottom+=100rem'
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
	cloudAnimation(cloud1.target)
	cloudAnimation(cloud2.target)
	function cloudAnimation(target: String) {
		gsap.fromTo(
			target,
			{
				display: 'none',
				opacity: 1,
				z: '12rem',
				yPercent: 1,
				backdropFilter: 'blur(100rem) brightness(10px)'
			},
			{
				yPercent: -40,
				display: 'block',
				ease: 'ease',
				scrollTrigger: {
					trigger: trigger,
					toggleActions: 'play reset reset reset',
					scrub: true,
					start: '-200vh center',
					end: 'bottom 100'
				}
			}
		)
	}
}

function CoffeeaboutHowApear() {
	const trigger2 = '.doing'
	gsap
		.to('.about__coffee', {
			yPercent: 'random(20, 200)',
			xPercent: 'random(-50, 50)',
			rotation: 'random(0, 360)',
			transformOrigin: '50% 50%',
			repeat: -1,
			duration: 5,
			repeatRefresh: true,
			scrollTrigger: {
				trigger: '.WrapperForCoffee',
				start: 'top center',
				end: 'bottom+=100vh bottom-=100vh'
			}
		})
		.invalidate()
	gsap.fromTo(
		'.about__coffee',
		{
			y: '-80vh',
			x: '0',
			scale: 1
		},
		{
			y: '40vh',
			x: '-80vw',
			rotation: 0,
			scale: 2,
			scrollTrigger: {
				trigger: trigger2,
				toggleActions: 'play reverse none none',
				scrub: true,

				start: 'top-=100px center',
				end: 'bottom+=100vh bottom'
			}
		}
	)
}

function aboutAnimation(): void {
	const trigger = '.about'
	TitleAnimation(trigger, '.about__title', 'top')
	SubTitleAnimation(trigger, '.about__subtitle', 'top')
	animationYoYo(trigger, '.about__monitor')
	gsap.fromTo(
		'.about__wrapper',
		{
			y: '-50vh'
		},
		{
			duration: 3,
			ease: 'ease',

			y: '0vh',
			scrollTrigger: {
				trigger: '.about',
				toggleActions: 'play pause none none',
				//markers: true,
				scrub: true,

				start: 'top-=200 center',
				end: 'bottom bottom'
			}
		}
	)
	gsap.fromTo(
		'.about__monitor',
		{
			y: '-50vh',
			scale: 0.6,
			opacity: 0
		},
		{
			y: '-10vh',
			opacity: 1,
			scale: 1,
			scrollTrigger: {
				trigger: '.about',
				toggleActions: 'play pause none none',
				scrub: true,

				start: 'top center',
				end: 'bottom bottom-=100px'
			}
		}
	)

	gsap.fromTo(
		'.about__coffee',
		{
			opacity: 0
		},
		{
			opacity: 1,

			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play reverse play reverse',

				scrub: true,
				start: 'top center',
				end: 'bottom bottom'
			}
		}
	)
}

function doingAnimation() {
	const trigger = '.doing'
	TitleAnimation(trigger, '.doing__title', 'top')
	SubTitleAnimation(trigger, '.doing__subtitle', 'top')
	gsap.fromTo(
		'.doing__wrapper',
		{
			y: '-60vh',
			Opacity: 0
		},
		{
			duration: 3,
			opacity: 1,
			ease: 'ease',

			y: '20vh',
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play pause none none',
				//markers: true,
				scrub: true,
				start: 'top center',
				end: 'bottom+=200 bottom'
			}
		}
	)
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	IntroAnimation()
	CloudsAnimation()
	CoffeeaboutHowApear()
	aboutAnimation()
	doingAnimation()
})
</script>

<template>
	<section class="developerApproach">
		<section class="intro">
			<div class="intro__wrapper">
				<h1 class="title intro__title">
					Офис / <br />
					Продуктовая компания
				</h1>
				<div class="subtitle intro__subintro">
					<p>Компании занимающиеся развитием и продажой своего продукта</p>
				</div>
			</div>
		</section>
		<div class="clouds">
			<div class="cloud cloud1"></div>
			<div class="cloud cloud2" />
		</div>
		<div class="WrapperForCoffee">
			<section class="about">
				<isometricCoffee
					width="10vmax"
					height="10vmax"
					class="about__coffee"
				/>
				<isometricMonitor
					width="50vmax"
					height="50vmax"
					class="about__monitor"
				/>
				<div class="container">
					<div class="about__wrapper">
						<p class="subtitle about__subtitle">
							Что же это за компании такие?
						</p>
						<h1 class="title about__title">Определение</h1>
						<div class="subtitle about__subtitle">
							<p>
								Продуктовые компании – это компании, которые специализируются на
								разработке и продаже программного обеспечения или других
								цифровых продуктов, таких как мессенджеры (например, Telegram) и
								графические редакторы (например, Adobe). Что касается
								сотрудников в таких компаниях, то программисты играют важную
								роль в разработке и поддержке продуктов, поэтому их роль в таких
								компаниях является чуть ли не самая первая.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="doing">
				<IsometricRain
					width="50vmax"
					height="50vmax"
					class="doing__rain"
				/>
				<div class="container">
					<div class="doing__wrapper">
						<h1 class="title doing__title">Как это происходит?</h1>
						<div class="subtitle doing__subtitle">
							<p>
								Продукт создаётся как обычно: с помощью нескольких человек,
								бесчислиннымы чашками кофе, несколько неспанных ночей и все это
								обязательно присыпается слезами разработчиками
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="qualities">
				<div class="container"></div>
			</section>
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
	backdrop-filter: blur(9px);
	//text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #000000, 2px 1px 1px #000000,
	//	1px 2px 1px #000000, 3px 2px 1px #000000, 2px 3px 1px #000000;
	text-shadow: 0 0 12px rgb(0 0 0 / 60%);
}
.title {
	display: block;

	color: var(--FP-Developer-intro-color);
	text-transform: uppercase;
	font-size: clamp(1.3rem, 6vmin, 6rem);
	backdrop-filter: blur(9px);
}

.intro {
	display: flex;
	align-items: flex-start;
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

.about {
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;

	&__wrapper {
		backdrop-filter: blur(9px);
	}

	&__monitor {
		position: absolute;
		left: -23%;
		bottom: -6vmax;
	}

	&__coffee {
		position: absolute;
		right: 6%;
		bottom: 0;
	}
	&__title {
		color: var(--main-color);
	}
}
.doing {
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	&__title {
		color: var(--main-color);
	}
	&__rain {
		position: absolute;
		right: -23%;
		bottom: -6vmax;
	}
}

@media (max-width: 1024px) {
	body .intro .intro__wrapper {
		width: 100%;
		margin-left: 0%;
		flex-basis: auto;
	}
}
</style>
