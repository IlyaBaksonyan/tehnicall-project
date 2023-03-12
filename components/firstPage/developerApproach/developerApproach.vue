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
) {
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
) {
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
const introLandingAnimation = `#intro-Landing`
const topPartAnimation = `#intro-Landing__topPart`
const leftPartAnimation = `#intro-Landing__leftPart`
const topPartWrapperAnimation = `#intro-Landing__topPart--wrapper`
const leftPartWrapperAnimation = `#intro-Landing__leftPart--wrapper`
const introLandingBackgroundAnimation = `#intro-Landing__background`

//sections /*
function animateIntro() {
	const target = `#intro`
	const introWrapperAnimation = `#intro__wrapper`
	const introLandingTopPartElement = document.getElementById(
		`intro-Landing__topPart`
	) as HTMLElement

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
		.fromTo(`#intro-Landing`, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 })
		.fromTo(
			leftPartWrapperAnimation,
			{
				visibility: 'hidden',
				rotateY: '280deg',
				xPercent: 50
			},
			{
				visibility: 'visible',
				rotateY: '360deg',
				xPercent: 0,
				duration: 1
			}
		)
		.fromTo(
			topPartWrapperAnimation,
			{
				visibility: 'hidden',
				rotateX: '280deg',
				yPercent: -40
			},
			{
				rotateX: '360deg',
				yPercent: 0,
				visibility: 'visible',
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

function animateSwitchToAbout() {
	const tlIntroLandingMisc = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(50)} center`,
			end: `bottom+=${vh(150)} center`
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
			end: `bottom+=${vh(300)} center`
		}
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
		.to(
			`#wrapperAbout`,
			{
				visibility: 'visible'
			},
			'<'
		)

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
		.to(introLandingAnimation, {
			visibility: 'hidden',
			opacity: 0,
			immediateRender: true
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
	const wrapperTitleAnimation = '#about__wrapper--title h2'

	const tlIntroLanding = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play play reverse reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(230)} center`,
			end: `bottom+=${vh(430)} center`
		}
	})
	const tlanimateTitles = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play play reverse reverse',
			markers: true,
			scrub: 1,
			start: `bottom+=${vh(340)} center+=100`,
			end: `bottom+=${vh(490)} bottom`
		}
	})
	gsap.set(wrapperTitleAnimation, {
		autoAlpha: 0,
		yPercent: 50
	})
	gsap.set(`#wrapperAbout`, {
		visibility: 'hidden'
	})
	gsap.set('#about__wrapper', {
		autoAlpha: 0
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

	tlanimateTitles.staggerTo(
		wrapperTitleAnimation,
		0.5,
		{
			autoAlpha: 1,
			yPercent: 0
		},
		0.5
	)
	tlIntroLanding
		.to(`#about__wrapper`, {
			autoAlpha: 1
		})
		.to(
			about,
			{
				y: '-100vh',
				duration: 2
			},
			4
		)
		.to(
			introLandingBackgroundAnimation,
			{
				autoAlpha: 0,
				duration: 0.1
			},
			'<'
		)
}
function switchToHowCreate() {
	const aboutWrapper = `#about__wrapper`
	const coffee = `#howCreated__coffee`
	const coffeeElement = document.querySelector(coffee)
	gsap.set(coffee, {
		scale: 1,
		width: '100%',
		xPercent: 0,
		rotation: 0,

		yPercent: 0,
		rotateY: '360deg',

		height: '200vh',
		y: '-100vh',

		autoAlpha: 0
	})
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
					trigger: introLandingAnimation,
					toggleActions: 'play none none reverse',
					scrub: 1,
					//markers: true,
					start: `bottom+=${vh(490)} center`,
					end: `bottom+=${vh(600)} center`
				}
			})
			tl.to(about, {
				scaleY: 0.2,
				scaleX: isMobile ? 0.3 : 0.2,
				xPercent: 0,
				yPercent: 28,

				rotationY: '180deg',
				duration: 1
			})

				.to(
					aboutWrapper,
					{
						autoAlpha: 0
					},
					'<'
				)

				.to(`#wrapperHowCreated`, { visibility: 'visible' }, '<')
				.to(howCreated, { visibility: 'visible' }, '<')
				.to(
					coffee,
					{
						scaleY: 0.2,
						scaleX: isMobile ? 0.3 : 0.2,
						xPercent: 0,
						yPercent: 28,
						duration: 1,
						rotationY: '180deg'
					},
					'<'
				)
				.to(
					coffee,
					{
						autoAlpha: 1
					},
					'<28%'
				)
				.to(
					about,
					{
						visibility: 'hidden'
					},
					'<'
				)
				.to(coffee, {
					scale: 1,
					xPercent: -24,
					right: 0,
					yPercent: 25.5,
					height: '20vmax',
					width: '20vmax',
					y: 0,
					duration: 3
				})
		}
	)
}
function animateHowCreate() {
	const trigger = `#howCreated`
	const coffee = `#howCreated__coffee`
	const howCreatedWrapper = `#howCreated__wrapper`
	gsap.set(trigger, {
		visibility: 'hidden'
	})
	gsap.set(`#wrapperHowCreated`, {
		visibility: 'hidden'
	})
	gsap.set(howCreatedWrapper, {
		visibility: 'hidden'
	})
	const tl = gsap.timeline({
		stagger: 0.5,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(650)} center`,
			end: `bottom+=${vh(800)} center`
		}
	})
	tl.to(howCreatedWrapper, {
		visibility: 'visible'
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
					<div class="about__wrapper--title">
						<h2>Что же это за компании?</h2>
					</div>
					<div id="about__wrapper--title" class="about__wrapper--title">
						<h2>у них много типов и обозначений</h2>
					</div>
					<div id="about__wrapper--title" class="about__wrapper--title">
						<h2>Некоторые из них собирают всех зубрил кода</h2>
					</div>
					<div id="about__wrapper--title" class="about__wrapper--title">
						<h2>
							Другие занимаются разработкой новых веб-сайтов и мессенджеров
						</h2>
					</div>
					<div id="about__wrapper--title" class="about__wrapper--title">
						<h2>А что касается программистов там</h2>
					</div>
					<div id="about__wrapper--title" class="about__wrapper--title">
						<h2>то они настоящие локальные боги</h2>
					</div>
					<div id="about__wrapper--title" class="about__wrapper--title">
						<h2>
							Ведь кто еще создаст и поддержит эти десятитысячные строки кода?
						</h2>
					</div>
				</div>
			</section>
		</div>
		<div class="wrapperCoffee">
			<div id="howCreated__coffee" class="howCreated__coffee">
				<isometricCoffee width="10vmax" height="10vmax" />
			</div>
		</div>
		<div id="wrapperHowCreated" class="wrapperHowCreated">
			<section id="howCreated" class="howCreated">
				<div class="howCreated__leftPart">
					<div id="howCreated__wrapper" class="howCreated__wrapper">
						<div>
							<h2>
								Но как же создаётся это программное обеспечение или приложения?
							</h2>
						</div>
						<div>
							<h2>
								В таких компаниях код пишется как обычно: ручками нескольких
								человек, при помощи бесчисленного количества кофе, несколько
								ночей без сна, присыпываем свежими слезами разработчиков и в
								итоге программа создана, и готова к подаче"
							</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2>код пишется как обычно</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2>ручками нескольких человек</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2>при помощи бесчисленного количества кофе</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2>несколько ночей без сна</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2>присыпываем свежими слезами разработчиков</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2>и ваша готова и готова и к подаче</h2>
						</div>
						<div
							id="howCreated__wrapper--title"
							class="howCreated__wrapper--title"
						>
							<h2></h2>
						</div>
					</div>
				</div>
				<div class="howCreated__rightPart">
					<img
						class="howCreated__sleep"
						src="/images/developer/overtime.png"
						alt=""
					/>
				</div>

				<HowCreateSvg
					id="howCreated__backgroundSvg"
					width="100vw"
					height="100vh"
					class="howCreated__backgroundSvg"
				/>
			</section>
		</div>
		<div class="wrapperQualities">
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
		</div>
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

:deep(svg) {
	max-width: 100%;
}
.wrapperIntro {
	height: var(--100vh);
	width: 100%;
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
}

.intro-Landing {
	height: 190vh;
	display: flex;
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
		width: 25%;
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

		width: 75%;
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
		position: absolute;
		right: 0;
		left: 0;
		height: calc(var(--100vh) * 2);
		padding: 7vw max(20px, 5vw) 3vw;
		z-index: 5;
		background: url(/tehnicall-project/images/developer/aboutBackground.jpg)
			no-repeat 60% 50%;
		background-size: 200%;
		opacity: 0.6;
		animation: pan-image 15s linear infinite;

		&__wrapper {
			z-index: 2;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;

			&:first-child {
				font-size: 6vmax;
				width: 100%;
			}
			&--title {
				height: 30vh;

				* {
					display: inline-block;
					font-size: max(3.5vmax, 1rem);
					border-bottom: 1px solid var(--blackTheme-border);
				}

				&:nth-of-type(even) {
					right: 0;
					text-align: end;
				}
			}
		}

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
	}
}
.wrapperCoffee {
	top: 0;
	position: absolute;
	width: 100%;

	.howCreated__coffee {
		background: #141414;
		border-radius: 20%;
		height: 20vh;
		width: 9.8vw;
		z-index: 40;
		position: absolute;
		svg {
			width: 100%;
			height: 100%;
		}
	}
}

.wrapperHowCreated {
	top: 0;
	position: absolute;
	width: 100%;
	cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='70' height='84' viewport='0 0 100 100' style='fill:black;font-size:42px;'><text y='50%'>☕</text></svg>")
			16 0,
		auto;
	.howCreated {
		height: var(--100vh);
		background-color: var(--app-bc);
		display: flex;

		&__leftPart {
			width: 100%;
		}

		&__rightPart {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			width: 35vw;
			padding-left: 2%;
			padding-block: 10vh;
			border: none;
			border-left: 1px solid #676767;

			.howCreated__sleep {
				height: 20vmax;
				width: 20vmax;
				bottom: 0;
			}
		}

		&__wrapper {
		}

		&__backgroundSvg {
			position: absolute;
			top: 0;
			z-index: -1;
			width: 75vw;
			height: 80vh;
			left: -3vw;
			filter: brightness(0.3);
			transform: translate(0, -50%);
			top: 50%;
		}
	}
}

.wrapperQualities {
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
	.intro-Landing {
		flex-direction: column-reverse;
		justify-content: flex-end;

		&__leftPart {
			border-right: 0 !important;
			width: 100%;
			max-height: 80vh;
		}
		&__topPart {
			width: 100%;
		}
	}
	.intro__wrapper {
		border-radius: 0 !important;
	}
	.about {
		will-change: transform;
	}
}

@media (max-width: 480px) {
	.intro-Landing__topPart {
		left: 0 !important;
		overflow: auto;
	}
}
</style>
<!-- <AboutSvg class="aboutBackgroundSvg" width="100vmax" height="86vh" /> -->
