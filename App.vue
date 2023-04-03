<script setup lang="ts">
import throttling from './utils/throttling.vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// eslint-disable-next-line no-undef
useHead({
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js'
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js'
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js'
		}
	]
})
function scrollBehavior() {
	const scrollThrottling = throttling(() => {
		localStorage.scrolll = window.scrollY
	}, 300)
	document.addEventListener('scroll', scrollThrottling)
	window.addEventListener('beforeunload', () => {
		if (window.scrollY === 0) {
			localStorage.scrolll = 0
		}
	})
}
function setCustomVH() {
	CalculatedVh()
	//if resize
	window.addEventListener('resize', () => {
		CalculatedVh()
	})
}

function copyToClipboard() {
	let t: NodeListOf<Element> = document.querySelectorAll('.copied')
	if (t) {
		t.forEach(el => {
			el.setAttribute('title', 'Скопировать')
			el.addEventListener('click', (e: Event) => {
				const copiedElement = e.target!
				copyText(copiedElement)
			})
		})
	}

	function copyText(element: Element | EventTarget) {
		const text = (element as Element).textContent!
		navigator.clipboard.writeText(text)
	}
}

onMounted(() => {
	gsap.registerPlugin(ScrollToPlugin)
	setCustomVH()
	scrollBehavior()
	copyToClipboard()
	// nextTick(() => {
	// 	setTimeout(() => {
	// 		gsap.to(window, {
	// 			scrollTo: { y: localStorage.scrolll, autoKill: true },
	// 			duration: 2
	// 		})
	// 	}, 100)
	// })
})
function CalculatedVh() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}
</script>

<template>
	<NuxtLayout>
		<LayoutHeader />
		<NuxtPage />
	</NuxtLayout>
</template>
