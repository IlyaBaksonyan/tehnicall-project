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

const vh = (coef: number) => window.innerHeight * (coef / 100)
const mediaQuery768 = window.matchMedia('(max-width: 768px)')
//templates /*
function animationYoYo(target: string, trigger: string): void {
	gsap.from(target, {
		yPercent: -3,
		repeat: -1,
		yoyo: true,
		duration: 1.5,
		ease: 'sine.inOut',
		scrollTrigger: {
			trigger: trigger,
			toggleActions: 'play pause play reverse',
			start: 'top center',
			end: `bottom-=${vh(4)} top`
		}
	})
}

function animateTitle(
	target: string,
	trigger: string,
	startFirstLocation: number = vh(2)
): void {
	gsap.fromTo(
		target,
		{
			opacity: 0,
			transform: 'translate(0, -7rem) rotateX(100deg)'
		},
		{
			ease: 'ease',

			opacity: 1,
			duration: 1,
			transform: 'translate(0, 0) rotateX(0deg)',
			scrollTrigger: {
				trigger: trigger,
				//markers: true,
				toggleActions: 'play none none reverse',
				start: `${startFirstLocation} center`,
				end: 'bottom top'
			}
		}
	)
}

function animateSubTitle(
	target: string,
	trigger: string,
	startFirstLocation: number | string = vh(2)
): void {
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
				toggleActions: 'play none none reverse',
				start: `${startFirstLocation} center`,
				end: 'bottom center'
			}
		}
	)
}

function animateWrapper(
	target: string,
	startFirstLocation: number | string = 0,
	endFirstLocation: number | string = 0
): void {
	animateTitle(`${target}__title`, target)
	animateSubTitle(`${target}__subtitle`, target)
	gsap.fromTo(
		`${target}__wrapper`,
		{
			y: '-30vh',
			Opacity: 0
		},
		{
			opacity: 1,
			ease: 'ease',
			y: '50vh',
			scrollTrigger: {
				trigger: target,
				toggleActions: 'play none none reverse',
				scrub: 1,
				//markers: true,
				start: `${startFirstLocation} center`,
				end: `${endFirstLocation} center`
			}
		}
	)
}
//templates */

// Misc /*
//clouds
function animateClouds(): void {
	const mainTrigger: string = '.clouds'
	const objectTrigger: string = '.cloud'

	cloudAnimation(objectTrigger)

	function cloudAnimation(target: string) {
		gsap.fromTo(
			target,
			{
				z: '5rem',
				yPercent: 0,
				x: '-60vw',
				backdropFilter: 'blur(100rem) brightness(10px)'
			},
			{
				yPercent: -50,
				z: '20rem',
				ease: 'ease',
				scrollTrigger: {
					trigger: mainTrigger,
					toggleActions: 'play reset reset reset',
					scrub: 1,

					start: `${vh(-35)} center`,
					end: vh(10) + ' ' + 'top'
				}
			}
		)
	}
}
//coffee
function animateCoffee(): void {
	//between them
	const trigger1 = '#wrapperForCoffee'
	const trigger2 = '#howCreated'
	gsap.fromTo(
		'.about__coffee',
		{
			y: '-60vh',
			x: '',
			scale: 0.5
		},
		{
			y: '20vh',
			x: '-80vw',
			scale: 2,
			scrollTrigger: {
				trigger: trigger2,
				toggleActions: 'play reverse none none',
				scrub: 1,
				start: 'top-=100px center',
				end: 'bottom+=100vh bottom'
			}
		}
	)
	gsap
		.to('.about__coffee', {
			xPercent: 'random(-50, 100)',
			yPercent: 'random(20, 150)',
			rotation: 'random(0, 360)',
			transformOrigin: '50% 50%',
			repeat: -1,
			duration: 5,
			repeatRefresh: true,
			scrollTrigger: {
				trigger: trigger1,
				start: 'top center',
				end: 'bottom+=100 bottom-=100'
			}
		})
		.invalidate()
}
// Misc */

