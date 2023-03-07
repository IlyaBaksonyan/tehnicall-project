<script lang="ts">
export default {
	name: 'DeveloperApproach'
}
</script>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import isometricMonitor from '~/assets/Icons/isometricMonitor.vue'
import isometricCoffee from '~/assets/Icons/isometricCoffee.vue'
import IsometricRain from '~/assets/Icons/isometricRain.vue'
import checklist from '~/assets/Icons/checklist.vue'
import { onUnmounted, onMounted } from 'vue'
import GoogleSvg from '~~/assets/Icons/googleSvg.vue'
import MicrosoftSvg from '~~/assets/Icons/microsoftSvg.vue'
import TelegramSvg from '~~/assets/Icons/telegramSvg.vue'
import YandexSvg from '~~/assets/Icons/YandexSvg.vue'

// eslint-disable-next-line no-undef
useHead({
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js'
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js'
		}
	]
})

gsap.registerPlugin(ScrollTrigger)

const vh = (coef: number) => window.innerHeight * (coef / 100)

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
function animateLocationsSvg(target: string, trigger: string) {
	gsap.fromTo(
		target,
		{
			y: '-250vh',
			z: '-80rem',
			x: '-40vw'
		},
		{
			y: '-10vh',
			x: 0,
			z: '0',

			scrollTrigger: {
				trigger: trigger,
				scrub: 1,

				start: 'top center',
				end: 'bottom bottom'
			}
		}
	)
}
function animateOpacitySvg(
	target: string,
	trigger: string,
	mediaQuery?: number,
	endOpacity: number = 1
) {
	window.matchMedia(`(max-width: ${mediaQuery}px)`).matches
		? animate(target, trigger, endOpacity)
		: animate(target, trigger)

	function animate(target: string, trigger: string, endOpacity: number = 1) {
		gsap.fromTo(
			target,
			{ opacity: 0 },
			{
				opacity: endOpacity,
				scrollTrigger: {
					trigger: trigger,
					toggleActions: 'play pause none none',
					scrub: 1,
					//markers: true,
					start: 'top center',
					end: 'bottom bottom'
				}
			}
		)
	}
}
function animateTitle(
	target: string,
	trigger: string,
	startFirstLocation: number | string = vh(2)
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
			//z: '-40vmax',
			stagger: 1,
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

//MegaTemplates
function animateSvg(
	target: string,
	trigger: string,
	YoYo: boolean = false,
	mediaQuery?: number,
	endOpacity?: number
) {
	animateLocationsSvg(target, trigger)
	animateOpacitySvg(target, trigger, mediaQuery, endOpacity)
	if (YoYo) {
		animationYoYo(target, trigger)
	}
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
			scale: 0.1
		},
		{
			scale: 1,
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
//templates

//Misc
//clouds
// function animateClouds(): void {
// 	const mainTrigger: string = '.clouds'
// 	const objectTrigger: string = '.cloud'

// 	cloudAnimation(objectTrigger)

// 	const tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: `${mainTrigger}`,
// 			scrub: 1,
// 			pin: true,
// 			//markers: true,
// 			start: 'top top',
// 			end: `${vh(400)} top`
// 		}
// 	})
// 	function cloudAnimation(target: string) {
// 		gsap.fromTo(
// 			target,
// 			{
// 				yPercent: 0,
// 				transform: 'translate(0)',
// 				xPercent: -25
// 			},
// 			{
// 				yPercent: -50,
// 				ease: 'ease',
// 				scrollTrigger: {
// 					trigger: mainTrigger,
// 					toggleActions: 'play reset reset reset',
// 					scrub: 1,
// 					start: `${vh(-35)} center`,
// 					end: `${vh(10)} top`
// 				}
// 			}
// 		)
// 	}
// }
//coffee
// function animateCoffee(): void {
// 	//between them
// 	const trigger1 = '#wrapperForCoffee'
// 	const trigger2 = '#howCreated'
// 	gsap.fromTo(
// 		'.about__coffee',
// 		{
// 			y: '-60vh',
// 			x: '',
// 			scale: 0.5
// 		},
// 		{
// 			y: '20vh',
// 			x: '-80vw',
// 			scale: 2,
// 			scrollTrigger: {
// 				trigger: trigger2,
// 				toggleActions: 'play reverse none none',
// 				scrub: 1,
// 				start: 'top-=100px center',
// 				end: 'bottom+=100vh bottom'
// 			}
// 		}
// 	)
// 	gsap
// 		.to('.about__coffee', {
// 			xPercent: 'random(-50, 100)',
// 			yPercent: 'random(20, 150)',
// 			rotation: 'random(0, 360)',
// 			transformOrigin: '50% 50%',
// 			repeat: -1,
// 			duration: 5,
// 			repeatRefresh: true,
// 			scrollTrigger: {
// 				trigger: trigger1,
// 				start: 'top center',
// 				end: 'bottom+=100 bottom-=100'
// 			}
// 		})
// 		.invalidate()
// }
//Misc

//sections /*
function animateIntro(): void {
	const target = '#intro'
	const widthLeftPart: number | string = gsap.getProperty(
		`${target}---leftPart`,
		'width'
	)
	const borderRightLeftPart: number | string = gsap.getProperty(
		`${target}---leftPart`,
		'border-right'
	)
	const borderBottomWrite: number | string = gsap.getProperty(
		`${target}---write`,
		'border-bottom'
	)
	;(
		document.querySelector(`${target}---write`) as HTMLElement
	)?.style.setProperty('--widthLeftPart', `${widthLeftPart}px`)

	animateTitle(`${target}__title`, target, vh(25))
	animateSubTitle(`${target}__subtitle`, target, vh(25))
	gsap.set('#intro', {
		opacity: 0
	})
	const tl = gsap
		.timeline()

		.from('#intro', {
			scrollTrigger: {
				trigger: `#MainWrapper`,
				scrub: 1,
				pin: true,
				//markers: true,
				start: 'top top',
				end: `${vh(1200)} top`
			}
		})
		// animateIntroOpacity
		.fromTo(
			'#intro',
			{
				opacity: 0
			},
			{
				opacity: 1,

				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					//markers: true,
					scrub: 1,
					start: 'top center',
					end: 'center center'
				}
			}
		)
		//animateIntroRotation
		.fromTo(
			target,
			{ rotateY: '0deg', x: 0, y: 0 },
			{
				scale: 0.5,
				width: '50%',
				rotationY: '360deg',
				xPercent: 125,
				yPercent: 25,
				borderTopLeftRadius: '40rem 15rem',
				scrollTrigger: {
					trigger: target,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					markers: true,
					start: `${vh(80)} center`,
					end: `${vh(150)} center`
				}
			}
		)
		// animateIntroWrapperOpacity
		.fromTo(
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
		//animateIntroWrapperLocation
		.to(
			`${target}__wrapper`,

			{
				borderTopRightRadius: '0',
				borderBottomRightRadius: '0',
				scrollTrigger: {
					trigger: `${target}__wrapper`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(80)} center`,
					end: `${vh(150)} center`
				}
			}
		)
		// animateWrapperIntro
		.to(
			`${target}---wrapper`,

			{
				background: '#d1cdc7',
				scrollTrigger: {
					trigger: target,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(80)} center`,
					end: `${vh(150)} center`
				}
			}
		)
		//animateWrapperLeftPart
		.fromTo(
			`${target}---leftPart`,
			{
				opacity: 0,
				rotateY: '280deg',
				xPercent: 50,
				borderRight: 0
			},
			{
				borderRight: borderRightLeftPart,
				opacity: 1,
				rotateY: '360deg',
				xPercent: 0,
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(90)} center`,
					end: `${vh(150)} center`
				}
			}
		)
		//animateWrapperText
		.fromTo(
			`${target}---write`,
			{
				opacity: 0,
				rotateX: '280deg',
				yPercent: -40,
				borderBottom: 0
			},
			{
				borderBottom: borderBottomWrite,
				rotateX: '360deg',
				yPercent: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(120)} center`,
					end: `${vh(150)} center`
				}
			}
		)
		//animateWrapperBackground
		.fromTo(
			`${target}---background`,
			{ opacity: 0 },
			{
				opacity: 1,
				filter: 'brightness(0.1)',
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(85)} center`,
					end: `${vh(150)} center`
				}
			}
		)
	//rotationIntroForPhones
	gsap.matchMedia().add('(max-width: 768px)', () => {
		tl.fromTo(
			target,
			{ rotateY: '0deg', opacity: 1 },
			{
				opacity: 0,

				rotationY: '180deg',
				scrollTrigger: {
					trigger: target,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(80)} center`,
					end: `${vh(150)} center`
				}
			}
		)
	})
	animateAbout()
	animateHowCreate()
	animateQualities()
	function animateAbout(): void {
		const target = '#about'
		animateWrapper(target, vh(2), 'center')
		// tl.to('#intro---wrapper', {
		// 	opacity: 0
		// })
		tl.fromTo(
			`#intro---wrapper`,
			{ opacity: 1 },
			{
				opacity: 0,

				scrollTrigger: {
					trigger: `#intro---wrapper`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(250)} center`,
					end: `${vh(300)} center`
				}
			}
		).to(target, {})
		//Svg
		//animateMonitor
		const monitor = `${target}__monitor`
		animateSvg(monitor, target, true, 1024, 0.7)
		//animateCoffee
		const coffee = `${target}__coffee`
		animateOpacitySvg(coffee, target)
		//Svg
	}

	function animateHowCreate(): void {
		const target = '#howCreated'
		animateWrapper(target, 'start', 'center')

		// Svg
		const rain = `${target}__rain`
		animateSvg(rain, target, true, 1024, 0.6)
	}
	function animateQualities(): void {
		const target = '#qualities__intro'

		animateWrapper(target, 'start', 'center')

		//Svg
		const checklist = `#qualities__checklist`
		animateSvg(checklist, target, true, 1024, 0.6)
	}
}

// sections */
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	//animateClouds()
	//animateCoffee()
	animateIntro()
})
onUnmounted(() => {})
</script>

