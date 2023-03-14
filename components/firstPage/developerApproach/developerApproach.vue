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
import { onBeforeRouteLeave } from 'vue-router'

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
			yPercent: -100
		},
		{
			ease: 'ease',
			autoAlpha: 1,
			rotateX: '0',
			transform: 'translateY(0)',
			yPercent: 0,
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
			yPercent: 0,
			transform: 'translateY(0)',
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
const coffee: string = `#howCreated__coffee`
const introLandingAnimation = `#intro-Landing`
const topPartAnimation = `#intro-Landing__topPart`
const leftPartAnimation = `#intro-Landing__leftPart`
const topPartWrapperAnimation = `#intro-Landing__topPart--wrapper`
const leftPartWrapperAnimation = `#intro-Landing__leftPart--wrapper`

//sections /*
function animateIntro() {
	const target = `#intro`
	const introWrapperAnimation = `#intro__wrapper`
	const introLandingTopPartElement = document.getElementById(
		`intro-Landing__topPart`
	) as HTMLElement

	const tlAnimationIntroOpacity = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: target,
			toggleActions: 'play pause none reverse',
			scrub: 1,
			//markers: true,
			start: '300 bottom',
			end: 'center center'
		}
	})
	const tlAnimationIntro = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
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
		ease: 'power2.inOut',
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
		.fromTo(target, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 })
		.addPause()
		.fromTo(
			introWrapperAnimation,
			{ visibility: 'hidden' },
			{
				ease: 'back.out(4)',
				y: '40vh',
				visibility: 'visible',
				duration: 0.5
			},
			'<'
		)
	tlAnimateWrapperParts
		.fromTo(`#intro-Landing`, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 })
		.fromTo(
			leftPartWrapperAnimation,
			{
				visibility: 'hidden',
				rotateY: '280deg',
				xPercent: 45
			},
			{
				visibility: 'visible',
				rotateY: '360deg',
				xPercent: 0,
				duration: 0.5
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
				duration: 0.5
			},
			'<'
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
				stagger: 1,
				duration: 3,
				...(isMobile
					? {}
					: {
							scale: 0.5,
							width: '50%',
							xPercent: 125,
							yPercent: 25,
							borderTopLeftRadius: '40rem 15rem'
					  })
			})
		}
	)
}