//sections /*
function animateIntro(): void {
	const target = '#intro'
	animateTitle(`${target}__title`, target, vh(25))
	animateSubTitle(`${target}__subtitle`, target, vh(25))
	gsap.fromTo(
		target,
		{
			x: '-100vw'
		},
		{
			ease: 'ease',
			x: '0vw',
			opacity: 1,
			scrollTrigger: {
				trigger: target,
				toggleActions: 'play none none reverse',

				start: 'top center',
				end: `bottom center`
			}
		}
	)
	gsap.fromTo(
		`${target}__wrapper`,
		{
			opacity: 0
		},
		{
			ease: 'ease',
			y: '40vh',
			opacity: 1,
			scrollTrigger: {
				trigger: target,
				toggleActions: 'play pause none reverse',
				scrub: 1,

				start: 'top center',
				end: 'center center'
			}
		}
	)
}

function animateAbout(): void {
	const target = '#about'
	const monitor = `${target}__monitor`
	animateWrapper(target, vh(2), vh(58))
	animationYoYo(monitor, target)
	animateSvg()
	function animateSvg() {
		//monitorAnimation
		if (mediaQuery768.matches) {
			animateMonitorOpacity(0.7)
		} else {
			animateMonitorOpacity(1)
		}
		function animateMonitorOpacity(EndOpacity: number) {
			gsap.fromTo(
				monitor,
				{ opacity: 0 },
				{
					opacity: EndOpacity,
					scrollTrigger: {
						trigger: target,
						toggleActions: 'play pause none none',
						scrub: 1,
						//markers: true,
						start: 'top center',
						end: 'bottom bottom'
					}
				}
			)
		}
		gsap.fromTo(
			'.about__monitor',
			{
				y: '-50vh',
				scale: 0.6
			},
			{
				y: '-10vh',

				scale: 1,

				scrollTrigger: {
					trigger: target,
					toggleActions: 'play pause none none',
					scrub: 1,
					//markers: true,
					start: 'top center',
					end: 'bottom bottom'
				}
			}
		)
		//animateCoffee
		gsap.fromTo(
			'.about__coffee',
			{
				opacity: 0
			},
			{
				opacity: 1,

				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top center',
					end: 'bottom bottom'
				}
			}
		)
	}
}

function animateHowCreate(): void {
	const target = '#howCreated'

	animateWrapper(target, 0, vh(60))
	animationYoYo(`${target}__rain`, target)
}
function animateQualities(): void {
	const target = '#animateQualities'

	animateWrapper(target, 0, vh(60))
}
// sections */
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animateClouds()
	animateCoffee()
	animateIntro()
	animateAbout()
	animateHowCreate()
	animateQualities()
})
onMounted(() => {})
</script>

