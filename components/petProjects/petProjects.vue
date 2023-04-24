<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import isometricCoffee from '~/assets/Icons/isometricCoffee.vue'
import checklist from '~/assets/Icons/checklist.vue'
import GoogleSvg from '~~/assets/Icons/googleSvg.vue'
import MicrosoftSvg from '~~/assets/Icons/microsoftSvg.vue'
import TelegramSvg from '~~/assets/Icons/telegramSvg.vue'
import YandexSvg from '~~/assets/Icons/YandexSvg.vue'
import HowCreateSvg from '~~/assets/Icons/HowCreate.vue'

const windowHeight =
	parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 ||
	window.innerHeight
const vh = (coef: number) => windowHeight * (coef / 100)
const intro = '#intro'
const about = '#about'
const majorTrigger = `#intro-Landing`

interface AnimStartEnd {
	animations: Animations
	calculateStart: Function
	calculateEnd: Function
}
interface Animations {
	[key: string]: {
		start: number
		end: number
	}
}

//sections /*
function AnimateDeveloperSection() {
	ScrollTrigger.create({
		trigger: `#MainWrapper`,
		scrub: 1,
		pin: true,
		anticipatePin: 1,
		//markers: true,

		start: 'top top',
		end: `bottom top`
	})
}
function animateIntro() {
	const intro = `#intro`
	const wrapperIntro = `#wrapperIntro`
	const introWrapperAnimation = `.intro__wrapper`
	const leftPartWrapperAnimation = `#intro-Landing__leftPart__wrapper`
	const topPartWrapperAnimation = `#intro-Landing__topPart__wrapper`
	const introLanding = `#intro-Landing`
	const startAnimation = 0
	const animationsStartEnd = {
		animations: {
			animationIntroOpacity: {
				start: 0,
				end: vh(70)
			},
			animationIntro: {
				start: vh(125),
				end: vh(60)
			},
			animateWrapperParts: {
				start: vh(125),
				end: vh(90)
			}
		},
		calculateStart: function (animationName: string) {
			return startAnimation + this.animations[animationName].start
		},
		calculateEnd: function (animationName: string) {
			return this.animations[animationName].start + this.animations[animationName].end
		}
	} as AnimStartEnd
	gsap.set(wrapperIntro, {
		visibility: 'hidden'
	})
	gsap.set(intro, {
		borderRadius: '12%',
		z: '20rem',
		//rotationX: 3,
		xPercent: -9,
		rotationY: -27,
		filter: 'brightness(1)',
		transform: 'translate(0, 0)'
	})

	const tlAnimationIntroOpacity = gsap.timeline({
		scrollTrigger: {
			trigger: wrapperIntro,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `${animationsStartEnd.calculateStart('animationIntroOpacity')} bottom`,
			end: `${animationsStartEnd.calculateEnd('animationIntroOpacity')} bottom`
		}
	})
	const tlAnimationIntro = gsap.timeline({
		scrollTrigger: {
			trigger: wrapperIntro,
			scrub: 1,
			//	markers: true,
			start: `${animationsStartEnd.calculateStart('animationIntro')} center`,
			end: `bottom-+=${animationsStartEnd.calculateEnd('animationIntro')} center`
		}
	})
	const tlAnimateWrapperParts = gsap.timeline({
		scrollTrigger: {
			trigger: intro,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `${animationsStartEnd.calculateStart('animateWrapperParts')} center`,
			end: `bottom-+=${animationsStartEnd.calculateEnd('animateWrapperParts')} center`
		}
	})
	tlAnimationIntroOpacity
		.to(
			wrapperIntro,
			{
				visibility: 'visible'
			},
			'-0.5'
		)
		.fromTo(intro, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 })

		.fromTo(
			introWrapperAnimation,
			{ autoAlpha: 0 },
			{
				ease: 'back.Out(4)',
				autoAlpha: 1,
				y: '40vh',
				z: '-10rem',
				duration: 1
			},
			'>'
		)
	tlAnimateWrapperParts
		.fromTo(introLanding, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
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
			let { isMobile } = context.conditions as gsap.Conditions
			const autoAlphaEnd = isMobile ? 0 : 1

			tlAnimationIntro
				.to(intro, {
					z: '-50rem',
					rotationY: -4,
					rotationX: 10,
					scaleX: 1.5,
					scaleY: 1.9,
					filter: 'brightness(1.2)',
					duration: 3
				})
				.to(
					introWrapperAnimation,
					{
						z: 0,
						autoAlpha: 0
					},
					'<'
				)
				.to(intro, {
					autoAlpha: autoAlphaEnd,
					stagger: 1,
					duration: 3,
					...(isMobile
						? {}
						: {
								scaleX: 0.2,
								scaleY: 0.35,
								z: 0,
								filter: 'brightness(1)',
								rotationX: 0,
								rotationY: 0,
								xPercent: 10,
								yPercent: 25
						  })
				})
		}
	)
}
function animateSwitchToAbout() {
	const leftPartWrapperAnimation = `#intro-Landing__leftPart__wrapper`
	const topPartWrapperAnimation = `#intro-Landing__topPart__wrapper`
	const wrapperAbout = `#wrapperAbout`
	const wrapperIntro = `#wrapperIntro`
	const introLanding = `#intro-Landing`
	const introLandingLeftPart = `#intro-Landing__leftPart`
	const introLandingTopPart = `#intro-Landing__topPart`
	const animationRotationY = 100
	const deepSlope = 15
	let config = {}
	let config2 = {}

	gsap.set(wrapperAbout, {
		visibility: 'hidden'
	})
	gsap
		.matchMedia()
		.add({ isMobile: `(max-width: 769px)`, isDekstop: `(min-width: 768px)` }, context => {
			let { isMobile } = context.conditions as gsap.Conditions
			config = isMobile
				? {}
				: {
						xPercent: 17,
						yPercent: 4,
						rotation: '-4',
						//rotationY: 40,
						rotationX: deepSlope / 2,
						scaleX: 0.3,
						scaleY: 0.55,
						z: '10rem'
				  }
			config2 = isMobile
				? {}
				: {
						//rotationY: animationRotationY,
						xPercent: 5,
						yPercent: 2,
						rotationX: deepSlope,
						scaleX: 0.2,
						scaleY: 0.85
				  }
		})
	const tlIntroLandingMisc = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,

			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(50)} center`,
			end: `bottom+=${vh(110)} center`
		}
	})
	const tlIntroLanding = gsap.timeline({
		force3D: true,
		scrollTrigger: {
			trigger: majorTrigger,
			toggleActions: 'play play play reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(20)} center`,
			end: `bottom+=${vh(130)} center`
		}
	})

	tlIntroLanding

		.to(intro, {
			...config,
			duration: 0.6
		})
		.addPause()
		.to(intro, {
			...config2,
			duration: 0.7
		})
		.to(wrapperIntro, { visibility: 'hidden' }, '<59%')
		.to(wrapperAbout, { visibility: 'visible' }, '<')
		.fromTo(
			about,
			{
				...config,
				xPercent: 7,
				yPercent: 4,
				borderTopRightRadius: '40rem 15rem',
				borderRadius: '30%',
				rotationY: 270,
				rotationX: (deepSlope - 100 / 27) * -1
			},
			{
				xPercent: 0,
				rotationY: 290,
				duration: 0.7
			},
			'-=0.5'
		)
		.addPause()
		.to(
			about,
			{
				xPercent: 7,
				yPercent: 1.7,
				rotation: -3.1,
				rotationY: 331,
				rotationX: 0.9,
				scaleX: 0.87,
				scaleY: 1.01,
				duration: 1
			},
			'<50%'
		)
		.addPause()
		.to(about, {
			scale: 1,
			xPercent: 0,
			rotation: 0,
			rotationX: 0,
			rotationY: 360,
			borderRadius: 0,
			transform: 'translate(0, 0)',
			yPercent: 0,

			duration: 1
		})
		.to(introLanding, { visibility: 'hidden' })

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
		.to([introLandingLeftPart, introLandingTopPart], {
			autoAlpha: 0
		})
}
function animateAbout() {
	const wrapperTitleAnimation = '#about__wrapper__title__inner'
	const aboutWrapper = `#about__wrapper`

	const containerHeight: number = document.getElementById('about__wrapper')!.offsetHeight
	const distanceFromCenter: number = -(containerHeight - windowHeight) / containerHeight
	const mathYPercent = Math.min(0, distanceFromCenter * 100)
	gsap.set(['#about__wrapper'], {
		autoAlpha: 0
	})
	gsap.set(wrapperTitleAnimation, {
		y: '50vh',
		opacity: 0
	})
	const tlAboutAppearance = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			toggleActions: 'play play reverse reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(110)} center`,
			end: `bottom+=${vh(200)} center`
		}
	})
	const tlAboutScrolling = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			toggleActions: 'play play reverse reverse',
			scrub: 1,

			////	markers: true,
			start: `bottom+=${vh(210)} center`,
			end: `bottom+=${vh(350)} center`
		}
	})

	tlAboutAppearance.to(aboutWrapper, {
		autoAlpha: 1
	})
	tlAboutScrolling.to(aboutWrapper, {
		yPercent: mathYPercent
	})
	// tlanimateTitles.staggerFromTo(
	// 	wrapperTitleAnimation,
	// 	0.5,
	// 	{
	// 		yPercent: 50
	// 	},
	// 	{
	// 		autoAlpha: 1,
	// 		yPercent: 0,
	// 		ease: 'back.out(4)',
	// 		transform: 'translate(0,0)'
	// 	},
	// 	0.5
	// )
	ScrollTrigger.batch(wrapperTitleAnimation, {
		start: `bottom+=${vh(340)} bottom`,
		end: `bottom+=${vh(440)} bottom`,

		interval: 2,
		batchMax: 1,
		onEnter: batch => {
			gsap.to(batch, {
				opacity: 1,
				y: 0,
				stagger: 0.15,
				overwrite: true
			})
		},
		onEnterBack: batch => {
			gsap.to(batch, {
				autoAlpha: 1,
				y: 0,
				stagger: 0.15,
				overwrite: true
			})
		},
		onLeaveBack: batch => {
			gsap.to(batch, { y: '50vh', opacity: 0, overwrite: true })
		},
		onLeave: batch => {
			gsap.to(batch, { y: '-50vh', opacity: 0, overwrite: true })
		}
	})

	// aboutTitlesElements.forEach(element => {
	// 	tlanimateTitles.fromTo(
	// 		element,
	// 		{
	// 			yPercent: 50
	// 		},
	// 		{
	// 			autoAlpha: 1,
	// 			yPercent: 0,
	// 			ease: 'back.out(4)',
	// 			transform: 'translate(0,0)',
	// 			duration: 0.2,
	// 			stagger: 0.5
	// 		}
	// 	)
	// })
}
function switchToHowCreate() {
	const wrapperHowCreated = `#wrapperHowCreated`
	const wrapperAbout = `#wrapperAbout`
	const crutch = `.howCreated__crutch`
	const coffee: string = `#howCreated__coffee`
	const config: {
		aboutScaleX: number
		coffeeXpercent: number
	} = {
		aboutScaleX: 0,
		coffeeXpercent: 0
	}
	// sets the scaleX, Xpercent properties based on screen width
	gsap.matchMedia().add(
		{
			isMobile: `(max-width: 768px)`,
			isDekstop: `(min-width: ${768 + 1}px)`
		},
		context => {
			let { isMobile } = context.conditions as gsap.Conditions
			config.aboutScaleX = isMobile ? 0.3 : 0.2
			config.coffeeXpercent = isMobile ? 0 : -38
		}
	)
	gsap.set(coffee, {
		scale: 1,
		width: '100vw',
		rotation: 0,
		yPercent: -5,
		xPercent: config.coffeeXpercent,
		rotateY: '360deg',
		height: '100vh',
		position: 'absolute',
		autoAlpha: 0
	})
	const animateSwitchToHowCreate = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			scrub: 1,
			////	markers: true,
			start: `bottom+=${vh(370)} center`,
			end: `bottom+=${vh(600)} center`
		}
	})
	animateSwitchToHowCreate
		.to(about, {
			scaleY: 0.2,
			scaleX: config.aboutScaleX,
			yPercent: -23,
			rotationY: '180deg',
			borderRadius: '30%',
			duration: 1
		})
		.to(
			coffee,
			{
				scaleY: 0.2,
				scaleX: config.aboutScaleX,
				immediateRender: false,
				yPercent: -30,
				rotationY: '180deg',
				duration: 1
			},
			'<'
		)
		.to(wrapperHowCreated, { visibility: 'visible' }, '<')
		.to(coffee, { autoAlpha: 1 }, '<45%')
		.to(wrapperAbout, { visibility: 'hidden' }, '<')
		.to(coffee, {
			scale: 1,
			xPercent: 0,
			yPercent: 0,
			height: '20vmax',
			width: '20vmax',
			y: 0,
			position: 'relative',
			duration: 0.5
		})
		.to(crutch, { display: 'none', duration: 0 }, '-=0.4')
}
function animateHowCreate() {
	const wrapperHowCreated = `#wrapperHowCreated`
	const howCreatedWrapper = `#howCreated__wrapper`
	const titles = `#howCreated__wrapper-titles *`
	const RightPartHeight = (document.querySelector(`.howCreated__rightPart`) as HTMLElement)
		.offsetHeight
	const tlLeftPartWrapper = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(540)} center`,
			end: `bottom+=${vh(600)} center`
		}
	})
	const tlAnimateTitles = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			toggleActions: 'play reverse play reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(650)} center`,
			end: `bottom+=${vh(900)} center`
		}
	})
	const howCreatedWrapperElement = document.querySelector(howCreatedWrapper) as HTMLElement
	let containerHeight = howCreatedWrapperElement.offsetHeight + 100
	if (window.matchMedia('(max-width: 768px)').matches) {
		containerHeight += RightPartHeight
	}
	const mathYPercent = Math.min(0, ((containerHeight - windowHeight) / containerHeight) * -1 * 100)

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
				yPercent: mathYPercent,
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
	const tl = gsap
		.timeline({
			stagger: 0.5,
			ease: 'power2.inOut',
			scrollTrigger: {
				trigger: majorTrigger,
				toggleActions: 'play none none reverse',
				scrub: 1,
				//markers: true,
				start: `bottom+=${vh(950)} center`,
				end: `bottom+=${vh(1100)} center`
			}
		})
		.fromTo(
			howCreated,
			{
				filter: 'brightness(1) blur(0px)'
			},
			{
				y: '-150vh',
				z: '-30rem',
				rotation: 15,
				outline: '1px solid white',
				borderBottomLeftRadius: 0,
				borderRadius: '2rem',
				rotationX: 20,
				filter: 'brightness(0.3) blur(4px)',
				duration: 1.5,
				ease: 'power2.out',
				willChange: 'filter',
				stagger: 1.5
			},
			'<'
		)
		.to(wrapperQualities, { visibility: 'visible' }, '<')
		.fromTo(
			qualities,
			{
				outline: '1px solid white',
				borderTopRightRadius: 0,
				yPercent: 90,
				z: '-40rem',
				rotationX: 15,
				rotationY: 10,
				borderRadius: '2rem',
				rotation: 10,
				filter: ' blur(4px)',
				willChange: 'filter'
			},
			{
				yPercent: 0,
				z: 0,
				rotationX: '0',
				rotationY: '0',
				rotation: '0',

				borderRadius: 0,
				filter: ' blur(0px)',
				duration: 1.5,
				ease: 'power2.out',
				stagger: 1.5
			},
			'<-50%'
		)
		.set(qualities, {}, '<95%')
		.to(wrapperHowCreated, { visibility: 'hidden' })
}
function animateQualities() {
	const qualities = `#qualities`
	const wrapperQualities = `#wrapperQualities`
	const prosAccordions = `#qualities__pros-accordions`
	const consAccordions = `#qualities__cons-accordions`
	const qualitiesStartAnimation = vh(1150)

	const animationsStartEnd = {
		animations: {
			switchToPros: {
				start: vh(0),
				end: vh(250)
			},
			moveCons: {
				start: vh(130),
				end: vh(620)
			},
			switchToCons: {
				start: vh(550),
				end: vh(150)
			},
			prosText: {
				start: vh(300),
				end: vh(200)
			},
			consText: {
				start: vh(820),
				end: vh(200)
			}
		},
		calculateStart: function (
			animationName: string,
			startAnimation: number = qualitiesStartAnimation
		) {
			return startAnimation + this.animations[animationName].start
		},
		calculateEnd: function (animationName: string) {
			return (
				qualitiesStartAnimation +
				this.animations[animationName].start +
				this.animations[animationName].end
			)
		}
	} as AnimStartEnd

	const prosTextAnimationArray: Element[] = gsap.utils.toArray(`${prosAccordions} .text`)
	const consTextAnimationArray: Element[] = gsap.utils.toArray(`${consAccordions} .text`)
	animationText(
		majorTrigger,
		prosTextAnimationArray,
		animationsStartEnd.calculateStart('prosText'),
		animationsStartEnd.calculateEnd('prosText')
	)
	animationText(
		majorTrigger,
		consTextAnimationArray,
		animationsStartEnd.calculateStart('consText'),
		animationsStartEnd.calculateEnd('consText')
	)

	gsap.set(wrapperQualities, {
		visibility: 'hidden',
		opacity: 1
	})

	const tlSwitchToPros = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			scrub: 1,
			//markers: true,
			start: `bottom+=${animationsStartEnd.calculateStart('switchToPros')} center`,
			end: `bottom+=${animationsStartEnd.calculateEnd('switchToPros')} center`
		}
	})
	const tlMoveCons = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			scrub: 1,
			//markers: true,
			start: `bottom+=${animationsStartEnd.calculateStart('moveCons')} center`,
			end: `bottom+=${animationsStartEnd.calculateEnd('moveCons')} center`
		}
	})
	const tlSwitchToCons = gsap.timeline({
		scrollTrigger: {
			trigger: majorTrigger,
			scrub: 1,
			//markers: true,
			start: `bottom+=${animationsStartEnd.calculateStart('switchToCons')} center`,
			end: `bottom+=${animationsStartEnd.calculateEnd('switchToCons')} center`
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

	function animationText(trigger: string, arrayOfElements: Element[], start: number, end: number) {
		gsap.fromTo(
			arrayOfElements,
			{ height: 0 },
			{
				height: 'auto',
				autoAlpha: 1,
				stagger: 1.2,
				duration: 0.5,
				ease: 'power2.inOut',
				scrollTrigger: {
					trigger: trigger,
					scrub: 1,
					//markers: true,
					start: `bottom+=${start} center`,
					end: `bottom+=${end} center`
				}
			}
		)
		gsap.to(arrayOfElements.slice(0, -1), {
			height: 0,
			autoAlpha: 0,
			stagger: 0.9,
			duration: 1.1,
			ease: 'power2.inOut',
			scrollTrigger: {
				trigger: trigger,
				scrub: 1,
				//markers: true,
				start: `bottom+=${start + vh(60)} center`,
				end: `bottom+=${end + vh(20)} center`
			}
		})
	}
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	nextTick(() => {
		AnimateDeveloperSection()
		animateIntro()
		animateSwitchToAbout()
		animateAbout()
		switchToHowCreate()
		animateHowCreate()
		switchToQualities()
		animateQualities()
	})
})
</script>

<template>
	<section id="MainWrapper" class="MainWrapper">
		<div id="wrapperIntro" class="wrapperIntro">
			<section id="intro" class="intro"></section>
			<div id="intro__wrapper" class="intro__wrapper">
				<h1 id="intro__title" class="title intro__title">
					Офис / <br />
					Продуктовая компания
				</h1>
				<div id="intro__subtitle" class="subtitle">
					<p>Компании занимающиеся развитием и продажей своего продукта</p>
				</div>
			</div>
		</div>
		<div id="intro-Landing" class="intro-Landing">
			<div id="intro-Landing__leftPart" class="intro-Landing__leftPart">
				<div id="intro-Landing__leftPart__wrapper" class="intro-Landing__leftPart__wrapper">
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
			<div id="intro-Landing__background" class="intro-Landing__background"></div>
			<div id="intro-Landing__topPart" class="intro-Landing__topPart">
				<div id="intro-Landing__topPart__wrapper" class="intro-Landing__topPart__wrapper">
					<h1>Что же скрывают</h1>
					<h1>эти огромные стены</h1>
				</div>
			</div>
		</div>
		<div id="wrapperAbout" class="wrapperAbout">
			<section id="about" class="about">
				<div id="about__wrapper" class="about__wrapper">
					<div class="about__wrapper__title">
						<div class="about__wrapper__title__inner">
							<h2>Что же это за компании?</h2>
						</div>
					</div>
					<div class="about__wrapper__title">
						<div id="about__wrapper__title__inner" class="about__wrapper__title__inner">
							<h2>у них много типов и обозначений</h2>
						</div>
					</div>
					<div class="about__wrapper__title">
						<div id="about__wrapper__title__inner" class="about__wrapper__title__inner">
							<h2>Некоторые из них</h2>
							<h2>собирают всех зубрил кода</h2>
						</div>
					</div>
					<div class="about__wrapper__title">
						<div id="about__wrapper__title__inner" class="about__wrapper__title__inner">
							<h2>Другие занимаются разработкой</h2>
							<h2>новых веб-сайтов и мессенджеров</h2>
						</div>
					</div>
					<div class="about__wrapper__title">
						<div id="about__wrapper__title__inner" class="about__wrapper__title__inner">
							<h2>А что касается</h2>
							<h2>программистов в таких местах</h2>
						</div>
					</div>
					<div class="about__wrapper__title">
						<div id="about__wrapper__title__inner" class="about__wrapper__title__inner">
							<h2>то они настоящие локальные боги</h2>
						</div>
					</div>
					<div class="about__wrapper__title">
						<div id="about__wrapper__title__inner" class="about__wrapper__title__inner">
							<h2>Ведь кто еще создаст и поддержит</h2>
							<h2>эти десятитысячные строки кода?</h2>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div id="wrapperHowCreated" class="wrapperHowCreated">
			<section id="howCreated" class="howCreated">
				<div class="howCreated__leftPart">
					<div id="howCreated__wrapper" class="howCreated__wrapper">
						<div class="howCreated__title">
							<h2>Но как же создаются эти веб приложения?</h2>
						</div>
						<div id="howCreated__wrapper-titles" class="howCreated__wrapper-titles">
							<h2>Берем несколько разработчиков</h2>
						</div>
						<div id="howCreated__wrapper-titles" class="howCreated__wrapper-titles">
							<h2>Даём им кофе и печенек</h2>
						</div>
						<div id="howCreated__wrapper-titles" class="howCreated__wrapper-titles">
							<h2>Заставляем работать по 24 часа</h2>
							<h2>(а они и не против)</h2>
						</div>
						<div id="howCreated__wrapper-titles" class="howCreated__wrapper-titles">
							<h2>
								присыпываем это свежими <br />
								слезами вызванными багами
							</h2>
						</div>
						<div id="howCreated__wrapper-titles" class="howCreated__wrapper-titles">
							<h2>и ваша программа....</h2>
						</div>
						<div id="howCreated__wrapper-titles" class="howCreated__wrapper-titles">
							<h2>Готова к использованию</h2>
						</div>
					</div>
					<HowCreateSvg id="howCreated__backgroundSvg" class="howCreated__backgroundSvg" />
				</div>
				<div class="howCreated__rightPart">
					<div class="howCreated__crutch"></div>
					<div id="howCreated__coffee" class="howCreated__coffee">
						<isometricCoffee width="10vmax" height="10vmax" />
					</div>

					<img class="howCreated__sleep" src="/images/developer/overtime.png" alt="" />
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
						<div id="qualities__pros-accordions" class="qualities__pros-accordions accordions">
							<h1>Преймущества</h1>
							<div class="accordions__wrapper">
								<div id="accordion" class="accordion__crutch">
									<div class="title">Развитие</div>
									<div class="text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quisquam. Lorem
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
										consectetur at iste deleniti aliquid saepe officiis placeat necessitatibus
										accusamus quasi vel dolores maiores explicabo, in eligendi, ullam enim
										repellendus cum.
									</div>
								</div>
								<div id="accordion" class="accordion">
									<div class="title">Развитие</div>
									<div class="text">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quisquam. Lorem
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
										consectetur at iste deleniti aliquid saepe officiis placeat necessitatibus
										accusamus quasi vel dolores maiores explicabo, in eligendi, ullam enim
										repellendus cum.
									</div>
								</div>

								<div id="accordion" class="accordion">
									<div class="title">Lorem, ipsum.</div>
									<div class="text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, eum?
									</div>
								</div>

								<div id="accordion" class="accordion">
									<div class="title">Lorem, ipsum.</div>
									<div class="text">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, similique.
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem asperiores
										fugit, quos nam labore quaerat doloribus consectetur facilis. Ex, eveniet?
										Dolorum dolores architecto iste, labore iusto cumque earum atque alias saepe
										corporis molestias unde. Optio nobis illum aperiam iste error voluptate nostrum
										aut. Accusantium quos, architecto provident mollitia aspernatur accusamus?
									</div>
								</div>

								<div id="accordion" class="accordion">
									<div class="title">Lorem, ipsum.</div>
									<div class="text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam.
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
										amet. Minima, similique. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Rerum, deserunt!
									</div>
								</div>

								<div id="accordion" class="accordion">
									<div class="title">Lorem, ipsum.</div>
									<div class="text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam.
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
										amet. Minima, similique. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Rerum, deserunt!
									</div>
								</div>

								<div id="accordion" class="accordion">
									<div class="title">Lorem, ipsum.</div>
									<div class="text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam.
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
										amet. Minima, similique. Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Rerum, deserunt!
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="qualities__cons" class="qualities__cons">
					<div id="qualities__cons-wrapper" class="qualities__cons-wrapper">
						<div id="qualities__cons-accordions" class="qualities__cons-accordions accordions">
							<h1>Недостатки</h1>
							<div id="accordion" class="accordion__crutch">
								<div class="title">Развитие</div>
								<div class="text">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quisquam. Lorem
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consectetur
									at iste deleniti aliquid saepe officiis placeat necessitatibus accusamus quasi vel
									dolores maiores explicabo, in eligendi, ullam enim repellendus cum.
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Развитие</div>
								<div class="text">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quisquam.
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, eum?
								</div>
							</div>
							<div id="accordion" class="accordion">
								<div class="title">Lorem, ipsum.</div>
								<div class="text">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
									amet. Minima, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, deserunt!
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
					<checklist id="qualities__checklist" class="qualities__checklist" size="40vmax" />
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
	height: 2400vh;
	min-height: var(--100vh);
	width: 100%;
	box-shadow: inset 0 -7px 20px -10px rgb(255 255 255 / 92%);
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
	perspective: 900px;
	z-index: 1;
	.intro {
		z-index: 15;
		background: url(/images/developer/intro.jpg) no-repeat 50%;
		background-size: cover;
		min-height: var(--100vh);
		display: flex;
		justify-content: center;
		align-items: flex-start;

		&__wrapper {
			padding: 1rem 0 1rem 1rem;
			z-index: 100;
			top: 0;

			left: 50%;
			position: absolute;
			backdrop-filter: blur(1rem) brightness(0.5);
			box-shadow: 0 6px 18px rgb(0 0 0 / 20%), 0 16px 28px rgb(0 0 0 / 20%);
			text-shadow: 0 0 12px rgb(0 0 0 / 60%);
			border-radius: 2rem;
			width: 60vw;
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
		background: url(/images/developer/google-office.jpg) no-repeat 50%;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 53%;
		filter: brightness(0.1);
		top: 0;
		background-size: cover;
	}
	&__leftPart {
		border-right: solid 2px rgb(93, 92, 97);
		width: 25%;
		height: 100vh;
		top: 0;

		&__wrapper {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: 2vmax;
			padding-block: max(1rem, 4vmax);
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
			font-size: max(1.6rem, 2vmax);
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

		&__wrapper {
			width: 100%;

			h1 {
				font-size: max(2.3vmax, 2rem);
			}
		}
	}
}

.wrapperAbout {
	top: 0;
	position: absolute;
	width: 100%;
	z-index: 20;

	.about {
		height: var(--100vh);
		overflow: hidden;
		z-index: 5;
		background: url(/images/developer/aboutBackground.jpg) no-repeat 60% 50%;
		background-color: #212323;
		background-size: 200%;
		animation: pan-image 15s linear infinite;

		&__wrapper {
			z-index: 2;
			display: flex;
			flex-direction: column;
			min-height: 100%;

			padding-block: 5vmax 2vmax;
			padding-inline: max(1.5rem, 5vw);
			width: 100%;

			&__title {
				min-height: 15vmax;
				margin-bottom: 2vmax;
				&__inner {
					display: inline-block;
					border-bottom: 1px solid var(--blackTheme-border);

					* {
						font-size: max(2.8vmax, 1rem);
					}
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

.howCreated__coffee {
	background: #141414;
	border-radius: 20%;
	height: 20vmax;
	width: 20vmax;
	z-index: 40;

	svg {
		width: 100%;
		height: 100%;
	}
}

.wrapperHowCreated {
	perspective: 900px;
	top: 0;
	position: absolute;
	width: 100%;
	z-index: 10;
	cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='70' height='84' viewport='0 0 100 100' style='fill:black;font-size:42px;'><text y='50%'>☕</text></svg>")
			16 0,
		auto;
	.howCreated {
		height: var(--100vh);
		background-color: var(--app-bc);
		display: flex;

		&__coffee {
			display: flex;
			align-items: center;
		}

		&__leftPart {
			width: 100%;
			padding-top: 3%;
			padding-bottom: 10%;
			height: 100%;

			.howCreated__title {
				text-align: center;

				margin-bottom: 2rem;
				* {
					font-size: max(2vw, 2rem);
				}
			}
			.howCreated__wrapper {
				max-width: max(95%, 15px);
				margin-inline: auto;
				min-height: 100%;
				&-titles {
					min-height: 8vmax;
					margin-bottom: 2vmax;

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
			align-items: center;
			justify-content: space-evenly;
			width: 30vw;

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
			position: absolute;
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
		.accordion__crutch {
			height: 0;
			overflow: hidden;
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
					background-image: linear-gradient(135deg, rgb(54, 191, 63) 0%, rgb(0, 128, 76) 100%);
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
				align-items: flex-end;
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
		width: 100%;
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

	.about {
		will-change: transform;
	}
	.wrapperHowCreated {
		.howCreated {
			flex-direction: column-reverse;

			&__leftPart {
			}
			&__rightPart {
				flex-direction: row-reverse;
				background-color: var(--app-bc);
				width: 100% !important;
				align-items: center !important;
				box-shadow: 0px 1px 7px 0px #363636;
				height: 30vh;
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