<template>
	<section
		id="MainWrapper"
		class="section MainWrapper"
	>
		<div
			id="intro---wrapper"
			class="intro---wrapper"
		>
			<section
				id="intro"
				class="intro section"
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
						<p>Компании занимающиеся развитием и продажей своего продукта</p>
					</div>
				</div>
			</section>
			<div
				id="intro---leftPart"
				class="intro---leftPart"
			>
				<div
					id="leftPart__google"
					class="leftPart__google"
				>
					<h2>Google</h2>
					<GoogleSvg
						class="intro__svg"
						height="10vmax"
						width="100%"
					/>
				</div>
				<div
					id="leftPart__microsoft"
					class="leftPart__microsoft"
				>
					<h2>Microsoft</h2>
					<MicrosoftSvg
						class="intro__svg"
						width="10vmax"
						height="100%"
					/>
				</div>
				<div
					id="leftPart__telegram"
					class="leftPart__telegram"
				>
					<h2>Телеграм</h2>
					<TelegramSvg
						class="intro__svg"
						width="10vmax"
						height="100%"
					/>
				</div>
				<div
					id="leftPart__yandex"
					class="leftPart__yandex"
				>
					<h2>Яндекс</h2>
					<YandexSvg
						class="intro__svg"
						height="100%"
						width="10vmax"
					/>
				</div>
			</div>
			<div
				id="intro---background"
				class="intro---background"
			></div>
			<div
				id="intro---write"
				class="intro---write"
			>
				<h1>Что же скрывают</h1>
				<h1>эти огромные стены скрывающие разработку и своих работников</h1>
			</div>
		</div>
		<section
			id="about"
			class="about"
		>
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
							разработке и продаже программного обеспечения или других цифровых
							продуктов, таких как например мессенджеры (например, Telegram) или
							графические редакторы (например, Adobe). Что касается сотрудников
							в таких компаниях, то программисты играют важную роль в разработке
							и поддержке продуктов, поэтому их роль в таких компаниях является
							чуть ли не самой первой.
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
		<section
			id="howCreated"
			class="howCreated"
		>
			<div class="container">
				<div
					id="howCreated__wrapper"
					class="wrapper"
				>
					<div
						id="howCreated__subtitle"
						class="subtitle"
					>
						<p>
							Но как же создаётся это программное обеспечение или приложения?
						</p>
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
							человек, при помощи бесчисленного количества кофе, несколько ночей
							без сна, присыпываем свежими слезами разработчиков и в итоге
							программа создана, и готова к подаче"
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
		<section
			id="qualities"
			class="qualities section"
		>
			<div
				id="qualities__intro"
				class="container qualities__intro"
			>
				<div
					id="qualities__intro__wrapper"
					class="wrapper"
				>
					<div
						id="qualities__intro__subtitle"
						class="subtitle"
					>
						<p>Но почему люди остаются работать в таких условиях?</p>
					</div>
					<h1
						id="qualities__intro__title"
						class="title"
					>
						Качества
					</h1>
					<div
						id="qualities__intro__subtitle"
						class="subtitle"
					>
						<p>Если кратко, то там есть печеньки, но на самом деле"</p>
					</div>
				</div>
			</div>
			<div
				id="qualities--pros__wrapper"
				class="pros__wrapper"
			></div>
			<div
				id="qualities--cons__wrapper"
				class="cons__wrapper"
			></div>
			<checklist
				id="qualities__checklist"
				class="qualities__checklist"
				size="40vmax"
			/>
		</section>
	</section>
	<div class="gap"></div>
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