<template>
	<section class="developerApproach">
		<section
			id="intro"
			class="intro"
		>
			<div
				id="intro__wrapper"
				class="wrapper intro__wrapper"
			>
				<h1
					id="intro__title"
					class="title intro__title"
				>
					Офис / <br />
					Продуктовая компания
				</h1>
				<div
					id="intro__subtitle"
					class="subtitle"
				>
					<p>Компании занимающиеся развитием и продажой своего продукта</p>
				</div>
			</div>
		</section>
		<div class="clouds">
			<div class="cloud cloud1"></div>
			<div class="cloud cloud2" />
		</div>
		<div id="wrapperForCoffee">
			<section id="about">
				<div class="container">
					<div
						id="about__wrapper"
						class="wrapper"
					>
						<p
							id="about__subtitle"
							class="subtitle"
						>
							Что же это за компании такие?
						</p>
						<h1
							id="about__title"
							class="title"
						>
							Определение
						</h1>
						<div
							id="about__subtitle"
							class="subtitle"
						>
							<p>
								Продуктовые компании – это компании, которые специализируются на
								разработке и продаже программного обеспечения или других
								цифровых продуктов, таких как например мессенджеры (например,
								Telegram) или графические редакторы (например, Adobe). Что
								касается сотрудников в таких компаниях, то программисты играют
								важную роль в разработке и поддержке продуктов, поэтому их роль
								в таких компаниях является чуть ли не самой первой.
							</p>
						</div>
					</div>
				</div>
				<isometricCoffee
					id="about__coffee"
					width="10vmax"
					height="10vmax"
					class="about__coffee"
				/>
				<isometricMonitor
					id="about__monitor"
					width="50vmax"
					height="50vmax"
					class="about__monitor"
				/>
			</section>
			<section id="howCreated">
				<div class="container">
					<div
						id="howCreated__wrapper"
						class="wrapper"
					>
						<div
							id="howCreated__subtitle"
							class="subtitle"
						>
							<p>Но как же в таких компаниях создаются приложения то</p>
						</div>
						<h1
							id="howCreated__title"
							class="title"
						>
							Как создаются приложения
						</h1>
						<div
							id="howCreated__subtitle"
							class="subtitle"
						>
							<p>
								В таких компаниях код пишется как обычно: ручками нескольких
								человек, при помощи бесчисленного количества кофе, несколько
								ночей без сна, присыпываем свежими слезами разработчиков и в
								итоге программа создана, и готова к подаче"
							</p>
						</div>
					</div>
				</div>
				<IsometricRain
					id="howCreated__rain"
					width="50vmax"
					height="50vmax"
					class="howCreated__rain"
				/>
			</section>
		</div>
		<section id="animateQualities">
			<div class="container">
				<div
					id="animateQualities__wrapper"
					class="wrapper"
				>
					<div
						id="animateQualities__subtitle"
						class="subtitle"
					>
						<p>Но почему люди остаются работать в таких условиях?</p>
					</div>
					<h1
						id="animateQualities__title"
						class="title"
					>
						Качества
					</h1>
					<div
						id="animateQualities__subtitle"
						class="subtitle"
					>
						<p>Если кратко, то там есть печеньки, но на самом деле"</p>
					</div>
				</div>
			</div>
		</section>
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
	//perspective: 450px;
}

.gap {
	min-height: 25vh;
}
.subtitle {
	font-size: max(0.8rem, 2vmin);
	//backdrop-filter: blur(9px);
}
.title {
	display: block;

	color: var(--main-color);
	text-transform: uppercase;
	font-size: clamp(1.3rem, 6vmin, 6rem);
	//backdrop-filter: blur(9px);
}
.wrapper {
	perspective: 450px;
	z-index: 10;
}

.intro {
	background: url(/tehnicall-project/images/developer/intro.jpg) no-repeat 50%;
	background-size: cover;
	min-height: var(--100vh);

	&__wrapper {
		padding: 1rem 0 1rem 1rem;
		margin-left: 15vw;
		backdrop-filter: blur(1rem) brightness(0.5);
		box-shadow: 0 6px 18px rgb(0 0 0 / 20%), 0 16px 28px rgb(0 0 0 / 20%);
		text-shadow: 0 0 12px rgb(0 0 0 / 60%);
		border-radius: 2rem;
		max-width: 60%;
	}

	&__title {
		color: var(--FP-Developer-intro-color);
	}
}

.clouds {
	min-height: 50vh;
	.cloud {
		position: absolute;
		width: 200vmax;
		height: 150vmax;
		background-size: contain !important;
	}
	.cloud1 {
		background: url(/tehnicall-project/images/developer/cloud1.png) no-repeat;
	}
	.cloud2 {
		background: url(/tehnicall-project/images/developer/cloud2.png) no-repeat;
	}
}

.about {
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
}
.howCreated {
	&__rain {
		position: absolute;
		right: -23%;
		bottom: -6vmax;
	}
}

@media (max-width: 1024px) {
	body .intro .intro__wrapper {
		margin-left: 0%;
		max-width: 100%;
	}
}

@media (max-width: 768px) {
	.about__monitor {
		opacity: 0.7;
	}
}
</style>
