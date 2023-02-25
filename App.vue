<script lang="ts">
export default {
	name: 'Vue',
	data() {
		return {
			scrollState: true
		}
	},
	mounted() {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		})
		document.addEventListener('scroll', () => {
			if (this.scrollState === true) {
				localStorage.scrolll = window.scrollY
				this.scrollState = false
				setTimeout(() => (this.scrollState = true), 200)
			}
		})

		if (localStorage.scrolll === 0) {
			scrollTo(0, localStorage.scrolll)
		} else if (localStorage.scrolll >= 100) {
			scrollTo(0, localStorage.scrolll)
		}
	}
}
</script>

<template>
	<LazyLayoutHeader />
	<NuxtPage />
	<LazyLayoutFooter />
</template>
