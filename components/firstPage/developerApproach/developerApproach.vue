<script lang="ts">
export default {
	name: 'DeveloperApproach'
}
</script>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onUnmounted, onMounted } from 'vue'
import isometricCoffee from '~/assets/Icons/isometricCoffee.vue'
import checklist from '~/assets/Icons/checklist.vue'
import GoogleSvg from '~~/assets/Icons/googleSvg.vue'
import MicrosoftSvg from '~~/assets/Icons/microsoftSvg.vue'
import TelegramSvg from '~~/assets/Icons/telegramSvg.vue'
import YandexSvg from '~~/assets/Icons/YandexSvg.vue'
import AboutSvg from '~~/assets/Icons/About.vue'
import HowCreateSvg from '~~/assets/Icons/HowCreate.vue'

// eslint-disable-next-line no-undef
useHead({
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js'
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js'
		}
	]
})

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
			//markers: true,
			start: 'top center',
			end: `bottom-=${vh(4)} top`
		}
	})
}
function animateTitle(
	target: string,
	trigger: string,
	startFirstLocation: number | string = vh(2)
): void {
	gsap.fromTo(
		target,
		{
			autoAlpha: 0,
			rotationX: '100deg',
			yPercent: '-100'
		},
		{
			ease: 'ease',
			autoAlpha: 1,
			rotateX: '0',
			yPercent: '0',
			stagger: 1,
			duration: 1.5,
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
			autoAlpha: 0,
			rotationX: '305deg',
			yPercent: '200'
		},
		{
			ease: 'ease',

			autoAlpha: 1,
			rotationX: '360deg',
			yPercent: '0',
			duration: 1.5,

			scrollTrigger: {
				trigger: trigger,
				toggleActions: 'play none none reverse',
				start: `${startFirstLocation} center`,
				end: 'bottom center'
			}
		}
	)
}
//templates
const intro = '#intro'
const about = '#about'
const howCreated = `#howCreated`
const topPartAnimation = `#intro-Landing__topPart`
const leftPartAnimation = `#intro-Landing__leftPart`
const topPartWrapperAnimation = `#intro-Landing__topPart--wrapper`
const leftPartWrapperAnimation = `#intro-Landing__leftPart--wrapper`
const introLandingBackgroundAnimation = `#intro-Landing__background`

//sections /*
function animateIntro(): void {
	const target = `#intro`
	const introWrapperAnimation = `#intro__wrapper`

	const introLandingTopPartElement = document.querySelector(
		'#intro-Landing__topPart'
	) as HTMLElement
	const widthLeftPart = gsap.getProperty(leftPartAnimation, 'width')
	const tlAnimationIntroOpacity = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: target,
			toggleActions: 'play pause none reverse',
			scrub: 1,
			start: '300 bottom',
			end: 'center center'
		}
	})
	const tlAnimationIntro = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: target,
			scrub: 1,
			start: `${vh(80)} center`,
			end: `${vh(200)} bottom`
			//markers: true
		}
	})
	const tlAnimateWrapperParts = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: target,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `${vh(100)} center`,
			end: `${vh(200)} bottom`
		}
	})

	animateTitle(`#intro__title`, target, vh(25))
	animateSubTitle(`#intro__subtitle`, target, vh(25))
	introLandingTopPartElement.style.setProperty(
		'--widthLeftPart',
		`${widthLeftPart}px`
	)
	ScrollTrigger.create({
		trigger: `#MainWrapper`,
		scrub: 1,
		pin: true,
		anticipatePin: 1,
		//markers: true,
		start: 'top top',
		end: `bottom top`
	})

	tlAnimationIntroOpacity
		.fromTo(
			target,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				duration: 1
			}
		)

		.fromTo(
			introWrapperAnimation,
			{ autoAlpha: 0 },
			{
				ease: 'ease',
				y: '40vh',
				autoAlpha: 1,
				stagger: 0.5,
				duration: 1
			}
		)
	tlAnimateWrapperParts
		.fromTo(
			leftPartAnimation,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				duration: 0.5
			}
		)
		.fromTo(
			topPartAnimation,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				duration: 0.5
			},
			'<'
		)
		.fromTo(
			leftPartWrapperAnimation,
			{
				autoAlpha: 0,
				rotateY: '280deg',
				xPercent: 50
			},
			{
				autoAlpha: 1,
				rotateY: '360deg',
				xPercent: 0,
				stagger: 1,
				duration: 1
			}
		)
		.fromTo(
			topPartWrapperAnimation,
			{
				autoAlpha: 0,
				rotateX: '280deg',
				yPercent: -40
			},
			{
				rotateX: '360deg',
				yPercent: 0,
				autoAlpha: 1,
				stagger: 1,
				duration: 1
			},
			'<'
		)

	gsap.fromTo(
		introLandingBackgroundAnimation,
		{ autoAlpha: 0 },
		{
			autoAlpha: 1,
			duration: 1,
			scrollTrigger: {
				trigger: `${intro}`,
				toggleActions: 'play pause none reverse',
				scrub: 1,
				//markers: true,
				start: `${vh(85)} center`,
				end: `${vh(200)} center`
			}
		}
	)

	gsap.matchMedia().add(
		{
			isMobile: `(max-width: 768px)`,
			isDekstop: `(min-width: ${768 + 1}px)`
		},
		context => {
			let { isMobile, isDekstop } = context.conditions as gsap.Conditions
			const autoAlphaEnd = isMobile ? 0 : 1

			tlAnimationIntro.to(target, {
				autoAlpha: autoAlphaEnd,
				scale: isMobile ? undefined : 0.5,
				width: isMobile ? undefined : '50%',
				xPercent: isMobile ? undefined : 125,
				yPercent: isMobile ? undefined : 25,

				borderTopLeftRadius: isMobile ? undefined : '40rem 15rem',
				stagger: 1,
				duration: 3
			})
		}
	)
}