section {
	perspective: 900px;
}

.intro---wrapper {
	svg {
		display: block;
	}
	.intro---background {
		background: url(/tehnicall-project/images/developer/google-office.jpg)
			no-repeat 50%;
		position: absolute;
		z-index: 0;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;
		background-size: cover;
	}
	.intro---leftPart {
		border-right: solid 2px rgb(93, 92, 97);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2vmax;
		position: absolute;
		padding-inline: max(8vw, 2rem);
		height: 100vh;
		top: 0;
		padding-top: max(1rem, 6vw);
		padding-bottom: max(1rem, 6vw);
		z-index: 15;

		svg {
			opacity: 0.6;
			z-index: 2;
			max-height: 100%;
		}
		h2 {
			color: #fff;
			transform: translate(-50%, -50%);
			top: 50%;
			left: 50%;
			font-size: max(1.6rem, 2vw);
			position: absolute;
			z-index: 3;
		}
	}

	.intro---write {
		text-align: center;
		padding-inline: 5vmax;
		margin-top: max(1rem, 1vw);
		border-bottom: solid 2px rgb(93, 92, 97);
		left: var(--widthLeftPart);
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		h1 {
			font-size: max(3vw, 1.5rem);
		}
	}
}
.MainWrapper {
	z-index: 100;
	background: var(--app-bc);
	overflow: hidden;
	//position: sticky;

	max-width: calc(100vw - 16px);
}

:deep(svg) {
	max-width: 100%;
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
	z-index: 10;
}

.intro {
	z-index: 15;
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

.qualities {
	height: 400vh;

	&__intro {
		height: 100vh;
	}
	&__checklist {
		position: absolute;
		right: -6%;
		top: 30vh;
	}
}

@media (max-width: 1024px) {
	body .intro .intro__wrapper {
		margin-left: 0%;
		max-width: 100%;
	}
}

@media (max-width: 768px) {
	.MainWrapper {
		max-width: 100vw;
	}
	.intro__wrapper {
		border-radius: 0 !important;
	}
}

@media (max-width: 480px) {
	.intro---leftPart {
		max-height: 80vh;
		margin-top: 20vh;
		border-right: 0 !important;
		width: 100%;
	}
	.intro---write {
		left: 0 !important;
	}
}
</style>