function animateSwitchToAbout() {
	gsap.set(about, {
		borderTopRightRadius: '40rem 15rem',
		scale: 0.5,
		width: '50%',
		xPercent: 125,
		transform: 'translate(0,0)',
		yPercent: 25,
		rotationY: '180deg',
		autoAlpha: 0
	})
	const tlIntroLandingMisc = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
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
		ease: 'power2.inOut',
		force3D: true,
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play play reverse reverse',
			scrub: 1,
			//markers: true,
			start: `bottom center`,
			end: `bottom+=${vh(300)} center`
		}
	})
	let config = {}

	gsap
		.matchMedia()
		.add(
			{ isMobile: `(max-width: 769px)`, isDekstop: `(min-width: 768px)` },
			context => {
				let { isMobile } = context.conditions as gsap.Conditions
				config = isMobile
					? {}
					: {
							xPercent: 55,
							yPercent: 0,
							rotationY: '106',
							rotation: '-12',
							scale: 1.25,
							duration: 1
					  }
			}
		)

	tlIntroLanding
		.to(intro, { ...config })
		.to(
			about,
			{
				xPercent: 70,
				yPercent: 0,
				rotationY: '286',
				rotation: '-12',
				scale: 1.25,
				duration: 1
			},
			'<'
		)
		.to(
			`#wrapperIntro`,
			{
				autoAlpha: 0
			},
			'<62%'
		)
		.to(
			about,
			{
				autoAlpha: 1,
				duration: 0.1
			},
			'<'
		)
		.to(
			`#wrapperAbout`,
			{
				visibility: 'visible'
			},
			'<'
		)
		.to(
			about,
			{
				scale: 1,
				width: '100%',
				xPercent: 0,
				rotation: 0,
				borderRadius: 0,
				yPercent: 0,
				rotateY: '360deg',
				borderTopRightRadius: 0,
				duration: 0.7
			},
			'<50%'
		)
		.to(introLandingAnimation, {
			visibility: 'hidden',
			Opacity: 0
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
		ease: 'power2.inOut',
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
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play play reverse reverse',
			//markers: true,
			scrub: 1,
			start: `bottom+=${vh(340)} center+=100`,
			end: `bottom+=${vh(490)} bottom`
		}
	})
	gsap.set(`#wrapperAbout`, {
		visibility: 'hidden'
	})
	gsap.set([wrapperTitleAnimation, '#about__wrapper'], {
		autoAlpha: 0
	})

	tlanimateTitles.staggerFromTo(
		wrapperTitleAnimation,
		0.5,
		{
			yPercent: 50
		},
		{
			autoAlpha: 1,
			yPercent: 0,
			ease: 'back.out(4)',
			transform: 'translate(0,0)'
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
				yPercent: -50,
				duration: 2
			},
			4
		)
}
function switchToHowCreate() {
	const aboutWrapper = `#about__wrapper`
	const wrapperHowCreated = `#wrapperHowCreated`

	const config = {
		scaleX: 0.2
	}
	const coffeeElement: HTMLElement = document.querySelector(coffee)!

	const tl = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(490)} center`,
			end: `bottom+=${vh(700)} center`
		}
	})
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
	// sets the scaleX property based on screen width
	gsap.matchMedia().add(
		{
			isMobile: `(max-width: 768px)`,
			isDekstop: `(min-width: ${768 + 1}px)`
		},
		context => {
			let { isMobile } = context.conditions as gsap.Conditions
			config.scaleX = isMobile ? 0.3 : 0.2
		}
	)
	//

	tl.to(about, {
		scaleY: 0.2,
		scaleX: config.scaleX,
		xPercent: 0,
		yPercent: -23,
		rotationY: '180deg',
		duration: 1
	})
		.to(
			coffee,
			{
				scaleY: 0.2,
				scaleX: config.scaleX,
				xPercent: 0,
				yPercent: 28,
				rotationY: '180deg',
				duration: 1
			},
			'<'
		)

		.to(wrapperHowCreated, { visibility: 'visible' }, '<')
		.to(coffee, { autoAlpha: 1 }, '<28%')
		.to(`#wrapperAbout`, { visibility: 'hidden' }, '<')
		.to(coffee, {
			scale: 1,
			xPercent: -8,
			right: 0,
			yPercent: 25.5,
			height: '20vmax',
			width: '20vmax',
			y: 0,
			duration: 3
		})
}
function animateHowCreate() {
	const trigger = `#howCreated`
	const wrapperHowCreated = `#wrapperHowCreated`
	const howCreatedWrapper = `#howCreated__wrapper`
	const titles = `#howCreated__wrapper-titles *`

	const tlLeftPartWrapper = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(540)} center`,
			end: `bottom+=${vh(600)} center`
		}
	})
	const tlAnimateTitles = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(800)} center`,
			end: `bottom+=${vh(1000)} center`
		}
	})
	const config = {
		yPercent: -35
	}
	gsap.matchMedia().add(
		{
			isMobile: `(max-width: 768px)`
		},

		context => {
			let { isMobile } = context.conditions as gsap.Conditions
			config.yPercent = isMobile ? -50 : -35
		}
	)
	gsap.set(wrapperHowCreated, {
		visibility: 'hidden'
	})
	gsap.set(howCreatedWrapper, {
		autoAlpha: 0
	})
	gsap.set(titles, {
		autoAlpha: 0
	})
	tlLeftPartWrapper.to(howCreatedWrapper, {
		autoAlpha: 1,
		duration: 1
	})
	tlAnimateTitles
		.staggerFromTo(
			titles,
			1,
			{
				yPercent: 100
			},
			{
				boxShadow: 'black 1px 3px 6px -3px',
				autoAlpha: 1,
				yPercent: 0,

				ease: 'back.out(4)'
			},
			1
		)
		.to(
			howCreatedWrapper,
			{
				yPercent: config.yPercent,
				duration: 2
			},
			'<40%'
		)
}
function switchToQualities() {
	const qualities = `#qualities`
	const wrapperQualities = `#wrapperQualities`
	const wrapperHowCreated = `#wrapperHowCreated`
	const howCreated = `#howCreated`
	const tl = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1100)} center`,
			end: `bottom+=${vh(1200)} center`
		}
	})
	const tlCoffee = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1100)} center`,
			end: `bottom+=${vh(1200)} center`
		}
	})
	tlCoffee
		.to(coffee, { x: '100vmax' }, '<')
		.to(coffee, { visibility: 'hidden' })
	tl.fromTo(
		howCreated,
		{
			filter: 'brightness(1) blur(0px)'
		},
		{
			y: '-150vh',
			z: '-30rem',
			rotation: 15,
			border: '#fff solid 1px',
			borderBottomLeftRadius: 0,
			borderRadius: '2rem',
			rotationX: 20,
			filter: 'brightness(0.3) blur(4px)',

			duration: 2,
			ease: 'power2.out'
		},
		'<'
	)
		.to(wrapperQualities, { visibility: 'visible' }, '<')
		.fromTo(
			qualities,
			{
				border: '#fff solid 1px',
				borderTopRightRadius: 0,
				yPercent: 40,
				z: '-40rem',
				rotationX: 15,
				margin: '-10%',
				rotationY: 10,
				borderRadius: '2rem',
				rotation: 15,
				filter: ' blur(4px)'
			},
			{
				yPercent: 0,
				z: 0,
				rotationX: '0',
				rotationY: '0',
				margin: '0%',
				rotation: '0',
				border: '#fff solid 0px',
				borderRadius: 0,
				filter: ' blur(0px)',

				duration: 2,
				ease: 'power2.out'
			},
			'<-50%'
		)
		.to(wrapperHowCreated, { visibility: 'hidden' })
}
function animateQualities() {
	const qualities = `#qualities`
	const wrapperQualities = `#wrapperQualities`
	const prosAccordions = `#qualities__pros-accordions`
	const consAccordions = `#qualities__cons-accordions`
	const tlSwitchToPros = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1280)} center`,
			end: `bottom+=${vh(1400)} center`
		}
	})
	const tlAnimatePros = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1450)} center`,
			end: `bottom+=${vh(1650)} center`
		}
	})
	const tlMoveCons = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1280)} center`,
			end: `bottom+=${vh(1900)} center`
		}
	})
	const tlSwitchToCons = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1700)} center`,
			end: `bottom+=${vh(1900)} center`
		}
	})
	const tlAnimateCons = gsap.timeline({
		stagger: 0.5,
		ease: 'power2.inOut',
		scrollTrigger: {
			trigger: introLandingAnimation,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(1970)} center`,
			end: `bottom+=${vh(2170)} center`
		}
	})
	tlMoveCons
		.fromTo(
			consAccordions,
			{
				y: '-170vh',
				x: '30vh',
				scale: 0.3,
				filter: 'blur(10px)'
			},
			{
				y: '-100vh',
				duration: 4
			}
		)
		.to(
			consAccordions,
			{
				y: 0
			},
			'<10'
		)
	gsap.set(wrapperQualities, {
		visibility: 'hidden',
		Opacity: 1
	})
	gsap.set(prosAccordions, {})
	tlSwitchToPros
		.to(qualities, {
			y: '-100vh'
		})
		.to(
			`${qualities}`,
			{
				background: `linear-gradient(135deg, #144e74 0%, #1d216b 100%)`
			},
			'<'
		)
		.fromTo(
			prosAccordions,
			{
				y: '-70vh',
				x: '-30vh',
				scale: 0.3,
				filter: 'blur(10px)'
			},
			{
				y: '0',
				x: '0',
				scale: 1,
				filter: 'blur(0px)'
			},
			'<'
		)
		.to(
			`#qualities__checklist`,
			{
				y: '-50vh'
			},
			'<'
		)
	tlAnimatePros.staggerFromTo(
		`${prosAccordions} .text`,
		2,
		{
			autoAlpha: 0,
			height: 0
		},
		{
			height: 'auto',
			autoAlpha: 1
		},
		2.5
	)
	tlSwitchToCons
		.to(qualities, {
			y: '-200vh'
		})
		.to(
			`${qualities}`,
			{
				background: `linear-gradient(120deg, rgb(76, 39, 137) 13.57%, rgb(74, 44, 159) 98.38%);`
			},
			'<'
		)

		.to(consAccordions, {
			scale: 1,
			filter: 'blur(0px)',
			x: '0'
		})
	tlAnimateCons.staggerFromTo(
		`${consAccordions} .text`,
		2,
		{
			autoAlpha: 0,
			height: 0
		},
		{
			height: 'auto',
			autoAlpha: 1
		},
		2.5
	)
}
// sections */
onBeforeRouteLeave((to, from, next) => {
	ScrollTrigger.getAll().forEach(a => {
		a.kill()
	})
	animateIntro()
	animateSwitchToAbout()
	animateAbout()
	switchToHowCreate()
	animateHowCreate()
	next()
})
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animateIntro()
	animateSwitchToAbout()
	animateAbout()
	switchToHowCreate()
	animateHowCreate()
	switchToQualities()
	animateQualities()
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
						<div class="howCreated__title">
							<h2>Но как же создаются эти веб приложения?</h2>
						</div>
						<div
							id="howCreated__wrapper-titles"
							class="howCreated__wrapper-titles"
						>
							<h2>Берем несколько разработчиков</h2>
						</div>
						<div
							id="howCreated__wrapper-titles"
							class="howCreated__wrapper-titles"
						>
							<h2>Даём им кофе и печенек</h2>
						</div>
						<div
							id="howCreated__wrapper-titles"
							class="howCreated__wrapper-titles"
						>
							<h2>Заставляем работать по 24 часа</h2>
							<h2>(а они и не против)</h2>
						</div>
						<div
							id="howCreated__wrapper-titles"
							class="howCreated__wrapper-titles"
						>
							<h2>
								присыпываем это свежими <br />
								слезами вызванными багами
							</h2>
						</div>
						<div
							id="howCreated__wrapper-titles"
							class="howCreated__wrapper-titles"
						>
							<h2>и ваша программа....</h2>
						</div>
						<div
							id="howCreated__wrapper-titles"
							class="howCreated__wrapper-titles"
						>
							<h2>Готова к использованию</h2>
						</div>
					</div>
					<HowCreateSvg
						id="howCreated__backgroundSvg"
						class="howCreated__backgroundSvg"
					/>
				</div>
				<div class="howCreated__rightPart">
					<img
						class="howCreated__sleep"
						src="/images/developer/overtime.png"
						alt=""
					/>
				</div>
			</section>
		</div>
		<div id="wrapperQualities" class="wrapperQualities">
			<section id="qualities" class="qualities">
				<div id="qualities__intro" class="qualities__intro">
					<div id="qualities__intro-subtitle" class="qualities__intro-subtitle">
						<p>Но почему же люди остаются работать в таких условиях?</p>
					</div>
					<div id="qualities__intro-title" class="qualities__intro-title">
						<h2>Преймущества</h2>
						<h2>и <span>Недостатки</span></h2>
					</div>
				</div>
				<div id="qualities__pros" class="qualities__pros">
					<div id="qualities__pros-wrapper" class="qualities__pros-wrapper">
						<div
							id="qualities__pros-accordions"
							class="qualities__pros-accordions accordions"
						>
							<h1>Преймущества</h1>
							<div id="accordion" class="accordion">
								<div class="title">Развитие</div>
								<div class="text">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
									quisquam.
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vero, eum?
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Minima, similique.
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti, quisquam. Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Lorem ipsum dolor sit amet. Minima,
									similique. Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Rerum, deserunt!
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="qualities__cons" class="qualities__cons">
					<div id="qualities__cons-wrapper" class="qualities__cons-wrapper">
						<div
							id="qualities__cons-accordions"
							class="qualities__cons-accordions accordions"
						>
							<h1>Недостатки</h1>
							<div id="accordion" class="accordion">
								<div class="title">Развитие</div>
								<div class="text">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
									quisquam.
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vero, eum?
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Lorem ipsum dolor sit amet. Minima, similique. Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Rerum, deserunt!
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title"></div>
								<div class="text"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="qualities__wrapperChecklist">
					<checklist
						id="qualities__checklist"
						class="qualities__checklist"
						size="40vmax"
					/>
				</div>
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
	height: 22000px;
	min-height: var(--100vh);
	max-width: calc(100vw - 16px);
}
.gap {
	min-height: 25vh;
}

