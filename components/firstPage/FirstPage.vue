<script setup lang="ts">
import firstScreen from './firstScreen/firstScreen.vue'
import buttonArrowDown from '~~/assets/Icons/buttonArrowDown.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isFirefox = /Firefox/i.test(navigator.userAgent)
let main = ref()

function CheckScroll() {
	if (window.scrollY === 0) {
		handleOnScrollbarRule()
	}
}
function mainAnimation() {
	const trigger = '.main'
	gsap.to(trigger, {
		pointerEvents: 'none',
		onStart: () => handleOffScrollbarRule(),

		scrollTrigger: {
			trigger: trigger,
			//markers: true,
			scrub: 0.01,
			start: 'start start'
		}
	})
	gsap.fromTo(
		trigger,
		{
			z: '1px',
			filter: 'blur(0px)'
		},
		{
			filter: 'blur(5px)',
			duration: 1,
			stagger: 1,
			scrollTrigger: {
				trigger: trigger,
				//markers: true,
				scrub: 1,
				start: 'start start',
				end: 'bottom center'
			}
		}
	)
}
function scrollButton() {
	gsap.to(window, { scrollTo: window.innerHeight + 10, duration: 0.5 })
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	handleOnScrollbarRule()
	mainAnimation()
	setScrollbarRule()
	window.addEventListener('scroll', CheckScroll)
})
onUnmounted(() => {
	window.removeEventListener('scroll', CheckScroll)
	localStorage.scrolll = 0
	handleOffScrollbarRule()
	gsap.killTweensOf('*')
})
function setScrollbarRule() {
	if (isFirefox) {
		document.styleSheets[0].insertRule('html { scrollBar-width: var(--scrollbar-width) } ', 0)
	} else {
		document.styleSheets[0].insertRule(
			'body::-webkit-scrollbar { width: var(--scrollbar-width )} ',
			0
		)
	}
}
function handleOffScrollbarRule() {
	if (isFirefox) {
		document.documentElement.style.setProperty('--scrollbar-width', 'initial')
	} else {
		document.body.style.setProperty('--scrollbar-width', 'initial')
	}
}
function handleOnScrollbarRule() {
	if (isFirefox) {
		document.documentElement.style.setProperty('--scrollbar-width', 'none')
	} else {
		document.body.style.setProperty('--scrollbar-width', '1px')
	}
}
</script>

<template>
	<main ref="main" class="main">
		<firstScreen />
		<FirstPageNoCode />
		<FirstPageFreelancerApproach />
		<buttonArrowDown width="5rem" class="buttonArrowDown" @click="scrollButton" />
	</main>
	<FirstPageDeveloperApproach />
</template>

<style scoped lang="scss">
.main {
	position: sticky;
	right: 0;
	left: 0;
	z-index: 10;
	top: var(--header-size);
	scroll-snap-type: y mandatory;

	height: var(--C100vh);
	max-height: var(--C100vh);
	overflow-x: hidden;

	section {
		height: var(--C100vh);
	}
	background: var(--FirstP-Main-Background);
}
.buttonArrowDown {
	cursor: pointer;
	transform: translate(-50%, -100%);
	left: 50%;
	position: absolute;

	&:hover {
		stroke: rgba(255, 255, 255, 0.579);
	}
}
</style>