function animateSwitchToAbout(): void {
	const introLandingAnimation = `#intro-Landing`
	const tlIntroLandingMisc = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `bottom center`,
			end: `bottom+=${vh(50)} center`
		}
	})
	const tlIntroLanding = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play play reverse reverse',
			scrub: 1,
			//markers: true,
			start: `bottom center`,
			end: `bottom+=${vh(200)} center`
		}
	})

	gsap.set(about, {
		borderTopRightRadius: '40rem 15rem',
		scale: 0.5,
		width: '50%',
		xPercent: 125,
		yPercent: 25,
		rotationY: '180deg',
		Opacity: 0
	})
	gsap
		.matchMedia()
		.add(
			{ isMobile: `(max-width: 769px)`, isDekstop: `(min-width: 768px)` },
			context => {
				let { isMobile, isDekstop } = context.conditions as gsap.Conditions
				isDekstop
					? tlIntroLanding.to(intro, {
							xPercent: 55,
							yPercent: 0,

							rotationY: '106',
							rotation: '-12',
							scale: 1.25,
							duration: 1.5
					  })
					: false
			}
		)
	tlIntroLanding
		.to(
			about,
			{
				xPercent: 70,
				yPercent: 0,
				rotationY: '286',
				rotation: '-12',
				scale: 1.25,

				duration: 1.5
			},
			'<'
		)
		.to(`#wrapperIntro`, {
			autoAlpha: 0,
			delay: -0.6,

			duration: 0.2
		})
		.to(about, {
			autoAlpha: 1,
			delay: -0.6,
			duration: 0.1
		})

		.to(about, {
			scale: 1,
			width: '100%',
			xPercent: 0,
			rotation: 0,
			borderRadius: 0,
			yPercent: 0,
			rotateY: '360deg',
			borderTopRightRadius: 0,
			duration: 1.5
		})
	tlIntroLandingMisc
		.to(leftPartWrapperAnimation, {
			autoAlpha: 0,
			rotateY: '280deg',
			xPercent: 50,
			duration: 0.5
		})

		.to(
			topPartWrapperAnimation,
			{
				rotateX: '280deg',
				yPercent: -100,
				autoAlpha: 0,

				duration: 0.5
			},
			'<'
		)
		.to(leftPartAnimation, {
			autoAlpha: 0,
			borderRight: 0,
			duration: 0.5
		})
		.to(
			topPartAnimation,
			{
				autoAlpha: 0,
				borderBottom: 0,
				duration: 0.5
			},
			'<'
		)
}

