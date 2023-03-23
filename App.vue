<script setup lang="ts">
import throttling from './utils/throttling.vue'

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

onMounted(() => {
	setCustomVH()
	scrollBehavior()
	nextTick(() => {
		setTimeout(() => {
			window.scrollTo(0, localStorage.scrolll)
		}, 100)
	})
})
function CalculatedVh() {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}
</script>

<template>
	<LayoutHeader />
	<NuxtPage />
	<LayoutFooter />
</template>
