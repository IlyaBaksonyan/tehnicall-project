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
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js'
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js'
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
			//markers: true,
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
	mediaQuery: number = 0,
	endOpacity: number = 1
) {
	gsap.matchMedia().add(
		{
			isMobile: `(max-width: ${mediaQuery}px)`,
			isDekstop: `(min-width: ${mediaQuery + 1}px)`
		},
		context => {
			let { isMobile, isDekstop } = context.conditions as gsap.Conditions

			gsap.fromTo(
				target,
				{ autoAlpha: 0 },
				{
					autoAlpha: isMobile ? endOpacity : 1,
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
	)
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
			//yPercent: '-100%'
			//transform: 'translate(0, -7rem) rotateX(100deg)'
		},
		{
			ease: 'ease',

			autoAlpha: 1,

			rotateX: '0',
			yPercent: '0',
			stagger: 1,
			//transform: 'translate(0, 0) rotateX(0deg)',
			duration: 1.5,
			scrollTrigger: {
				trigger: trigger,
				markers: true,
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
	const introWrapper = `#intro__wrapper`
	const widthLeftPart = gsap.getProperty(`${target}---leftPart`, 'width')
	const leftPartBorderRight = gsap.getProperty(
		`${target}---leftPart`,
		'border-right'
	)
	const writeBorderBottom = gsap.getProperty(
		`${target}---write`,
		'border-bottom'
	)
	const introWrapperWriteElement = document.querySelector(
		`${target}---write`
	) as HTMLElement

	introWrapperWriteElement.style.setProperty(
		'--widthLeftPart',
		`${widthLeftPart}px`
	)

	// animateTitle(`${target}__title`, target, vh(25))
	// animateSubTitle(`${target}__subtitle`, target, vh(25))
	animateIntroMedia(target, 768)
	const tl = gsap
		.timeline()

		.from(target, {
			scrollTrigger: {
				trigger: `#MainWrapper`,
				scrub: 1,
				pin: true,
				markers: true,
				start: 'top top',
				end: `bottom top`
			}
		})
		// animateIntroOpacity
		// .fromTo(
		// 	target,
		// 	{ autoAlpha: 0 },
		// 	{
		// 		autoAlpha: 1,
		// 		scrollTrigger: {
		// 			trigger: `${target}`,
		// 			toggleActions: 'play pause none reverse',
		// 			//markers: true,
		// 			scrub: 1,
		// 			start: '100 bottom',
		// 			end: 'center bottom'
		// 		}
		// 	}
		// )
		// animateIntroWrapperOpacity
		.fromTo(
			introWrapper,
			{
				autoAlpha: 0
			},
			{
				ease: 'ease',
				y: '40vh',
				autoAlpha: 1,
				scrollTrigger: {
					trigger: target,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: '100 bottom',
					end: 'center+=200 bottom'
				}
			}
		)
		//animateIntroWrapperLocation
		.to(
			introWrapper,

			{
				borderTopRightRadius: '0',
				borderBottomRightRadius: '0',
				scrollTrigger: {
					trigger: introWrapper,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(80)} center`,
					end: `${vh(200)} center`
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
					end: `${vh(200)} center`
				}
			}
		)
		//animateWrapperLeftPart
		.fromTo(
			`${target}---leftPart`,
			{
				autoAlpha: 0
			},
			{
				autoAlpha: 1,

				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(120)} center`,
					end: `${vh(200)} center`
				}
			}
		)
		.fromTo(
			`${target}---leftPart__wrapper`,
			{
				autoAlpha: 0,
				rotateY: '280deg',
				xPercent: 50
			},
			{
				autoAlpha: 1,
				rotateY: '360deg',
				xPercent: 0,
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(100)} center`,
					end: `${vh(200)} center`
				}
			}
		)

		//animateWrapperText
		.fromTo(
			`${target}---write`,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(120)} center`,
					end: `${vh(200)} center`
				}
			}
		)
		.fromTo(
			`${target}---write__text`,
			{
				autoAlpha: 0,
				rotateX: '280deg',
				yPercent: -40
			},
			{
				rotateX: '360deg',
				yPercent: 0,
				autoAlpha: 1,
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(120)} center`,
					end: `${vh(200)} center`
				}
			}
		)
		//animateWrapperBackground
		.fromTo(
			`${target}---background`,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				filter: 'brightness(0.1)',
				scrollTrigger: {
					trigger: `${target}`,
					toggleActions: 'play pause none reverse',
					scrub: 1,
					//markers: true,
					start: `${vh(85)} center`,
					end: `${vh(200)} center`
				}
			}
		)
	function animateIntroMedia(target: string, mediaQuery: number = 0) {
		gsap.matchMedia().add(
			{
				isMobile: `(max-width: ${mediaQuery + 1}px)`,
				isDekstop: `(min-width: ${mediaQuery}px)`
			},
			context => {
				let { isMobile, isDekstop } = context.conditions as gsap.Conditions
				const autoAlphaStart = 1
				const autoAlphaEnd = isMobile ? 0 : 1
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: target,
						scrub: 1,
						start: `${vh(80)} center`,
						end: `${vh(200)} bottom`
						//markers: true
					}
				})

				tl.to(target, {
					autoAlpha: autoAlphaStart,
					scale: 1,
					width: '100%',
					xPercent: 0,
					yPercent: 0,
					rotation: 0,
					willChange: 'opacity',
					duration: 1
				}).to(target, {
					autoAlpha: autoAlphaEnd,
					scale: isMobile ? undefined : 0.5,
					width: isMobile ? undefined : '50%',
					xPercent: isMobile ? undefined : 125,
					yPercent: isMobile ? undefined : 25,
					//rotationY: isMobile ? undefined : '360deg',
					borderTopLeftRadius: isMobile ? undefined : '40rem 15rem',
					duration: 5
				})
			}
		)
	}
}

function animateSwitchToAbout(): void {
	const target = '#about'
	const wrapperIntro = `#intro---wrapper`
	const tlWrapperIntroMisc = gsap.timeline({
		scrollTrigger: {
			trigger: wrapperIntro,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom center`,
			end: `bottom+=${vh(50)} center`
		}
	})
	const tlWrapperIntro = gsap.timeline({
		scrollTrigger: {
			trigger: wrapperIntro,
			toggleActions: 'play none none reverse',
			scrub: 1,
			//markers: true,
			start: `bottom+=${vh(30)} center`,
			end: `bottom+=${vh(200)} center`
		}
	})

	gsap.set(target, {
		autoAlpha: 0,
		borderTopRightRadius: '40rem 15rem',
		scale: 0.5,
		width: '50%',
		xPercent: 125,
		yPercent: 25,
		rotationY: '180deg'
	})
	tlWrapperIntroMisc
		.to(`#intro---leftPart__wrapper`, {
			autoAlpha: 0,
			rotateY: '280deg',
			xPercent: 50,
			duration: 2
		})

		.to(`#intro---write__text`, {
			rotateX: '280deg',
			yPercent: -100,
			autoAlpha: 0,
			delay: -2,
			duration: 2
		})
		.to(`#intro---leftPart`, {
			autoAlpha: 0,
			borderRight: 0,
			delay: -1,
			duration: 0.1
		})
		.to(`#intro---write`, {
			autoAlpha: 0,
			borderBottom: 0,
			delay: -1,
			duration: 0.1
		})
	gsap
		.matchMedia()
		.add(
			{ isMobile: `(max-width: 768px)`, isDekstop: `(min-width: 768px)` },
			context => {
				let { isMobile, isDekstop } = context.conditions as gsap.Conditions

				isDekstop
					? tlWrapperIntro.to(`#intro`, {
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

	tlWrapperIntro
		.to(target, {
			xPercent: 70,
			yPercent: 0,
			rotationY: '286',
			rotation: '-12',
			scale: 1.25,
			delay: -1.5,
			duration: 1.5
		})
		.to(`#intro`, {
			autoAlpha: 0,
			delay: -0.6,

			duration: 0.2
		})
		.to(target, {
			autoAlpha: 1,
			delay: -0.6,
			duration: 0.1
		})
		.to(target, {
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
		.to(`#intro`, {
			autoAlpha: 0,
			yPercent: 200,
			duration: 0.1
		})

	//Svg
	//animateMonitor
	// const monitor = `${target}__monitor`
	// animateSvg(monitor, target, true, 1024, 0.7)
	// //animateCoffee
	// const coffee = `${target}__coffee`
	// animateOpacitySvg(coffee, target)
	//Svg
}

function animateAbout() {
	const target = `#about`
	const tl = gsap
		.timeline({
			scrollTrigger: {
				trigger: target,
				toggleActions: 'play none none reverse',
				scrub: 1,
				//markers: true,
				start: `${vh(340)} center`,
				end: `${vh(440)} center`
			}
		})
		.to(target, {
			yPercent: -41
		})
}
// function animateHowCreate(): void {
// 	const target = '#howCreated'
// 	animateWrapper(target, 'start', 'center')

// 	// Svg
// 	const rain = `${target}__rain`
// 	animateSvg(rain, target, true, 1024, 0.6)
// }
// function animateQualities(): void {
// 	const target = '#qualities__intro'

// 	animateWrapper(target, 'start', 'center')

// 	//Svg
// 	const checklist = `#qualities__checklist`
// 	animateSvg(checklist, target, true, 1024, 0.6)
// }
// sections */
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)

	//animateCoffee()
	animateIntro()
	animateSwitchToAbout()
	animateAbout()
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

		<div id="intro---wrapper" class="intro---wrapper">
			<div id="intro---leftPart" class="intro---leftPart">
				<div id="intro---leftPart__wrapper" class="intro---leftPart__wrapper">
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
			<div id="intro---background" class="intro---background"></div>
			<div id="intro---write" class="intro---write">
				<div id="intro---write__text" class="intro---write__text">
					<h1>Что же скрывают</h1>
					<h1>эти огромные стены</h1>
				</div>
			</div>
		</div>
		<div id="wrapperAbout" class="wrapperAbout">
			<section id="about" class="about">
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
							На этой территории процветают мессенджеры, графические редакторы и
							другие продукты, приводящие в восторг даже котиков.
						</p>
					</div>
				</div>
				<div id="about__row" class="about__row about__row4">
					<div id="about__row--column" class="about__row-column1">
						<p>
							программисты занимают золотую позицию и являются ключевыми героями
							в процессе создания и поддержки продуктов.
						</p>
					</div>
					<div id="about__row--column" class="about__row-column2">
						<p>
							Но это не удивительно, ведь только от одного взгляда на кодовую
							базу такого приложения понимаешь что они настоящие короли джунглей
						</p>
					</div>
				</div>

				<isometricCoffee
					id="about__coffee"
					width="10vmax"
					height="10vmax"
					class="about__coffee"
				/>
			</section>
		</div>

		<section id="howCreated" class="howCreated">
			<div class="container">
				<div id="howCreated__wrapper" class="wrapper">
					<div id="howCreated__subtitle" class="subtitle">
						<p>
							Но как же создаётся это программное обеспечение или приложения?
						</p>
					</div>
					<h1 id="howCreated__title" class="title">Как создаются приложения</h1>
					<div id="howCreated__subtitle" class="subtitle">
						<p>
							В таких компаниях код пишется как обычно: ручками нескольких
							человек, при помощи бесчисленного количества кофе, несколько ночей
							без сна, присыпываем свежими слезами разработчиков и в итоге
							программа создана, и готова к подаче"
						</p>
					</div>
				</div>
			</div>
		</section>
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
	height: 250vh;
	top: 0px;
	position: absolute;
	right: 0;
	left: 0;
	svg {
		display: block;
	}
	.intro---background {
		background: url(/tehnicall-project/images/developer/google-office.jpg)
			no-repeat 50%;
		position: absolute;
		z-index: 0;
		width: 100vw;
		height: 100vh;
		top: 0;
		background-size: cover;
	}
	.intro---leftPart {
		border-right: solid 2px rgb(93, 92, 97);
		position: absolute;
		height: 100vh;
		top: 0;
		z-index: 15;
		.intro---leftPart__wrapper {
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

	.intro---write {
		height: 20vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-inline: max(5vw, 0.5rem);
		border-bottom: solid 2px rgb(93, 92, 97);
		left: var(--widthLeftPart);
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		&__text {
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
}
.aboutBackground {
	z-index: 14;
}
.MainWrapper {
	z-index: 100;
	background: var(--app-bc);
	overflow: hidden;
	//position: sticky;
	height: 17000px;
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

.about {
	background: var(--app-bc);
	right: 0;
	left: 0;
	position: absolute;
	height: 200vh;
	padding: 12vw 2rem 0 5vw;

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

	&__monitor {
		opacity: 0 !important;
		position: absolute;
		left: -23%;
		bottom: -6vmax;
	}

	&__coffee {
		opacity: 0 !important;
		position: absolute;
		right: 6%;
		bottom: 0;
	}
}
.howCreated {
	opacity: 0;
	&__rain {
		position: absolute;
		right: -23%;
		bottom: -6vmax;
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
		overflow: auto;
	}
}
</style>
<!-- <isometricMonitor -->
<!-- id="about__monitor" -->
<!-- width="50vmax" -->
<!-- height="50vmax" -->
<!-- class="about__monitor" -->
<!-- /> -->
<!-- <IsometricRain
				id="howCreated__rain"
				width="50vmax"
				height="50vmax"
				class="howCreated__rain"
			/> -->