function animateAbout() {
	//gsap.set(`#about__wrapper`, { autoAlpha: 0 })
	const about = `#about`
	const tl = gsap
		.timeline({
			stagger: 0.5,
			scrollTrigger: {
				trigger: about,
				toggleActions: 'play reverse play reverse',
				scrub: 1,
				//markers: true,
				start: `${vh(220)} center`,
				end: `${vh(480)} center`
			}
		})
		.to(`#about__wrapper`, {
			autoAlpha: 1,
			duration: 0.2
		})
		.to(about, {
			y: '-87vh'
		})
		.to(
			introLandingBackgroundAnimation,
			{
				autoAlpha: 0
			},
			'<'
		)
		.to(
			`.aboutBackgroundSvg`,
			{
				y: '87vh'
			},
			'<'
		)
}
function switchToHowCreate() {
	const target = '#howCreated'
	const aboutWrapper = `#about__wrapper`
	const coffee = `#howCreated__coffee`

	gsap.matchMedia().add(
		{
			isMobile: `(max-width: 768px)`,
			isDekstop: `(min-width: ${768 + 1}px)`
		},
		context => {
			let { isMobile, isDekstop } = context.conditions as gsap.Conditions
			const tl = gsap.timeline({
				stagger: 0.5,
				scrollTrigger: {
					trigger: target,
					toggleActions: 'play none none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(600)} center`,
					end: `${vh(700)} center`
				}
			})
			tl.to(about, {
				borderRadius: '20%',
				scaleY: 0.1,
				scaleX: isMobile ? 0.3 : 0.1,
				xPercent: 33,
				yPercent: 33,
				rotationY: '180deg',
				duration: 3
			})

				.to(
					aboutWrapper,
					{
						autoAlpha: 0,

						duration: 1
					},
					'<'
				)
				.to(howCreated, { autoAlpha: 1 }, '<')
				.to(about, {
					autoAlpha: 0
				})
				.to(
					coffee,
					{
						autoAlpha: 1
					},
					'<'
				)
		}
	)
}

function animateHowCreate() {
	const trigger = `#howCreated`
	const coffee = `#howCreated__coffee`
	gsap.set(trigger, {
		autoAlpha: 0
	})
	gsap.set(coffee, {
		autoAlpha: 0
	})
}
// sections */
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animateIntro()
	animateSwitchToAbout()
	animateAbout()
	switchToHowCreate()
	animateHowCreate()
})
onUnmounted(() => {})
</script>

