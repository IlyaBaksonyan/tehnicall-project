<script setup lang="ts">
function scrollBehavior() {
	let scrollState = true
	document.addEventListener('scroll', () => {
		if (scrollState) {
			if (window.scrollY <= 200) {
				localStorage.scrolll = 0
			} else {
				localStorage.scrolll = window.scrollY
			}

			scrollState = false
			setTimeout(() => (scrollState = true), 100)
		}
	})
}

function setCustomVH() {
	CalculatedVh()
	//if resize
	window.addEventListener('resize', () => {
		CalculatedVh()
	})
	function CalculatedVh() {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	}
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
</script>

<template>
	<LazyLayoutHeader />
	<NuxtPage />
	<LazyLayoutFooter />
</template>
