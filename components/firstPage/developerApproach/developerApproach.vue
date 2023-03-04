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
//templates /*
function animationYoYo(target: string, trigger: string) {
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

function TitleAnimation(
	target: string,
	trigger: string,
	firstStartLocation: number = vh(2)
) {
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
				start: `${firstStartLocation} center`,
				end: 'bottom top'
			}
		}
	)
}

function SubTitleAnimation(
	target: string,
	trigger: string,
	firstStartLocation: number = vh(2)
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
				toggleActions: 'play none none reverse',
				start: `${firstStartLocation} center`,
				end: 'bottom center'
			}
		}
	)
}
//templates */

// Misc /*
//clouds
function CloudsAnimation(): void {
	const mainTrigger: string = '.clouds'
	const objectTrigger: string = '.cloud'
	cloudAnimation(objectTrigger)
	function cloudAnimation(target: string) {
		gsap.fromTo(
			target,
			{
				z: '5rem',
				yPercent: 0,
				xPercent: -30,
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
					//markers: true,
					start: vh(35) * -1 + ' ' + 'center',
					end: vh(10) + ' ' + 'top'
				}
			}
		)
	}
}
//coffee
function CoffeeAboutDoingAnimation() {
	//between them

	const trigger2 = '.doing'
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
				end: 'bottom+=100 bottom-=100'
			}
		})
		.invalidate()
}
// Misc */

//sections /*
function IntroAnimation(): void {
	const trigger = '.intro'
	TitleAnimation(`${trigger}__title`, trigger, vh(25))
	SubTitleAnimation(`${trigger}__subintro`, trigger, vh(25))
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
				toggleActions: 'play play none reverse',

				start: 'top center',
				end: `bottom center`
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
				scrub: 1,

				start: 'top center',
				end: 'center center'
			}
		}
	)
}

function AboutAnimation(): void {
	const trigger = '.about'
	TitleAnimation(`${trigger}__title`, trigger)
	SubTitleAnimation(`${trigger}__subtitle`, trigger)
	animationYoYo(`${trigger}__monitor`, trigger)
	gsap.fromTo(
		`${trigger}__wrapper`,
		{
			y: '-50vh',
			backdropFilter: 'blur(-10px)',
			Opacity: 0
		},
		{
			opacity: 1,
			ease: 'ease',
			backdropFilter: 'blur(9px)',
			y: '10vh',
			scrollTrigger: {
				trigger: '.about',
				toggleActions: 'play none none reverse',
				scrub: 1,
				start: 'top center',
				end: 'bottom bottom'
			}
		}
	)
	SvgsAnimation()
	function SvgsAnimation() {
		//monitorAnimation
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
					trigger: trigger,
					toggleActions: 'play pause none none',
					scrub: 1,

					start: 'top center',
					end: 'bottom bottom'
				}
			}
		)
		//coffeeAnimation
		gsap.fromTo(
			'.about__coffee',
			{
				opacity: 0
			},
			{
				opacity: 1,

				scrollTrigger: {
					trigger: trigger,
					scrub: 1,
					start: 'top center',
					end: 'bottom bottom'
				}
			}
		)
	}
}

function DoingAnimation(): void {
	const trigger = '.doing'
	TitleAnimation(`${trigger}__title`, trigger)
	SubTitleAnimation(`${trigger}__subtitle`, trigger)
	animationYoYo(`${trigger}__rain`, trigger)
	gsap.fromTo(
		`${trigger}__wrapper`,
		{
			y: '-50vh',
			Opacity: 0
		},
		{
			opacity: 1,
			ease: 'ease',
			y: '10vh',
			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play none none reverse',
				scrub: 1,

				start: 'top center',
				end: 'center center'
			}
		}
	)
}
// sections */
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	CloudsAnimation()
	CoffeeAboutDoingAnimation()
	IntroAnimation()
	AboutAnimation()
	DoingAnimation()
})
</script>

<template>
	<section class="developerApproach">
		<section class="intro">
			<div class="wrapper intro__wrapper">
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
					<div class="wrapper about__wrapper">
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
					<div class="wrapper doing__wrapper">
						<h1 class="title doing__title">Как создаётся код?</h1>
						<div class="subtitle doing__subtitle">
							<p>
								Код в таких компаниях создаётся как обычно: ручками, силой
								нескольких человек, бесчислинным количеством кофе, нескольким
								количеством неспанных ночей, присыпается слезами разработчиков и
								продукт готов
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class="qualities">
				<div class="container">
					<div class="wrapper qualities__wrapper">
						<h1 class="title">gdgf</h1>
					</div>
				</div>
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
	//perspective: 450px;
}

.gap {
	min-height: 25vh;
}
.subtitle {
	font-size: max(0.8rem, 2vmin);
	backdrop-filter: blur(9px);
}
.title {
	display: block;

	color: var(--main-color);
	text-transform: uppercase;
	font-size: clamp(1.3rem, 6vmin, 6rem);
	backdrop-filter: blur(9px);
}
.wrapper {
	perspective: 450px;
}

.intro {
	display: flex;
	align-items: flex-start;
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
		flex-basis: 60%;
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
	display: flex;
	flex-direction: column;
	justify-content: center;

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
.doing {
	display: flex;
	flex-direction: column;
	justify-content: center;
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