<template>
	<section id="MainWrapper" class="section MainWrapper">
		<div id="wrapperIntro" class="wrapperIntro">
			<section id="intro" class="intro section">
				<div id="intro__wrapper" class="wrapper intro__wrapper">
					<h1 id="intro__title" class="title intro__title">
						Офис / <br />
						Продуктовая компания
					</h1>
					<div id="intro__subtitle" class="subtitle">
						<p>Компании занимающиеся развитием и продажей своего продукта</p>
					</div>
				</div>
			</section>
		</div>

		<div id="intro-Landing" class="intro-Landing">
			<div id="intro-Landing__leftPart" class="intro-Landing__leftPart">
				<div
					id="intro-Landing__leftPart--wrapper"
					class="intro-Landing__leftPart--wrapper"
				>
					<div id="leftPart__google" class="leftPart__google">
						<h2>Google</h2>
						<GoogleSvg class="intro__svg" height="10vmax" width="100%" />
					</div>
					<div id="leftPart__microsoft" class="leftPart__microsoft">
						<h2>Microsoft</h2>
						<MicrosoftSvg class="intro__svg" width="10vmax" height="100%" />
					</div>
					<div id="leftPart__telegram" class="leftPart__telegram">
						<h2>Телеграм</h2>
						<TelegramSvg class="intro__svg" width="10vmax" height="100%" />
					</div>
					<div id="leftPart__yandex" class="leftPart__yandex">
						<h2>Яндекс</h2>
						<YandexSvg class="intro__svg" height="100%" width="10vmax" />
					</div>
				</div>
			</div>
			<div
				id="intro-Landing__background"
				class="intro-Landing__background"
			></div>
			<div id="intro-Landing__topPart" class="intro-Landing__topPart">
				<div
					id="intro-Landing__topPart--wrapper"
					class="intro-Landing__topPart--wrapper"
				>
					<h1>Что же скрывают</h1>
					<h1>эти огромные стены</h1>
				</div>
			</div>
		</div>
		<div id="wrapperAbout" class="wrapperAbout">
			<section id="about" class="about">
				<div id="about__wrapper" class="about__wrapper">
					<div id="about__row" class="about__row about__row1">
						<div id="about__row--column" class="about__row-column1">
							<p id="about__subtitle" class="subtitle">
								Что же это за компании такие?
							</p>
						</div>
						<div id="about__row--column" class="about__row-column2">
							<h1 id="about__title" class="title">Определение</h1>
						</div>
					</div>
					<div id="about__row" class="about__row about__row2">
						<div id="about__row--column" class="about__row-column1">
							<div id="about__subtitle" class="subtitle">
								<p>
									Продуктовые компании - хитрые места, где зубры кода и другие
									мастера творчества развивают и продают цифровые шедевры.
								</p>
							</div>
						</div>
						<div id="about__row--column" class="about__row-column2"></div>
					</div>
					<div id="about__row" class="about__row about__row3">
						<div id="about__row--column" class="about__row-column1">
							<p>Роль программистов в продуктовых компаниях</p>
						</div>
						<div id="about__row--column" class="about__row-column2">
							<p>
								На этой территории процветают мессенджеры, графические редакторы
								и другие продукты, приводящие в восторг даже котиков.
							</p>
						</div>
					</div>
					<div id="about__row" class="about__row about__row4">
						<div id="about__row--column" class="about__row-column1">
							<p>
								программисты занимают золотую позицию и являются ключевыми
								героями в процессе создания и поддержки продуктов.
							</p>
						</div>
						<div id="about__row--column" class="about__row-column2">
							<p>
								Но это не удивительно, ведь только от одного взгляда на кодовую
								базу такого приложения понимаешь что они настоящие короли
								джунглей
							</p>
						</div>
					</div>
					<AboutSvg class="aboutBackgroundSvg" width="100vmax" height="86vh" />
				</div>
			</section>
		</div>
		<div id="wrapperHowCreated" class="wrapperHowCreated">
			<section id="howCreated" class="howCreated">
				<div class="container">
					<div id="howCreated__wrapper" class="wrapper">
						<div id="howCreated__subtitle" class="subtitle">
							<p>
								Но как же создаётся это программное обеспечение или приложения?
							</p>
						</div>
						<h1 id="howCreated__title" class="title">
							Как создаются приложения
						</h1>
						<div id="howCreated__subtitle" class="subtitle">
							<p>
								В таких компаниях код пишется как обычно: ручками нескольких
								человек, при помощи бесчисленного количества кофе, несколько
								ночей без сна, присыпываем свежими слезами разработчиков и в
								итоге программа создана, и готова к подаче"
							</p>
						</div>
						<HowCreateSvg
							id="howCreated__backgroundSvg"
							width="100vw"
							height="100vh"
							class="howCreated__backgroundSvg"
						/>
					</div>
				</div>
				<div id="howCreated__coffee" class="howCreated__coffee">
					<isometricCoffee width="10vmax" height="10vmax" />
				</div>
			</section>
		</div>

		<section id="qualities" class="qualities section">
			<div id="qualities__intro" class="container qualities__intro">
				<div id="qualities__intro__wrapper" class="wrapper">
					<div id="qualities__intro__subtitle" class="subtitle">
						<p>Но почему люди остаются работать в таких условиях?</p>
					</div>
					<h1 id="qualities__intro__title" class="title">Качества</h1>
					<div id="qualities__intro__subtitle" class="subtitle">
						<p>Если кратко, то там есть печеньки, но на самом деле"</p>
					</div>
				</div>
			</div>
			<div id="qualities--pros__wrapper" class="pros__wrapper"></div>
			<div id="qualities--cons__wrapper" class="cons__wrapper"></div>
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
section {
	perspective: 900px;
}
.MainWrapper {
	will-change: position;
	z-index: 100;
	background: var(--app-bc);
	overflow: hidden;
	//position: sticky;
	height: 17000px;
	min-height: var(--100vh);
	max-width: calc(100vw - 16px);
}
.gap {
	min-height: 25vh;
}
.subtitle {
	font-size: max(0.8rem, 2vmin);
}
.title {
	display: block;

	color: var(--main-color);
	text-transform: uppercase;
	font-size: clamp(1.3rem, 6vmin, 6rem);
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
:deep(svg) {
	max-width: 100%;
}

.intro-Landing {
	height: 190vh;
	top: 0px;
	position: absolute;
	right: 0;
	left: 0;
	svg {
		display: block;
	}
	&__background {
		background: url(/tehnicall-project/images/developer/google-office.jpg)
			no-repeat 50%;
		position: absolute;
		z-index: 0;
		width: 100vw;
		height: 100vh;
		filter: brightness(0.1);
		top: 0;
		background-size: cover;
	}
	&__leftPart {
		border-right: solid 2px rgb(93, 92, 97);
		position: absolute;
		height: 100vh;
		top: 0;
		z-index: 15;
		&--wrapper {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: 2vmax;
			padding-inline: max(8vw, 2rem);
			padding-top: max(1rem, 6vw);
			padding-bottom: max(1rem, 6vw);
		}

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

	&__topPart {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		height: 20vh;
		text-align: center;
		padding-inline: max(5vw, 0.5rem);
		border-bottom: solid 2px rgb(93, 92, 97);

		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		&--wrapper {
			width: 100%;

			h1 {
				font-size: max(3vw, 2rem);
			}
		}
	}
}

.wrapperAbout {
	top: 0;
	position: absolute;
	width: 100%;
	z-index: 2;

	.about {
		background: var(--app-bc);
		right: 0;
		left: 0;
		position: absolute;
		height: calc(var(--100vh) * 2);
		padding: 12vw 2rem 0 5vw;
		z-index: 5;
		background: url(/tehnicall-project/images/developer/aboutBackground.jpg)
			no-repeat;
		background-size: 200%;
		background-position: 60% 50%;

		opacity: 0.6;
		animation: pan-image 15s linear infinite;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			width: 100%;
			height: 100%;
			backdrop-filter: brightness(0.35) sepia(100%) hue-rotate(200deg);
		}
		@keyframes pan-image {
			0% {
				background-position: 36% 42%;
				background-size: 150%;
			}

			20% {
				background-position: 30% 35%;
				background-size: 176%;
			}

			20.0001% {
				/* -- View 2 -- */
				background-position: 60% 85%;
				background-size: 500%;
			}

			40% {
				background-position: 49% 81%;
				background-size: 300%;
			}

			40.0001% {
				/* -- View 3 -- */
				background-position: 80% 42%;
				background-size: 300%;
			}

			60% {
				background-position: 84% 33%;
				background-size: 150%;
			}

			60.0001% {
				/* -- View 4 -- */
				background-position: 10% 15%;
				background-size: 300%;
			}

			80% {
				background-position: 15% 4%;
				background-size: 300%;
			}

			80.0001% {
				/* -- View 5 -- */
				background-position: 80% 10%;
				background-size: 300%;
			}

			100% {
				background-position: 72% 14%;
				background-size: 300%;
			}
		}

		&__wrapper {
			z-index: 2;
		}

		&__row {
			display: flex;
			height: 40vh;
			border: 1px solid var(--blackTheme-border);

			&-column1,
			&-column2 {
				width: 100%;
			}

			&:nth-of-type(1) {
				.about__row-column1 {
					width: 30%;
					border-right: 1px solid var(--blackTheme-border);
				}
			}
			&:nth-of-type(2) {
				.about__row-column2 {
					width: 30%;
					border-left: 1px solid var(--blackTheme-border);
				}
			}
		}

		&__row:not(:first-child) {
			border-top: 0;
		}

		&__row-column {
		}
	}
}
.wrapperHowCreated {
	top: 0;
	position: absolute;
	width: 100%;

	.howCreated {
		height: var(--100vh);
		background-color: #fff;
		opacity: 0;
		&__coffee {
			position: absolute;
			top: 69%;
			right: 12%;
			height: 20vh;
			width: 9.8vw;
			border-radius: 20%;
			background-color: var(--app-bc);
			transform: translate();
			svg {
				width: 100%;
				height: 100%;
			}
		}
		&__rain {
			position: absolute;
			right: -23%;
			bottom: -6vmax;
		}
	}
}

.qualities {
	opacity: 0;
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

@media (min-width: 768px) {
	.intro-Landing__topPart {
		left: var(--widthLeftPart);
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
	.intro-Landing__leftPart {
		max-height: 80vh;
		margin-top: 20vh;
		border-right: 0 !important;
		width: 100%;
	}

	.intro-Landing__topPart {
		left: 0 !important;
		overflow: auto;
	}
}
</style>
