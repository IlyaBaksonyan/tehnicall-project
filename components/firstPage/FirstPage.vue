<script setup lang="ts">
import throttle from '~~/utils/throttling.vue'
import firstScreen from './firstScreen/firstScreen.vue'
import ArrowDown from '~~/assets/Icons/arrowDown.vue'
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
const isFirefox = /isFirefox/i.test(navigator.userAgent)
let main = ref()
let stateFilter: boolean = true
let scrollbarState: boolean = true

function CheckScroll() {
	nextTick(() => {
		if (window.scrollY === 0) {
			setScrollbarRule()
			deleteScrolledOnMain()
			setFilterBlur(0)
			scrollbarState = true
		}
	})
}

function setBlur() {
	if (window.scrollY < window.innerHeight) {
		if (stateFilter) {
			const filterBlur = window.scrollY * 0.01
			setFilterBlur(filterBlur)
			main.value.classList.add('scrolled')
			if (scrollbarState) {
				deleteScrollbarRule()

				scrollbarState = false
			}
			stateFilter = false
			setTimeout(() => {
				stateFilter = true
			}, 400)
		}
	}
}
function scrollButton() {
	window.scrollBy(0, window.innerHeight + 10)
}

onMounted(() => {
	CheckScroll()

	document.addEventListener(
		'scroll',
		() => {
			CheckScroll()
			setBlur()
		},
		{ passive: true }
	)
})
onUnmounted(() => {
	document.body.removeAttribute('scrolled')
	localStorage.scrolll = 0
})
function deleteScrollbarRule() {
	if (isFirefox) {
		document.styleSheets[0].deleteRule(0)
	} else {
		document.styleSheets[0].deleteRule(0)
	}
}
function setScrollbarRule() {
	if (isFirefox) {
		document.styleSheets[0].insertRule('html { scrollBar-width: none } ', 0)
	} else {
		document.styleSheets[0].insertRule(
			'body::-webkit-scrollbar { width: 1px } ',
			0
		)
	}
}

function deleteScrolledOnMain() {
	main.value.classList.remove('scrolled')
}
function setFilterBlur(blur: number) {
	main.value.style.filter = `blur(${blur}px)`
}
</script>

<template>
	<main ref="main" class="main">
		<firstScreen />
		<FirstPageNoCode />
		<FirstPageFreelancerApproach />
		<ArrowDown width="5rem" class="arrowDown" @click="scrollButton" />
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
.arrowDown {
	cursor: pointer;
	transform: translate(-50%, -100%);
	left: 50%;
	position: absolute;

	&:hover {
		stroke: rgba(255, 255, 255, 0.579);
	}
}
.scrolled {
	pointer-events: none;
}
</style>