:deep(svg) {
	max-width: 100%;
}
.wrapperIntro {
	height: var(--100vh);
	width: 100% !important;
	.intro {
		z-index: 15;
		background: url(/tehnicall-project/images/developer/intro.jpg) no-repeat 50%;
		background-size: cover;
		min-height: var(--100vh);
		width: 100%;

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
			text-transform: uppercase;
			font-size: clamp(1.3rem, 6vmin, 6rem);
			color: var(--FP-Developer-intro-color);
		}
		&__subtitle {
			font-size: max(0.8rem, 2vmin);
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
		height: calc(var(--100vh) * 2);
		padding: 7vw max(20px, 5vw) 3vw;
		z-index: 5;
		background: url(/tehnicall-project/images/developer/aboutBackground.jpg)
			no-repeat 60% 50%;
		background-color: #212323;
		background-size: 200%;
		opacity: 0.6;
		animation: pan-image 15s linear infinite;

		&__wrapper {
			z-index: 2;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;

			&--title {
				height: 30vh;

				* {
					display: inline-block;
					font-size: max(3.7vmax, 1rem);
					border-bottom: 1px solid var(--blackTheme-border);

					max-width: 80%;
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
	perspective: 900px;
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
			padding-top: 3%;
			height: 100%;

			.howCreated__title {
				text-align: center;

				* {
					font-size: max(2vw, 2rem);
				}
			}
			.howCreated__wrapper {
				max-width: max(95%, 15px);
				margin-inline: auto;
				min-height: 100%;
				&-titles {
					height: max(8vmax, 4rem);
					margin-top: 6vh;

					&:nth-child(odd) {
						text-align: end;
					}
					* {
						display: inline-block;
						font-size: max(2.5vmax, 1.5rem);
						max-width: 80%;
					}
				}
			}
		}

		&__rightPart {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			width: 30vw;
			align-items: center;
			padding-block: 10vh;

			border-left: 1px solid #676767;

			.howCreated__sleep {
				height: 20vmax;
				width: 20vmax;
				bottom: 0;
			}
		}

		&__backgroundSvg {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			filter: brightness(0.3);
			transform: translate(0, -50%);
			top: 50%;
		}
		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0px;
			transform: translate(-100%, 20%);
			width: 100px;
			height: 80%;
			border: 1px solid rgb(255, 255, 255);
			border-radius: 7rem 0 0 0rem;
			//border-top-left-radius: 4rem 60%;
			border-right: 0;
			background: var(--app-bc);
		}
	}
}

.wrapperQualities {
	perspective: 900px;
	top: 0;
	position: absolute;
	width: 100%;

	.qualities {
		height: 300vh;

		&__intro {
			padding: 13vh 0 0 17vw;
			height: 100vh;

			&-subtitle {
				border-bottom: 1px solid #676767;
				display: inline;
				font-size: max(1.5vmax, 0.6rem);
			}

			&-title {
				* {
					font-style: oblique;
					font-variant: small-caps;
					font-size: max(6vmax, 4rem);
				}

				:nth-child(1) {
					color: rgb(138 255 92);
				}
				:nth-last-child(1) {
					padding-left: 3vw;

					span {
						color: #ff4c4c;
					}
				}
			}
		}
		.accordions {
			display: flex;
			flex-direction: column;
			max-width: max(40vw, 20rem);
			border-radius: 2rem;
			padding-block: 3rem;
			padding-inline: 2rem;

			.accordion {
				border-radius: 1rem;
				padding: 0.5rem;
				margin-bottom: 0.2rem;

				.title {
					padding: 1rem;
					font-size: max(1vw, 1rem);
					text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
				}
				.text {
					overflow: hidden;
				}
			}
		}

		&__pros {
			height: 100vh;
			&-wrapper {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding-left: 18vw;
			}
			&-accordions {
				background-color: rgb(0, 128, 76);

				.accordion {
					background-color: rgb(0, 128, 76);
					background-image: linear-gradient(
						135deg,
						rgb(54, 191, 63) 0%,
						rgb(0, 128, 76) 100%
					);
				}
			}
		}
		&__cons {
			height: 100vh;

			&-wrapper {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: end;
				padding-right: 18vw;
			}

			&-accordions {
				background: #ff4c4c;
			}
		}

		&__wrapperChecklist {
			z-index: -1;
			overflow: hidden;
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			filter: brightness(0.5);
			max-width: 100%;
			.qualities__checklist {
				translate: 40rem 18rem;
				scale: 2;
				transform: rotateY(-40deg) rotateX(22deg);
			}
		}

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0px;
			transform: translate(-100%, 20%);
			width: 100px;
			height: 80%;
			border: 1px solid rgb(255, 255, 255);
			border-radius: 7em 0 0 4rem;
			border-top-left-radius: 4rem 60%;
			border-right: 0;
			background: var(--app-bc);
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: -1px;
			transform: translate(0, -100%);
			width: 50%;
			height: 40px;
			border: 1px solid rgb(255, 255, 255);
			border-radius: 1rem 1rem 0 0;
			border-bottom: 0;
			background: var(--app-bc);
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
	.wrapperHowCreated {
		.howCreated {
			flex-direction: column-reverse;

			&__leftPart {
			}
			&__rightPart {
				background-color: var(--app-bc);
				width: 100% !important;
				align-items: flex-start !important;
				box-shadow: 0px 1px 7px 0px #363636;
			}
		}
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
